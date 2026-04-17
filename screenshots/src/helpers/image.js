import sharp from 'sharp';

const toPixels = (percent, total) => Math.round((percent / 100) * total);

const clampRect = (rect, width, height) => {
  const x = Math.max(0, Math.min(rect.x, width));
  const y = Math.max(0, Math.min(rect.y, height));
  return {
    x,
    y,
    width: Math.max(1, Math.min(rect.width, width - x)),
    height: Math.max(1, Math.min(rect.height, height - y)),
  };
};

export const applySpotlight = async (pngBuffer, spotlight, options = {}) => {
  const dimOpacity = options.dimOpacity ?? 0.55;
  const borderColor = options.borderColor ?? '#ffcc00';
  const borderWidth = options.borderWidth ?? 4;

  const base = sharp(pngBuffer);
  const { width, height } = await base.metadata();

  const rect = clampRect(
    {
      x: toPixels(spotlight.x, width),
      y: toPixels(spotlight.y, height),
      width: toPixels(spotlight.width, width),
      height: toPixels(spotlight.height, height),
    },
    width,
    height
  );

  const overlaySvg = Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <mask id="hole">
        <rect width="100%" height="100%" fill="white"/>
        <rect x="${rect.x}" y="${rect.y}" width="${rect.width}" height="${rect.height}" fill="black"/>
      </mask>
      <rect width="100%" height="100%" fill="black" fill-opacity="${dimOpacity}" mask="url(#hole)"/>
      <rect x="${rect.x}" y="${rect.y}" width="${rect.width}" height="${rect.height}"
            fill="none" stroke="${borderColor}" stroke-width="${borderWidth}"/>
    </svg>`
  );

  return sharp(pngBuffer)
    .composite([{ input: overlaySvg, top: 0, left: 0 }])
    .png()
    .toBuffer();
};

export const processImage = async (pngBuffer, screenshot) => {
  const image = sharp(pngBuffer);
  const { width, height } = await image.metadata();

  const crop = screenshot.crop ?? { x: 0, y: 0, width: 100, height: 100 };
  const cropRect = clampRect(
    {
      x: toPixels(crop.x, width),
      y: toPixels(crop.y, height),
      width: toPixels(crop.width, width),
      height: toPixels(crop.height, height),
    },
    width,
    height
  );

  const out = await image.extract(cropRect).toBuffer();

  if (screenshot.spotlight) {
    return applySpotlight(out, screenshot.spotlight, screenshot.spotlightOptions);
  }
  return out;
};

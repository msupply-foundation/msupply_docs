import fs from 'fs';

export const loadDotEnv = (envPath) => {
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
};

export const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    console.error(
      `Missing ${name}. Copy screenshots/.env.example to screenshots/.env and fill it in, ` +
        `or export ${name} in your shell before running.`
    );
    process.exit(1);
  }
  return value;
};

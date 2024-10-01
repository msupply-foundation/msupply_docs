# Open mSupply Documentation

This repo contains the public documentation for Open mSupply, hosted on [docs.msupply.foundation](https://docs.msupply.foundation/docs/introduction/).
Documentation is stored in markdown files and built using [zola](https://www.getzola.org/documentation/getting-started/installation/)

## Getting Started

This process has become slightly convoluted because zola to beginwith, but further because we use an outdated version of zola and installing it locally is no longer straightforward. We must use no more than version 17.2 of Zola, not 19.2 which is the latest as of writing.

### MacOS

#### Install Github Desktop

Git is a tool for managing codebases, and our docs are managed like a codebase. Github Desktop is an app that makes 99% of what you need to do with git actually user friendly, rather than user nightmare. https://desktop.github.com/download/

#### Clone This Repo(sitory)

In this webpage, near the top-ish right there is a green "Code" button. Click it and select "Open in Github Desktop".

![image](https://github.com/user-attachments/assets/7655cf5f-5a51-4774-9287-076d2cc01589)

Follow the prompts and let it clone the repo to your machine.

#### Build Zola version 17.2 😧

1. Clone Zola the same way as above with "Open in Github Desktop": https://github.com/getzola/zola
2. In github desktop, click on the "History" tab then scroll down and select the _commit_ that is tagged `v0.17.2`, right click and choose "Checkout Commit" ![image](https://github.com/user-attachments/assets/ec8cc390-c11f-49b4-bc61-2dda56957da1)
3. Install rust. You're a programmer Harry! https://www.rust-lang.org/tools/install
4. Open a terminal in your Zola repo directory. You can do this in github desktop in the "Repository" Menu "Open in Terminal", or navigate a terminal window there if you're in the know.
5. Run the command `cargo install --path . --locked` - this will use rust to build zola and install it
6. Run `Zola --version` and pray that you are on `0.17.2`

#### Serve our docs with Zola!

1. Open a terminal in the `msupply_docs` directory on your machine
2. Run `zola serve`
3. This will typically make the docs available on `http://localhost:1111`, it'll say where exactly after you run the above command.
4. Woo! Now if you make any updates to msupply_docs files, zola will detect the changes and refresh your browser tab for you.

## Contributing

Update and commit directly to main until a review process is defined :wink:

If you wish to serve images from a subdirectory rather than co-locating the content or storing in the static folder, you have to include an index file (`_index.md`) for the subdirectory to be included in the build.

## Deployment

This repo is automatically deployed to github pages on push to main. The github action is defined in `.github/workflows/static_deploy.yml`

The deployment code uses `zola 17.2`

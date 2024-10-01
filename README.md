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

#### Download Zola and Convince MacOS it is safe

1. Download [the terminal executable program for your OS](https://github.com/getzola/zola/releases/download/v0.17.2/zola-v0.17.2-x86_64-apple-darwin.tar.gz) from https://github.com/getzola/zola/releases/tag/v0.17.2
2. Extract it and copy `zola` file to `/usr/local/bin/` (pressing `cmd+shift+.` in a finder window will toggle showing hidden folders 🙂)
3. In a terminal try run `zola`. It'll complain about malware, at which point you can allow it in settings 
![image](https://github.com/user-attachments/assets/6d9869d0-86e9-49e3-9e04-f35481a30d94)
4. Run `zola --version` and if it says 0.17.2 you're good to go!

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

# Open mSupply Documentation

This repo contains the public documentation for Open mSupply, hosted on [docs.msupply.foundation](https://docs.msupply.foundation/docs/introduction/).
Documentation is stored in markdown files and built using [zola](https://www.getzola.org/documentation/getting-started/installation/)

## Getting Started

To edit the docs, first clone this repo locally. Then install zola: https://www.getzola.org/documentation/getting-started/installation/

You should be able to run the docs locally now, by opening a terminal or command prompt, navigating to the directory you've cloned into and entering

```
zola serve
```

The docs will then be available to view locally on http://localhost:1111

If you encounter an error:

```
Error: Failed to render section '/Users/m2/GitHub/msupply_docs/content/_index.md'
Reason: Failed to render 'index.html': error while rendering macro `macros_header::header` (error happened in a parent template)
Reason: Variable `config.default_language` not found in context while rendering 'macros/header.html'
```

ensure that you are running the most recent version of zola. There is a problem with `v0.14.0`. You can check with `zola --version`

## Contributing

Update and commit directly to main until a review process is defined :wink:

If you wish to serve images from a subdirectory rather than co-locating the content or storing in the static folder, you have to include an index file (`_index.md`) for the subdirectory to be included in the build.

## Deployment

Currently a manual process is required to build and publish.

# Description

This is the Ghost theme used for https://our.status.im/.

# Usage

Here's how you can get an archive built:

* `yarn install` - Install the dependencies
* `yarn verify` - To verify the theme is valid use
* `yarn build` - Compile the SCSS files into CSS
* `yarn archive` - Pack up the theme for use with Ghost

The last command should result in a `our-status-theme.zip` file.

# Development

You can start a local instance of Ghost using:
```
yarn ghost-install
```
Which will start a ghost instance at: http://localhost:2368/
It should use the current state of this repo as its theme.

The instance will be installed at `/var/tmp/ghost`.
It will have this repo symlinked under `content/themes/casper`.

# Gatsby Plugin No JS

**Note: You probably do not need this! Using this plugin will remove a lot of the benefits of Gatsby.**

This Gasby plugin will remove all Javascript and JSON from production builds. This could be useful if you are making a really small or light website which does not require any Javascript, but you still want to use Gatsby.

This plugin is a still a WIP, and there a few issues such as:
- If you use this on a multi-page site, you will lose a lot of benefits that Gatsby offers
- This plugin does NOT work with [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) as it requires JS. However you can use plain `<img>` tags.


## Installation

This is not available on NPM yet - but you can install by cloning this repo into your `plugins` folder.

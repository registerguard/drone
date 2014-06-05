# Drone

![Drone](drone.jpg)

**[The Register-Guard](http://registerguard.com)’s 3rd party sub-theme.**

---

## About

At the RG, we’ve learned over the years that its best to have a super simple template for use with 3rd party systems.

### Features:

* HTML4 strict (a lot of 3rd parties will frack with DTD, and I have yet to see any that use an HTML5 document type.)
* Simple CSS/HTML.
* **NO** styling of core elements/tags.
* Easy to sub-theme and extend.
* Easy to change container width.
* Pseudo-namespaced.

### Assumptions:

This theme’s sole purpose is to wrap 3rd party conent. If one needs more project-specific CSS, for additional “theme” styles, then one should include/organize/version those via other means and link to this theme’s CSS via a style link in the `<head>`.

## Demo

Click or scan:

DEVELOPMENT | PRODUCTION
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://registerguard.github.io/drone/dev/&chs=240x240)](http://registerguard.github.io/drone/dev/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://registerguard.github.io/drone/prod/&chs=240x240)](http://registerguard.github.io/drone/prod/)
`$ grunt` | `$ grunt prod`

## Installation

Here’s a few ways to install this code:

1. Download as a [`zip`](https://github.com/registerguard/drone/archive/gh-pages.zip).
1. Clone it: `$ git clone https://github.com/registerguard/drone.git`.
1. Fork it and clone: `$ git clone git@github.com:USERNAME/drone.git`.

## Usage

Assuming you already have [Grunt.js](http://gruntjs.com/) installed ...

### Setup dependencies:

Navigate to the local repo’s `source/` folder:

```bash
$ cd drone/source/
```

Install Grunt tasks:

```bash
$ npm install
```

### Development preview:

Test the development build:

```bash
$ grunt
# "grunt dev" would also work.
```

Visit the development build:

<http://localhost/drone/dev/>

**Note:** The above URL will depend upon your local development environment; for previewing my projects I use [XAMPP](http://www.apachefriends.org/index.html).

### Edit:

At this point, you can modify any of the files, especially the ones found in the `/source/files` folder.

To make life easier while developing, run:

```
$ grunt watch
```

... the `watch` command will run a development build any time these folders/file(s) change:

```text
/source/Gruntfile.js
/source/files/styles/**/*
/source/files/templates/**/*
```

### Production build:

Once you’re ready to do a production build, run:

```bash
$ grunt prod
```

Push the production build to your GitHub repo.

Depending on your setup, you may need to pull the latest build to your production server.

Visit the production build locally:

<http://localhost/drone/prod/>

**Note:** The production build’s asset files are absolutely linked to the production server; hence the need to get the latest files there before previewing the production’s HTML file and related assets.

### Update production theme:

Finally, follow the appropriate steps to update the production build’s path on the various RG production systems/environments and/or languages.

---

#### LEGAL

Copyright © 2013-2014 [The Register-Guard](http://www.registerguard.com)

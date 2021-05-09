# Pug, SASS & Typescript Boilerplate

Initial project setup and build tasks with gulp. For use in web projects being built with pug/sass/typescript.

Repository maintained to speed up starting a new project.

## Features

-   SASS compilation
    -   autoprefixer
-   Pug compilation
-   Typescript compilation
    -   minification and mangle features via `terser`
-   Asset revisioning `rev-manifest.json`
-   Rewriting asset links inside pug files to appropriate revisions

## Usage

Download or clone the repository, then to install the dependencies run:

```
npm install
```

The project uses gulp to compile the source files. To build the project for production run:

```
gulp build
```

To watch the source files for changes during development, and to also generate souce maps, run:

```
gulp watch
```

To delete everything inside the `/dist/` directory run:

```
gulp clean
```

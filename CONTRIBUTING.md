# Contributing to Smoc Widget

Thanks for contributing to Smoc Widget.
Please follow these instructions to make contributions to the code.

## Prerequisites

You need [Node.js](https://nodejs.org/en) and [Git](https://git-scm.com/).
You can use whatever editor you like, but we recommend [VSCode](https://code.visualstudio.com/).

## Run locally

After cloning the repo, install dependencies:

    npm install

Start a local server:

    npm start

You can now point your browser to http://localhost:3000 where you will see a simple web page
and the widget in the bottom right corner.

## Building

The bot is written in [TypeScript](https://www.typescriptlang.org/) and compiled to JavaScript so it can run un a browser.
When you run `npm start`, the TypeScript code is built automatically by the local web server.

However, to build a shippable version of the code you need to build it explicitly:

    npm run build

This will build `dist/smoc-bot.js`

## Testing

We use [vitest](https://vitest.dev/) to run automated tests for the bot. Run the tests:

    npm test

We recommend [TDD](https://en.wikipedia.org/wiki/Test-driven_development) for developing new features.
This gives you fast feedback on your changes. The process is as follows.

* Write a failing test for the new behaviour. See the test fail.
* Make changes until the test passes
* Refactor (clean up)

## Linting and formatting

We use [prettier](https://prettier.io/) to format the code, and [eslint](https://eslint.org/) to find common problems.
These tools run automatically when you run `git commit`.

## Continuous Integration

Every time you push new commits to GitHub, GitHub Actions will build the code and run tests.
This is to ensure that the code stays healthy.

## Relasing

In order to publish a new release of the library to [unpkg](https://www.unpkg.com/), publish it to [npm](https://www.npmjs.com/).

This is done with the following command:

    npm run release

This will:

* Create a new git tag
* Push it to GitHub
* Kick off a GitHub Actions build that publishes to NPM
* Once published to NPM, unpkg will make the library available via their CDN.

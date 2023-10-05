
# Serverless Esbuild Typescript, ready to hot-deploy and debugging

Painless hot-reload and debug locally with Serverless Framework, TypeScript, and Esbuild.

## Motivation

Usually you would build your own stack for developing with Serverless Framework and Typescript, but you would find some challenges until achieve a fully functional project that supports local hot-deploy and able to debug, so I created this project.

Seriously, that debugging screen is all you want:

![vscode](https://i.imgur.com/YE8pJos.png)

All challenges found you may check [this article](https://www.serverlessguru.com/blog) I made for Serverless Guru Blog about this project.

## Stack

- Serverless Framework 3.0
- Serverless Esbuild
- Serverless Offline
- Typescript
- Eslint

## Features

- Simple and low configuration TypeScript project
- Ready for debugging locally
- Ready for hot-reload locally

### For local developing

- Run locally directly from TypeScript
- VS Code configuration ready for debugging with serverless-offline
- Hot deploy: make changes to your Lambda handler and get instant effect without restarting local server
- Generates sourcemaps for AWS Lambda better error handling

### For production

- Transpiles into minified JavaScript and removes dead code from imports
- Sourcemaps Node flag for Lambda error handling in TypeScript
- Doesn't need separate `npm run build` command, `sls package` and `sls deploy` already triggers a hook for transpiling into JavaScript

## Commands

Install dependencies:

```
npm install
```

Run lambda locally:

```
npm run dev
```

Auto linter fix:

```
npm run lint
```

Runs `tsc` for type-checking (esbuild doesn't do type-checking):

```
npm run check
```

Runs linter, type-checking and package everything (it already runs esbuild transpiling) and deploys `dev` stage to `us-east-1`:

```
npm run deploy
```

Debug locally with VS Code:

![debug](https://i.imgur.com/umww0U1.png)

## Thank you!

Check [my article](https://www.serverlessguru.com/blog) on Serverless Guru Blog I made for this template and feel free to call me on LinkedIn.

Enjoy Serverless Framework! Enjoy TypeScript! 😃
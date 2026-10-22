# stable-fn

[![npm](https://img.shields.io/npm/v/@ultirequiem/stable-fn?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/stable-fn)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/stable-fn?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/stable-fn)
[![CI](https://github.com/UltiRequiem/stable-fn/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/stable-fn/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/stable-fn/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/stable-fn)

> Ensure the same input always produces the same output.

Useful for stress testing functions in your unit tests to make sure their
behaviors are consistent.

## Install

```sh
npm install @ultirequiem/stable-fn
```

## Usage

ESM only: the same import works in Node.js, Bun and browsers.

```typescript
import { stableFunction } from "@ultirequiem/stable-fn";
import { randomItem } from "@ultirequiem/stable-fn";

stableFunction(() => true); //=> true
stableFunction(() => randomItem(["a", "b", "c"])); //=> false
```

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Don't forget to star the repo ⭐

## Licence

Licensed under the MIT License.

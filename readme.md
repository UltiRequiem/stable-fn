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

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/stable-fn)

```typescript
import { stableFunction } from "@ultirequiem/stable-fn";
import { randomItem } from "@ultirequiem/stable-fn";

stableFunction(() => true); //=> true
stableFunction(() => randomItem(["a", "b", "c"])); //=> false
```

### Browser

Using
[type module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
🍱

- [esm.sh](https://esm.sh/@ultirequiem/stable-fn)

- [skypack](https://cdn.skypack.dev/@ultirequiem/stable-fn)

Using a plain
[script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) 👇

- [jsdelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/stable-fn)

- [unpkg](https://unpkg.com/@ultirequiem/stable-fn)

You have the same API on all of this platforms.

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Don't forget to star the repo ⭐

## Licence

Licensed under the MIT License.

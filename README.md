# babel-plugin-transform-strong-mode

[![NPM version](http://img.shields.io/npm/v/babel-plugin-transform-strong-mode.svg?style=flat-square)](https://www.npmjs.org/package/babel-plugin-transform-strong-mode)
[![Travis build status](http://img.shields.io/travis/gajus/babel-plugin-transform-strong-mode/master.svg?style=flat-square)](https://travis-ci.org/gajus/babel-plugin-transform-strong-mode)
[![js-canonical-style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

Places `"use strong";` directive at the top of all files to enable [strong mode](https://developers.google.com/v8/experiments?hl=en#strong-mode).

This plugin places a "use strict"; directive at the top of all files to enable strict mode.

## Example

Converts:

```js
foo();
```

To:

```js
"use strong";

foo();
```

## Usage

Add to `.babelrc`:

```json
{
    "plugins": [
        [
            "transform-strong-mode"
        ]
    ]
}
```

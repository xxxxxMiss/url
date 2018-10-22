# url

> A url toolkit

[![Build Status](https://img.shields.io/travis/xxxxxMiss/url/master.svg)](https://travis-ci.org/xxxxxMiss/url)
[![Codecov branch](https://img.shields.io/codecov/c/github/xxxxxMiss/url/master.svg)](https://codecov.io/gh/xxxxxMiss/url)
[![NPM](https://img.shields.io/npm/v/url.svg)](https://www.npmjs.com/package/@ic/url)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)


## Install

```bash
npm install --save @ic/url
```

## Usage

```js
import url from '@ic/url'
```

## join(...paths)
> Combine a path list, get a normalized url.
> Throw a TypeError if a path segment is not a string.

``` js
url.join('path', 'name') // path/name

url.join('/path', '//name') // /path/name

url.join('/path', undefined, 'name') // throw a TypeError
```

## isAbsolute(url)
> Return true if a url start with `schema://` or `//`.
> RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed by any combination of letters, digits, plus, period, or hyphen.

``` js
url.isAbsolute('https://www.facebook.com') // true

url.isAbsolute('ftp://path/name') // true

url.isAbsolute('//www.facebook.com') // true

url.isAbsolute('/path/name') // false
```

## parse(href)
> Parsing a href and get an object.

``` js
url.parse('https://www.facebook.com/path/name?foo=1&bar=2#id')
// {
//   href: 'https://www.facebook.com',
//   host: 'www.facebook.com',
//   hostname: 'www.facebook.com',
//   port: '',
//   search: '?foo=1&bar=2',
//   hash: '#id',
//   pathname: '/path/name'
// }
```

## License

MIT © [xxxxxMiss](https://github.com/xxxxxMiss)

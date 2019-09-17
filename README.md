![logo](https://i.ibb.co/j6CkJV4/react-robohash.png)

[![npm version](https://badge.fury.io/js/react-robohash.svg)](https://badge.fury.io/js/react-robohash)
[![Build Status](https://action-badges.now.sh/fel1xw/react-robohash?action=CI)](https://github.com/fel1xw/react-robohash/actions)
[![Blazing Fast](https://badgen.now.sh/badge/speed/blazing%20%F0%9F%94%A5/green)](https://npm.im/react-robohash)
[![Coverage Status](https://coveralls.io/repos/github/fel1xw/react-robohash/badge.svg?branch=master)](https://coveralls.io/github/fel1xw/react-robohash?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-robohash@latest/dist/index.js?compression=gzip)](https://unpkg.com/react-robohash@latest/dist/index.js)
[![Known Vulnerabilities](https://snyk.io/test/github/fel1xw/react-robohash/badge.svg)](https://snyk.io/test/github/fel1xw/react-robohash)

## Install
```sh
npm install react-robohash --save
# or
yarn add react-robohash
```

## Playground
You can play around with the module on [codesandbox](https://codesandbox.io/s/zrpz3jpzp?fontsize=14)

## Props
| Name        | Type            | Required | Default            | Description                                                                 |
|-------------|-----------------|----------|--------------------|-----------------------------------------------------------------------------|
| name        | string          | true     |                    | name, email, whatever identifier you want                                   |
| alt         | string          | false    | `Robohash-${name}` | alt property for image                                                      |
| className   | string          | false    | Robohash           | pass custom class                                                           |
| size        | string | number | false    |                    | specify image size like 200 or 100x50 (square works best)                   |
| type        | string | number | false    | robot              | type - "robot", "alien", "head", "cat", 1, 2, 3, 4                          |
| background  | string          | false    | 0                  | custom background set (1, 2)                                                |
| fileType    | string          | false    | png                | image return type, png, svg, jpg (see homepage)                             |
| gravatar    | boolean         | false    | false              | checks if gravatar is available otherwise fallbacks to robot                |
| children    | function        | false    |                    | custom render prop function which gets only the url passed in (see example) |

## Usage
```
import Robohash from 'react-robohash';

<Robohash
  name="foxy"
  type="cat"
/>
```

or with custom element as render prop function
```
import Robohash from 'react-robohash';

<Robohash name="react-robohash">
  {url => <span>{url}</span>}
</Robohash>
```

## Author
* Felix Wostal [@felixwostal](https://twitter.com/felixwostal)

## Support
If you like the project and want to support my work, you can think about buy me a coffee :)

[![paypal](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/felixwostal/1)

# xm-username-genertor

A random username generator, made out of one random adjective, one random noun and a random number.

This application has zero dependencies.

## Installation

copy the `/src` folder into your application.

## Usage 

import the username generator like this:

```js
const usernameGenerator = require('./src/index.js');
```

and create random username with this command:

```js
const username = usernameGenerator.createUserName(50000);
```

The generated username will look something like this:
- RoughSnowflakes27945
- HeroicUnicorn31721
- BlackFire39945

## License
Copyright (c) 2021 F. Nezami. Licensed under the terms of the MIT license. https://fariha-nezami.mit-license.org/
# plh

Returns a base64 encoded transparent placeholder gif as Data URI

```bash
$ npm i plh
```

**Requires [ImageMagick](https://www.imagemagick.org/)**

## CLI

Let's make a 1x1 pixel placeholder:

```bash
$ plh
# → data:image/gif;base64,R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
```

You can also pass in a width and height:

```bash
$ plh 10 50
# → data:image/gif;base64,R0lGODlhCgAyAPAAAAAAAAAAACH5BAEAAAAALAAAAAAKADIAAAIUhI+py+0Po5y02ouz3rz7D4biiBQAOw==
```

## Node

You can also use `plh` from within node:

```js
var plh = require('plh')
var base64 = plh(3, 4)
// → data:image/gif;base64,R0lGODlhAwAEAPAAAAAAAAAAACH5BAEAAAAALAAAAAADAAQAAAIDhI9WADs=
```

## FAQ

### Why?

Sometimes base64 encoded placeholder images are handy on the webz. I made this so I could quickly nab aspect ratio specific placeholders.

### How?

The ImageMagick [`convert`](https://www.imagemagick.org/script/convert.php) command is used to create a placeholder image which is piped into the `base64` program and concated to a [data uri](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) prefix:

```bash
echo 'data:image/gif;base64,'"$(convert -size 1x1 xc:transparent gif:- | base64)"
```

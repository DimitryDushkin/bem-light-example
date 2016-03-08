Example of using BEM stack (enb + bem-core) for multi-page sites.

Main purpose of this example is to show that you can use basic BEM compiling technologies (enb) for sites without node.js. You do not need to bother with templating via BEMHTML or BH to get one of the best parts of BEM stack.

I think that's ideal scheme for sites:
 * with own front-end components framework, which means no [bem-components](https://github.com/bem/bem-components) need,
 * own templating engine,
 * non-node.js back-end.

Basically it's ideal for Ruby on Rails, Django or other back-end frameworks.


### How to start
Just:
```
open dist/index.html
```

How to develop (recompile static files):
```
cd src
npm install
npm install -g browser-sync
npm start
```
Thanks to browser-sync browser will be auto-reloaded on src's files change.

To recompile manually:
```
cd src
node_modules/.bin/enb make
```

to minify:
```
cd src
YENV='production' enb make
```

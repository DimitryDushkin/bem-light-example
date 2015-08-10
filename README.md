Example of using BEM stack (enb + bem-core) for multi-page sites.

Main purpose of this example is to show that you can use basic BEM compiling technologies (enb) for sites without node.js. You do not need to bother with templating via BEMHTML or BH to get one of the best parts of BEM stack.

I think that's ideal scheme for sites:
 * with own front-end components framework, which means no [bem-components](https://github.com/bem/bem-components) need,
 * own templating engine,
 * non-node.js back-end.

Basically it's ideal for Ruby on Rails, Django or other back-end frameworks.

Based on [https://github.com/bem/generator-bem-stub](https://github.com/bem/generator-bem-stub). Chosen options :
 * ENB,
 * bem-core,
 * without bem-components,
 * platforms: desktop, touch-pad,
 * only pure CSS,
 * Autoprefixer is ON,
 * ie8, ie9, browser.js,
 * "my templating engine",
 * no minify.

Difference:
  * add SASS support via `enb-sass`,
  * add ability to declare dependecies also in `*.js` files in `modules.require` section via enb-modules `deps-with-modules`.


#### How to start
```
make
open index.html
```

### How to recompile static files
```
make
# OR
cd bem
enb make
```


#### TODO

 * Add `browser-sync` for `enb make` auto-start on scss, css, js files change. Page auto-refresh.

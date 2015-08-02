Example of using BEM stack (enb + bem-core) for multi-page sites.

Main purpose of this example is showing that you can use basic BEM compiling technologies for sites without node.js. So you do not need to bother with templating via BEMHTML or BH.

I think it is ideal scheme for sites:
 * with own front-end components framework, which means no [bem-components](https://github.com/bem/bem-components) need,
 * own templating engine,
 * non-node.js back-end.

Basically it's ideal for Ruby on Rails on Django sites and other back-end frameworks.

Based on [https://github.com/bem/generator-bem-stub](https://github.com/bem/generator-bem-stub). Options chosen:
 * ENB,
 * bem-core,
 * without bem-components,
 * platforms: desktop, touch-pad,
 * only pure CSS,
 * Autoprefixer is ON,
 * ie8, ie9, browser.js,
 * my templating engine,
 * no minimazing.

Difference:
  * add SASS support.


#### TODO

 * Добавить browser-sync для авто-запуска enb make при изменении файлов scss, css, js в bem-dist/*.blocks и авто-обновлении страницы

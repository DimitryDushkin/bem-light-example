var enbBemTechs = require('enb-bem-techs');

module.exports = function (config) {
    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([

            // Where get blocks from
            [enbBemTechs.levels, {
                levels: [
                    { path: 'libs/bem-core/common.blocks', check: false },
                    { path: 'libs/bem-core/desktop.blocks', check: false },
                    'blocks'
                ]
            }],

            // index.bemdecl.js is already present (not generated),
            // set is as base file to compile bundle
            [require('enb/techs/file-provider'), { target: '?.bemdecl.js' }],

            // index.bemdecl.js -> index.deps.js + block's deps
            [enbBemTechs.deps],

            // index.deps.js -> index.files.js
            [enbBemTechs.files],

            // index.js
            [require('enb-js/techs/browser-js'), {
                target: '?.js',
                includeYM: true
            }],

            // Stylus for index.css
            [require('enb-stylus/techs/stylus'), {
                target: '?.css',
                autoprefixer: { browsers: ['last 2 versions'] }
            }],

            // Copy files from src/desktop.bundles/index to dist/js(css)
            [ require('enb/techs/file-copy'), { sourceTarget: '?.js', destTarget: '../../../dist/js/?.js' } ],
            [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '../../../dist/css/?.css' } ]

        ]);

        nodeConfig.addTargets([
            '../../../dist/css/?.css',
            '../../../dist/js/?.js'
        ]);
    });

};


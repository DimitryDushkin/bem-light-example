var enbBemTechs = require('enb-bem-techs'),
    isProduction = process.env.YENV === 'production';

module.exports = function (config) {
    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([

            // Where to get blocks from
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

            // index.bemdecl.js + blocks's deps-> index.deps.js
            [enbBemTechs.deps],

            // index.deps.js -> index.files.js
            [enbBemTechs.files],

            // index.js
            [require('enb-js/techs/browser-js'), {
                target: '?.js',
                includeYM: true,
                compress: isProduction
            }],

            // Stylus + autoprefixer for index.css
            [require('enb-stylus/techs/stylus'), {
                target: '?.css',
                autoprefixer: { browsers: ['last 2 versions'] },
                compress: isProduction
            }],

        ]);

        nodeConfig.mode('development', function(nodeConfig) {

            // Copy files from src/desktop.bundles/index to dist/js(css)
            nodeConfig.addTechs([
                [ require('enb/techs/file-copy'), { sourceTarget: '?.js', destTarget: '../../../dist/js/?.js' } ],
                [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '../../../dist/css/?.css' } ]
            ]);

            nodeConfig.addTargets([
                '../../../dist/js/?.js',
                '../../../dist/css/?.css'
            ]);

        });

        nodeConfig.mode('production', function(nodeConfig) {

            // Copy files from src/desktop.bundles/index to dist/js(css)
            nodeConfig.addTechs([
                [ require('enb/techs/file-copy'), { sourceTarget: '?.js', destTarget: '../../../dist/js/?.min.js' } ],
                [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '../../../dist/css/?.min.css' } ]
            ]);

            nodeConfig.addTargets([
                '../../../dist/js/?.min.js',
                '../../../dist/css/?.min.css'
            ]);

        });

    });

};


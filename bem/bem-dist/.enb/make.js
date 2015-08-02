var enbBemTechs = require('enb-bem-techs'),
    isProduction = process.env.YENV === 'production',
    autoprefixer = require('enb-autoprefixer/techs/css-autoprefixer');

module.exports = function (config) {
    config.nodes('*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), { target: '?.bemdecl.js' }],
            [enbBemTechs.files],

            // dependecies by deps.js
            // [enbBemTechs.deps],

            // dependecies by deps.js and module.define in *.js files
            [require('enb-modules/techs/deps-with-modules')],

            // ie8.css
            [require('enb/techs/css'), {
                target: '?.ie8.css',
                sourceSuffixes: ['css', 'ie8.css']
            }],

            // ie9.css
            [require('enb/techs/css'), {
                target: '?.ie9.css',
                sourceSuffixes: ['css', 'ie9.css']
            }],

            // browser.js
            [require('enb-diverse-js/techs/browser-js'), { target: '?.browser.js' }],
            [require('enb-modules/techs/prepend-modules'), {
                source: '?.browser.js',
                target: '?.js'
            }],

            // CSS
            // [require('enb/techs/css')]

            // SASS (CSS + SCSS files)
            [require('enb-sass'), { target: '?.noprefix.css' }]
        ]);

        nodeConfig.addTargets([
            '?.css',
            '?.ie8.css',
            '?.ie9.css',
            '?.js'
        ]);
    });

    config.nodes('*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: getDesktops(config) }],
            // autoprefixer
            [autoprefixer, {
                browserSupport: ['last 2 versions', 'ie 10', 'ff 24', 'opera 12'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

    config.nodes('*touch-pad.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: getTouchPads(config) }],
            // autoprefixer
            [autoprefixer, {
                browserSupport: ['android 4', 'ios 5'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

};

function getDesktops(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}

function getTouchPads(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/touch.blocks', check: false },
        'common.blocks',
        'touch.blocks',
        'touch-pad.blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}

// relative to profile.basePath
var LIBDIR = "./lib";
debugger;
var profile = {
    // relative to profile.basePath
    releaseDir: "./release",
    releaseName: "version-1.0",
    basePath: '../',
    action: 'release',
    mini: true,
    layerOptimize: 'closure',
    stripConsole: 'all',
    selectorEngine: 'lite',
    cssOptimize: 'comments',
    cssImportIgnore: [
        'Calendar.css',
        'ColorPalette.css',
        'Dialog.css',
        'Editor.css',
        'ProgressBar.css',
        'TimePicker.css',
        'Tree.css',
        'form/NumberSpinner.css',
        'form/Slider.css',
        'layout/AccordionContainer.css',
        'layout/TabContainer.css'].join(','),
    // google for "must use this.require to make this work in node.js"
    // dojo.js.uncompressed.js: 64772 --> 64573
    dojoBootText:"require.boot && require.apply(null, require.boot);",
    defaultConfig: {
        async: 1,
        // what is it for?
        hasCache: {
            // dojo.js.uncompressed.js: no effect
            'dojo-built': 1,
            'dojo-loader': 1,
            'dom': 1,
            'host-browser': 1,
            'config-selectorEngine': 'lite'
        }
    },
    staticHasFeatures: {
        // The trace & log APIs are used for debugging the loader, so we don’t need them in the build
        'dojo-trace-api': 0,
        // Disables the logging code of the loader
        'dojo-log-api': 0,
        // This causes normally private loader data to be exposed for debugging, so we don’t need that either
        'dojo-publish-privates': 0,
        // We’re fully async, so get rid of the legacy loader
        'dojo-sync-loader': 0,
        // We aren’t loading tests in production
        'dojo-test-sniff': 0,
        // Disables non-standard module resolution code
        // dojo.js.uncompressed.js: 64823 --> 64796
        'config-tlmSiblingOfDojo': 0,
        // Disables some legacy module loading behavior when loading modules from a CDN
        // dojo.js.uncompressed.js: 64796 --> 64796 no effect
        'dojo-sniff': 0,
        // ???
        // dojo.js.uncompressed.js: 64796 --> 64772
        'dojo-cdn': 0,
        // Disables support for RequireJS
        // dojo.js.uncompressed.js: 64772 --> 64772 no effect
        'dojo-requirejs-api': 0,
        // Ensures the code is built to run on a browser platform
        // dojo.js.uncompressed.js: 64772 --> 64772 no effect
        'host-browser': 1
    },
    packages:[
        {
            name: "dojo",
            location: LIBDIR + "/dojotoolkit/dojo"
        },
        {
            name: "dijit",
            location: LIBDIR + "/dojotoolkit/dijit"
        },
        {
            name: "dojox",
            location: LIBDIR + "/dojotoolkit/dojox"
        }
    ],
    layers: {
        "dojo/dojo": {
            include: [],
            customBase: true,
            boot: true
        }
    }
};

/* cp ./release/v1/dojo/dojo.js ./release/dojo.js
 * ./release/dojo.js : 10458
 * 
 * min.test.html loads normally
 *
 *
 *
 *
 */

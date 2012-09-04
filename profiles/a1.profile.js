// relative to profile.basePath
var LIBDIR = "./lib";
var profile= {
    // relative to profile.basePath
    releaseDir: "./release",
    releaseName: "version-1.0",
    basePath: '../',
    action: 'release',
    mini: true,
    layerOptimize: 'closure',
    stripConsole: 'all',
    selectorEngine: 'lite',
    localeList: 'en, de',
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
    dojoBootText:"require.boot && require.apply(null, require.boot);",
    defaultConfig: {
        async: 1,
        // what is it for?
        hasCache: {
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
        'config-tlmSiblingOfDojo': 0,
        // Disables some legacy module loading behavior when loading modules from a CDN
        'dojo-sniff': 0,
        // ???
        'dojo-cdn': 0,
        // Disables support for RequireJS
        'dojo-requirejs-api': 0,
        // Ensures the code is built to run on a browser platform
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
        },
        "ololo/dojocore": {
            include: [
                "dojo/dom",
                "dojo/dom-attr",
                "dojo/dom-class",
                "dojo/dom-construct",
                "dojo/dom-style",
                "dojo/domReady",
                "dojo/fx",
                "dojo/i18n",
                "dojo/on",
                "dojo/_base/array",
                "dojo/_base/declare",
                "dojo/_base/Deferred",
                "dojo/_base/kernel",
                "dojo/_base/lang",
                "dojo/request",
                "dojo/request/xhr",
                "dojo/request/script"
            ]
        },
        'ololo/dijitcore': {
            include: [
                "dijit/_WidgetBase",
                "dijit/_TemplatedMixin",
                "dijit/_Container"
            ],
            exclude: ['ololo/dojocore']
        }
    }
};
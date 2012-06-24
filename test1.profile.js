var profile = {

    releaseDir: "./release1",
    releaseName: "v1",
    basePath: './',
    action: 'release',
    mini: true,
    layerOptimize: 'closure',
    stripConsole: 'all',
    selectorEngine: 'acme',
    //localeList: 'en, de',
    /* This build profiles involves baking `dijit/form/ValidationTextBox` module
     * that depends on i18n. Setting localeList option breaks build. The reason
     * for this is unknown.
     */
    packages:[
        {
            name: "dojo",
            location: "./dojo-current/dojo"
        },
        {
            name: "dijit",
            location: "./dojo-current/dijit"
        },
        {
            name: "dojox",
            location: "./dojo-current/dojox"
        }
    ],

    layers: {
        "dojo/dojo": {
            include: ["dojo/dojo"],
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
                "dojo/regexp",
                "dojo/_base/array",
                "dojo/_base/declare",
                "dojo/_base/Deferred",
                "dojo/_base/kernel",
                "dojo/_base/lang",
                "dojo/io/script"
            ]
        },
        'ololo/dijitcore': {
            include: [
                "dijit/_WidgetBase",
                "dijit/_TemplatedMixin",
                "dijit/_Container"
            ],
            exclude: ['ololo/dojocore']
        },
        'ololo/form': {
            include: [
                "dijit/form/Button",
                "dijit/form/ValidationTextBox",
                "dojox/validate/regexp"
            ],
            exclude: ['ololo/dojocore', 'ololo/dijitcore']
        }
    },
    
    staticHasFeatures: {
        // The trace & log APIs are used for debugging the loader, so we don’t need them in the build
        'dojo-trace-api': 0,
        'dojo-log-api': 0,
        // This causes normally private loader data to be exposed for debugging, so we don’t need that either
        'dojo-publish-privates': 0,
        // We’re fully async, so get rid of the legacy loader
        'dojo-sync-loader': 0,
        // We aren’t loading tests in production
        'dojo-test-sniff': 0
    }
}

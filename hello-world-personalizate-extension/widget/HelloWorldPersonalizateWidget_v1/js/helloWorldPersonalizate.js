define(
    //-------------------------------------------------------------------
    // DEPENDENCIES
    //-------------------------------------------------------------------
    ['knockout', 'jquery', 'ccRestClient', 'ccConstants'],
    //-------------------------------------------------------------------
    // MODULE DEFINITION
    //-------------------------------------------------------------------
    function(ko, $, ccRestClient, ccConstants) {
        "use strict";
        var widget;
        return {
            onLoad: function(widgetModel) {
                console.log('-- helloWorldPersonalizate onLoad callback');
            },
            beforeAppear: function(page) {
                console.log('-- helloWorldPersonalizate beforeAppear callback');
            }
        };
    }
);
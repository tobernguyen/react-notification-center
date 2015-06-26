(function (root, factory) {
    if (typeof define === 'function' && define.amd) { // AMD. Register as an anonymous module.
        define(['react'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('react'));
    } else {
        // Browser globals (root is window)
        root.Reactable = factory(root.React);
    }
}(this, function (React) {
    "use strict";
    var exports = {};

    

    return exports;
}));
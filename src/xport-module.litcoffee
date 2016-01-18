Export Module
=============

#### The module’s only entry-point is the `JsMultRun` class

First, try defining an AMD module, eg for [RequireJS](http://requirejs.org/). 

    if F == typeof define and define.amd
      define -> JsMultRun

Next, try exporting for CommonJS, eg for [Node.js](http://goo.gl/Lf84YI):  
`var JsMultRun = require('jsmultrun');`

    else if O == typeof module and module and module.exports
      module.exports = JsMultRun

Otherwise, add the `JsMultRun` class to global scope.  
Browser usage: `var jsmultrun = new window.JsMultRun();`

    else G.JsMultRun = JsMultRun


    ;


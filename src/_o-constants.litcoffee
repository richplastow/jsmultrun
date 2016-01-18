Oopish Constants
================

#### Define the core Oopish constants

Oopish’s constants are visible to all code defined in ‘src/’ and ‘test/’, but 
hidden from code defined elsewhere in the app. 




Constants which help minification
---------------------------------

These strings can make `*.min.js` a little shorter and easier to read, and also 
make the source code less verbose: `O == typeof x` vs `'object' == typeof x`.

    A = 'array'
    B = 'boolean'
    #       class, not used to avoid confusion with a class’s `C` property
    D = 'document'
    E = 'error'
    F = 'function'
    #       global, see build-constants, below
    I = 'integer'
    #       method, not used to avoid confusion with a method’s `M` variable
    N = 'number'
    O = 'object'
    R = 'regexp'
    S = 'string'
    #       title, see build-constants, below
    U = 'undefined'
    #       version, see build-constants, below
    X = 'null'




Build Constants
---------------

Generated during the build-process and injected into app-scope. 

    G = _oG # global scope, passed into the closure as an argument
    T = _oT # project title, converted from package.json's name
    V = _oV # project version, from package.json



    ;


Oopish Helpers
==============

#### Define the core Oopish helper functions

Oopish’s helper functions are visible to all code defined in ‘src/’ and ‘test/’ 
but are hidden from code defined elsewhere in the runtime environment. 

- Helpers are ‘pure’ (they return the same output for a given set of arguments)
- They have no side-effects, other than throwing exceptions
- They run identically in all modern environments (browser, server, desktop, …)
- The Oopish helpers minify to xxx bytes @todo how big? and zipped?




Define the Oopish container
---------------------------

Rather than just a generic object, the Oopish container can also be used as a 
handy shortcut for `console.log()`. Note [`bind()`](http://goo.gl/66ffgl), and
[unusual IE8/9 behaviour](http://goo.gl/ZmG9Xs). 

    if 'undefined' == typeof console or 'undefined' == typeof console.log
      _o = -> # no-op
    else if 'object' == typeof console.log # eg IE8/9
      _o = Function::bind console.log, console
    else
      _o = console.log.bind console




#### `_o.is()`
Useful for reducing CoffeeScript’s verbose conditional syntax, eg:  
`if condition then 123 else 456` becomes `_o.is condition, 123, 456`. 

    _o.is = (c, t=true, f=false) ->
      if c then t else f




#### `_o.isU()`
@todo description

    _o.isU = (x) ->
      _o.U == typeof x




#### `_o.type()`
To detect the difference between 'null', 'array', 'regexp' and 'object' types, 
we use [Angus Croll’s one-liner](http://goo.gl/WlpBEx). This can be used in 
place of JavaScript’s familiar `typeof` operator, with one important exception: 
when the variable being tested does not exist, `typeof foobar` will return 
`undefined`, whereas `_o.type(foobar)` will throw an error. 

    _o.type = (a) ->
      return X if null == a # prevent `domwindow` in some UAs
      ta = typeof a
      return ta if { undefined:1, string:1, number:1, boolean:1 }[ta]
      if ! a.nodeName and a.constructor != Array and /function/i.test(''+a)
        return F # IE<=8 http://goo.gl/bTbbov
      ({}).toString.call(a).match(/\s([a-z0-9]+)/i)[1].toLowerCase()




#### `_o.ex()`
Exchanges a character from one set for its equivalent in another. To decompose 
an accent, use `_o.ex(c, 'àáäâèéëêìíïîòóöôùúüûñç', 'aaaaeeeeiiiioooouuuunc')`

    _o.ex = (x, a, b) ->
      if -1 == pos = a.indexOf x then x else b.charAt pos




#### `_o.has()`
Determines whether haystack contains a given needle. @todo arrays and objects

    _o.has = (h, n, t=true, f=false) ->
      if -1 != h.indexOf n then t else f




#### `_o.uid()`
Xx optional prefix. @todo description

    _o.uid = (p) ->
      p + '_' + (Math.random()+'1111111111111111').slice 2, 18




#### `_o.insert()`
Xx. @todo description

    _o.insert = (basis, overlay, offset) ->
      basis.slice(0, offset) + overlay + basis.slice(offset+overlay.length)




#### `_o.redefine()`
- `'constant'` Enumerable but immutable

Convert a property to one of XX kinds:

    _o.redefine = (obj, name, value, kind) ->
      switch kind
        when 'constant'
          Object.defineProperty obj, name, { value:value, enumerable:true }
        when 'private'
          Object.defineProperty obj, name, { value:value, enumerable:false }




#### `_o.valid()`
- `M <string>`          a method-name prefix to add to exception messages
- `obj <object>`        the object which contains the value to validate
- `signature <string>`  the value’s name and type
- `fallback <mixed>`    (optional) a value to use if `opt[key]` is undefined
- `<mixed>`             returns the valid value

Determines whether an object property is valid. 

    _o.valid = (M, obj, signature, fallback) ->

Get `key`, `types` and `rule` from the signature. 

      matches = signature.match /^([_a-z][_a-z0-9]*)\s+<([|a-z]+)\s*([-0-9]*)>$/
      if ! matches then throw RangeError "/jsmultrun/src/_o-helpers.litcoffee
        _o.valid()\n  signature #{signature} is invalid"
      [signature, key, types, rule] = matches

Use the fallback, if needed. 

      value = obj[key]
      tv = _o.type value
      if U == tv
        if 4 == arguments.length then return fallback
        throw TypeError M + key + " is undefined and has no fallback"

Check the type and rule. 

      for type in types.split '|'
        if (N == type or I == type) and N == tv
          if I == type and value % 1
            throw RangeError M + key + " is a number but not an integer"
          if rule
            [min, max] = rule.split '-'
            if value < min or value > max
              throw RangeError M + key + " is #{value} (must be #{rule})"
          return value
        if type == tv
          if S == tv and rule
            unless (new RegExp rule).test value
              throw RangeError M + key + " fails #{rule}"
          return value

      throw TypeError M + key + " is type #{tv} not #{types}"


    ;



01 JsMultRun Constructor
========================


    tudor.add [
      "01 JsMultRun Constructor"
      tudor.is




      "The class and instance are expected types"


      "The JsMultRun class is a function"
      F
      -> JsMultRun

      "`new` returns an object"
      O
      -> new JsMultRun




      "Missing `config` properties fall back to expected values"
      tudor.equal


      "Optional `config.log` falls back to `3`"
      3
      -> (new JsMultRun).log




      "`config` values must be valid"


      "Optional `config.log` must be an integer between 0 and 9"
      5
      -> (new JsMultRun { log:5 }).log




      "`config` values must not be invalid"
      tudor.throw


      "Optional `config.log` must not be a string"
      """
      /jsmultrun/src/JsMultRun.litcoffee JsMultRun()
        config.log is type string not integer"""
      -> new JsMultRun { log:'5' }


      "Optional `config.log` must be an integer"
      """
      /jsmultrun/src/JsMultRun.litcoffee JsMultRun()
        config.log is a number but not an integer"""
      -> new JsMultRun { log:5.1 }


      "Optional `config.log` must be not be less than 0"
      """
      /jsmultrun/src/JsMultRun.litcoffee JsMultRun()
        config.log is -1 (must be 0-9)"""
      -> new JsMultRun { log:-1 }


      "Optional `config.log` must be not be greater than 9"
      """
      /jsmultrun/src/JsMultRun.litcoffee JsMultRun()
        config.log is 10 (must be 0-9)"""
      -> new JsMultRun { log:10 }



    ];

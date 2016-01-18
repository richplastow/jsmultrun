// Generated by CoffeeScript 1.9.2
(function(_oG) {
/*! Jsmultrun 0.0.4 //// MIT Licence //// http://jsmultrun.richplastow.com/ */
var A, B, D, E, F, G, I, JsMultRun, N, O, R, S, SomeClass, T, Tudor, U, V, X, _o, _oT, _oV, tudor,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

_oT = 'Jsmultrun';

_oV = '0.0.4';

_o = {};

SomeClass = (function() {
  SomeClass.prototype.C = 'SomeClass';

  SomeClass.prototype.toString = function() {
    return '[object SomeClass]';
  };

  function SomeClass(config) {
    var M;
    if (config == null) {
      config = {};
    }
    M = "/jsmultrun/src/SomeClass/SomeClass.litcoffee SomeClass()\n  ";
    this.x = null;
  }

  SomeClass.prototype.xx = function(yy) {
    var M;
    return M = "/jsmultrun/src/SomeClass/SomeClass.litcoffee SomeClass::xx()\n  ";
  };

  return SomeClass;

})();

SomeClass.xx = function(yy) {
  var M;
  return M = "/jsmultrun/src/SomeClass/SomeClass.litcoffee SomeClass.xx()\n  ";
};

JsMultRun = (function() {
  JsMultRun.prototype.C = 'JsMultRun';

  JsMultRun.prototype.toString = function() {
    return '[object JsMultRun]';
  };

  function JsMultRun(config) {
    var M;
    if (config == null) {
      config = {};
    }
    M = "/jsmultrun/src/JsMultRun.litcoffee JsMultRun()\n  ";
    this.log = _o.valid(M + 'config.', config, 'log <integer 0-9>', 3);
    this.x = null;
  }

  JsMultRun.prototype.xx = function(yy) {
    var M;
    return M = "/jsmultrun/src/JsMultRun.litcoffee JsMultRun::xx()\n  ";
  };

  return JsMultRun;

})();

JsMultRun.xx = function(yy) {
  var M;
  return M = "/jsmultrun/src/JsMultRun.litcoffee JsMultRun.xx()\n  ";
};

A = 'array';

B = 'boolean';

D = 'document';

E = 'error';

F = 'function';

I = 'integer';

N = 'number';

O = 'object';

R = 'regexp';

S = 'string';

U = 'undefined';

X = 'null';

G = _oG;

T = _oT;

V = _oV;

if ('undefined' === typeof console || 'undefined' === typeof console.log) {
  _o = function() {};
} else if ('object' === typeof console.log) {
  _o = Function.prototype.bind(console.log, console);
} else {
  _o = console.log.bind(console);
}

_o.is = function(c, t, f) {
  if (t == null) {
    t = true;
  }
  if (f == null) {
    f = false;
  }
  if (c) {
    return t;
  } else {
    return f;
  }
};

_o.isU = function(x) {
  return _o.U === typeof x;
};

_o.type = function(a) {
  var ta;
  if (null === a) {
    return X;
  }
  ta = typeof a;
  if ({
    undefined: 1,
    string: 1,
    number: 1,
    boolean: 1
  }[ta]) {
    return ta;
  }
  if (!a.nodeName && a.constructor !== Array && /function/i.test('' + a)) {
    return F;
  }
  return {}.toString.call(a).match(/\s([a-z0-9]+)/i)[1].toLowerCase();
};

_o.ex = function(x, a, b) {
  var pos;
  if (-1 === (pos = a.indexOf(x))) {
    return x;
  } else {
    return b.charAt(pos);
  }
};

_o.has = function(h, n, t, f) {
  if (t == null) {
    t = true;
  }
  if (f == null) {
    f = false;
  }
  if (-1 !== h.indexOf(n)) {
    return t;
  } else {
    return f;
  }
};

_o.uid = function(p) {
  return p + '_' + (Math.random() + '1111111111111111').slice(2, 18);
};

_o.insert = function(basis, overlay, offset) {
  return basis.slice(0, offset) + overlay + basis.slice(offset + overlay.length);
};

_o.redefine = function(obj, name, value, kind) {
  switch (kind) {
    case 'constant':
      return Object.defineProperty(obj, name, {
        value: value,
        enumerable: true
      });
    case 'private':
      return Object.defineProperty(obj, name, {
        value: value,
        enumerable: false
      });
  }
};

_o.valid = function(M, obj, signature, fallback) {
  var j, key, len, matches, max, min, ref, ref1, rule, tv, type, types, value;
  matches = signature.match(/^([_a-z][_a-z0-9]*)\s+<([|a-z]+)\s*([-0-9]*)>$/);
  if (!matches) {
    throw RangeError("/jsmultrun/src/_o-helpers.litcoffee _o.valid()\n  signature " + signature + " is invalid");
  }
  signature = matches[0], key = matches[1], types = matches[2], rule = matches[3];
  value = obj[key];
  tv = _o.type(value);
  if (U === tv) {
    if (4 === arguments.length) {
      return fallback;
    }
    throw TypeError(M + key + " is undefined and has no fallback");
  }
  ref = types.split('|');
  for (j = 0, len = ref.length; j < len; j++) {
    type = ref[j];
    if ((N === type || I === type) && N === tv) {
      if (I === type && value % 1) {
        throw RangeError(M + key + " is a number but not an integer");
      }
      if (rule) {
        ref1 = rule.split('-'), min = ref1[0], max = ref1[1];
        if (value < min || value > max) {
          throw RangeError(M + key + (" is " + value + " (must be " + rule + ")"));
        }
      }
      return value;
    }
    if (type === tv) {
      if (S === tv && rule) {
        if (!(new RegExp(rule)).test(value)) {
          throw RangeError(M + key + (" fails " + rule));
        }
      }
      return value;
    }
  }
  throw TypeError(M + key + (" is type " + tv + " not " + types));
};

if (F === typeof define && define.amd) {
  define(function() {
    return JsMultRun;
  });
} else if (O === typeof module && module && module.exports) {
  module.exports = JsMultRun;
} else {
  G.JsMultRun = JsMultRun;
}

Tudor = (function() {
  Tudor.prototype.I = 'Tudor';

  Tudor.prototype.toString = function() {
    return "[object " + I + "]";
  };

  Tudor.prototype.articles = [];

  function Tudor(opt) {
    this.opt = opt != null ? opt : {};
    this["do"] = bind(this["do"], this);
    switch (this.opt.format) {
      case 'html':
        this.pageHead = function(summary) {
          return "<style>\n  body     { font-family: sans-serif; }\n  a        { outline: 0; }\n  b        { display: inline-block; width: .7em }\n\n  b.pass              { color: #393 }\n  b.fail              { color: #bbb }\n  article.fail b.pass { color: #bbb }\n  section.fail b.pass { color: #bbb }\n\n  pre      { padding: .5em; margin: .2em 0; border-radius: 4px; }\n  pre.fn   { background-color: #fde }\n  pre.pass { background-color: #cfc }\n  pre.fail { background-color: #d8e0e8 }\n\n  article  { margin-bottom: .5rem }\n  article h2 { padding-left:.5rem; margin:0; font-weight:normal }\n  article.pass { border-left: 5px solid #9c9 }\n  article.fail { border-left: 5px solid #9bf }\n  article.fail h2 { margin-bottom: .5rem }\n  article.pass >div { display: none }\n\n  section  { margin-bottom: .5rem }\n  section h3   { padding-left: .5rem; margin: 0; }\n  section.pass { border-left: 3px solid #9c9 }\n  section.fail { border-left: 3px solid #9bf }\n  section.fail h3 { margin-bottom: .5rem }\n  section.pass >div { display: none }\n\n  article.fail section.pass { border-left-color: #ccc }\n\n  div      { padding-left: .5em; }\n  div.fail { border-left: 3px solid #9bf; font-size: .8rem }\n  div h4   { margin: 0 }\n  div h4 { font: normal .8rem/1.2rem monaco, monospace }\n  div.fail, div.fail h4 { margin: .5rem 0 }\n\n</style>\n<h4><a href=\"#end\" id=\"top\">\u2b07</a>  " + summary + "</h4>";
        };
        this.pageFoot = function(summary) {
          return "<h4><a href=\"#top\" id=\"end\">\u2b06</a>  " + summary + "</h4>\n<script>\n  document.title='" + (summary.replace(/<\/?[^>]+>/g, '')) + "';\n</script>";
        };
        this.articleHead = function(heading, fail) {
          return ("<article class=\"" + (fail ? 'fail' : 'pass') + "\">") + ("<h2>" + (fail ? this.cross : this.tick) + heading + "</h2><div>");
        };
        this.articleFoot = '</div></article>';
        this.sectionHead = function(heading, fail) {
          return ("<section class=\"" + (fail ? 'fail' : 'pass') + "\">") + ("<h3>" + (fail ? this.cross : this.tick) + heading + "</h3><div>");
        };
        this.sectionFoot = '</div></section>';
        this.jobFormat = function(heading, result) {
          return ("<div class=\"" + (result ? 'fail' : 'pass') + "\">") + ("<h4>" + (result ? this.cross : this.tick) + heading + "</h4>") + ("" + (result ? this.formatError(result) : '')) + "</div>";
        };
        this.tick = '<b class="pass">\u2713</b> ';
        this.cross = '<b class="fail">\u2718</b> ';
        break;
      default:
        this.pageHead = function(summary) {
          return "" + summary;
        };
        this.pageFoot = function(summary) {
          return "\n" + summary;
        };
        this.articleHead = function(heading, fail) {
          return "\n" + (fail ? this.cross : this.tick) + " " + heading + "\n===" + (new Array(heading.length).join('=')) + "\n";
        };
        this.articleFoot = '';
        this.sectionHead = function(heading, fail) {
          return "\n" + (fail ? this.cross : this.tick) + " " + heading + "\n---" + (new Array(heading.length).join('-')) + "\n";
        };
        this.sectionFoot = '';
        this.jobFormat = function(heading, result) {
          return ((result ? this.cross : this.tick) + " " + heading) + ("" + (result ? '\n' + this.formatError(result) : ''));
        };
        this.jobFoot = '';
        this.tick = '\u2713';
        this.cross = '\u2718';
    }
  }

  Tudor.prototype.add = function(lines) {
    var article, i, line, runner, section;
    article = {
      sections: []
    };
    runner = null;
    section = null;
    if (A !== _o.type(lines)) {
      throw Error("`lines` isn’t an array");
    }
    if (0 === lines.length) {
      throw Error("`lines` has no elements");
    }
    if (S !== _o.type(lines[0])) {
      throw Error("`lines[0]` isn’t a string");
    }
    article.heading = lines.shift();
    i = 0;
    while (i < lines.length) {
      line = lines[i];
      switch (_o.type(line)) {
        case O:
          if (!line.runner) {
            throw new Error("Errant object");
          }
          runner = line.runner;
          break;
        case F:
          section.jobs.push(line);
          break;
        case S:
          if (this.isAssertion(lines[i + 1], lines[i + 2])) {
            if (!section) {
              throw new Error("Cannot add an assertion here");
            }
            section.jobs.push([runner, line, lines[++i], lines[++i]]);
          } else {
            section = {
              heading: line,
              jobs: []
            };
            article.sections.push(section);
          }
      }
      i++;
    }
    return this.articles.push(article);
  };

  Tudor.prototype["do"] = function() {
    var actual, art, artFail, artPass, article, e, error, expect, heading, j, job, k, l, len, len1, len2, mock, mockFail, pge, pgeFail, pgePass, ref, ref1, ref2, result, runner, sec, secFail, secPass, section, summary;
    pge = [];
    mock = [];
    pgePass = pgeFail = mockFail = 0;
    ref = this.articles;
    for (j = 0, len = ref.length; j < len; j++) {
      article = ref[j];
      art = [];
      artPass = artFail = 0;
      ref1 = article.sections;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        section = ref1[k];
        sec = [];
        secPass = secFail = 0;
        ref2 = section.jobs;
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          job = ref2[l];
          switch (_o.type(job)) {
            case F:
              try {
                mock = job.apply(this, mock);
              } catch (_error) {
                e = _error;
                error = e.message;
              }
              if (error) {
                mockFail++;
                secFail++;
                sec.push(this.formatMockModifierError(job, error));
              }
              break;
            case A:
              runner = job[0], heading = job[1], expect = job[2], actual = job[3];
              result = runner(expect, actual, mock);
              if (!result) {
                sec.push(this.jobFormat("" + (this.sanitize(heading))));
                pgePass++;
                artPass++;
                secPass++;
              } else {
                sec.push(this.jobFormat("" + (this.sanitize(heading)), result));
                pgeFail++;
                artFail++;
                secFail++;
              }
          }
        }
        sec.unshift(this.sectionHead("" + (this.sanitize(section.heading)), secFail));
        sec.push(this.sectionFoot);
        art = art.concat(sec);
      }
      art.unshift(this.articleHead("" + (this.sanitize(article.heading)), artFail));
      art.push(this.articleFoot);
      pge = pge.concat(art);
      summary = pgeFail ? this.cross + " FAILED " + pgeFail + "/" + (pgePass + pgeFail) : this.tick + " Passed " + pgePass + "/" + (pgePass + pgeFail);
      if (mockFail) {
        summary = "\n" + this.cross + " (MOCK FAILS)";
      }
    }
    pge.unshift(this.pageHead(summary));
    pge.push(this.pageFoot(summary));
    return pge.join('\n');
  };

  Tudor.prototype.formatError = function(result) {
    switch (result.length + "-" + this.opt.format) {
      case '2-html':
        return result[0] + "\n<pre class=\"fail\">" + (this.sanitize(result[1].message)) + "</pre>";
      case '2-plain':
        return result[0] + "\n" + (this.sanitize(result[1].message));
      case '3-html':
        return "<pre class=\"fail\">" + (this.sanitize(this.reveal(result[0]))) + "</pre>\n..." + result[1] + "...\n<pre class=\"pass\">" + (this.sanitize(this.reveal(result[2]))) + "</pre>";
      case '3-plain':
        return (this.sanitize(this.reveal(result[0]))) + "\n..." + result[1] + "...\n" + (this.sanitize(this.reveal(result[2])));
      case '4-html':
        return "<pre class=\"fail\">" + (this.sanitize(this.reveal(result[0]))) + " (" + (_o.type(result[0])) + ")</pre>\n..." + result[1] + "...\n<pre class=\"pass\">" + (this.sanitize(this.reveal(result[2]))) + " (" + (_o.type(result[2])) + ")</pre>";
      case '4-plain':
        return (this.sanitize(this.reveal(result[0]))) + " (" + (_o.type(result[0])) + ")\n..." + result[1] + "...\n" + (this.sanitize(this.reveal(result[2]))) + " (" + (_o.type(result[2])) + ")";
      default:
        throw new Error("Cannot process '" + result.length + "-" + this.opt.format + "'");
    }
  };

  Tudor.prototype.formatMockModifierError = function(fn, error) {
    switch (this.opt.format) {
      case 'html':
        return "<pre class=\"fn\">" + (this.sanitize(fn + '')) + "</pre>\n...encountered an exception:\n<pre class=\"fail\">" + (this.sanitize(error)) + "</pre>";
      default:
        return (this.sanitize(fn + '')) + "\n...encountered an exception:\n" + (this.sanitize(error));
    }
  };

  Tudor.prototype.reveal = function(value) {
    return value != null ? value.toString().replace(/^\s+|\s+$/g, function(match) {
      return '\u00b7' + (new Array(match.length)).join('\u00b7');
    }) : void 0;
  };

  Tudor.prototype.sanitize = function(value) {
    switch (this.opt.format) {
      case 'html':
        return value != null ? value.toString().replace(/</g, '&lt;') : void 0;
      default:
        return value;
    }
  };

  Tudor.prototype["throw"] = {
    runner: function(expect, actual, mock) {
      var e, error;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (!error) {
        return [
          'No exception thrown, expected', {
            message: expect
          }
        ];
      } else if (expect !== error.message) {
        return [error.message, 'was thrown, but expected', expect];
      }
    }
  };

  Tudor.prototype.equal = {
    runner: function(expect, actual, mock) {
      var e, error, result;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        result = actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (error) {
        return ['Unexpected exception', error];
      } else if (expect !== result) {
        if (result + '' === expect + '') {
          return [result, 'was returned, but expected', expect, true];
        } else {
          return [result, 'was returned, but expected', expect];
        }
      }
    }
  };

  Tudor.prototype.is = {
    runner: function(expect, actual, mock) {
      var e, error, result;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        result = actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (error) {
        return ['Unexpected exception', error];
      } else if (expect !== _o.type(result)) {
        return ["type " + (_o.type(result)), 'was returned, but expected', "type " + expect];
      }
    }
  };

  Tudor.prototype.match = {
    runner: function(expect, actual, mock) {
      var e, error, result;
      if (mock == null) {
        mock = [];
      }
      error = false;
      try {
        result = actual.apply(this, mock);
      } catch (_error) {
        e = _error;
        error = e;
      }
      if (error) {
        return ['Unexpected exception', error];
      } else if (F !== typeof expect.test) {
        return [
          '`test()` is not a function', {
            message: expect
          }
        ];
      } else if (!expect.test('' + result)) {
        return ['' + result, 'failed test', expect];
      }
    }
  };

  Tudor.prototype.isAssertion = function(line1, line2) {
    if (F !== _o.type(line2)) {
      return false;
    }
    if ((O === _o.type(line1)) && F === _o.type(line1.runner)) {
      return false;
    }
    return true;
  };

  return Tudor;

})();

tudor = new Tudor({
  format: O === typeof window ? 'html' : 'plain'
});

JsMultRun.runTest = tudor["do"];

tudor.add([
  "01 JsMultRun Constructor", tudor.is, "The class and instance are expected types", "The JsMultRun class is a function", F, function() {
    return JsMultRun;
  }, "`new` returns an object", O, function() {
    return new JsMultRun;
  }, "Missing `config` properties fall back to expected values", tudor.equal, "Optional `config.log` falls back to `3`", 3, function() {
    return (new JsMultRun).log;
  }, "`config` values must be valid", "Optional `config.log` must be an integer between 0 and 9", 5, function() {
    return (new JsMultRun({
      log: 5
    })).log;
  }, "`config` values must not be invalid", tudor["throw"], "Optional `config.log` must not be a string", "/jsmultrun/src/JsMultRun.litcoffee JsMultRun()\n  config.log is type string not integer", function() {
    return new JsMultRun({
      log: '5'
    });
  }, "Optional `config.log` must be an integer", "/jsmultrun/src/JsMultRun.litcoffee JsMultRun()\n  config.log is a number but not an integer", function() {
    return new JsMultRun({
      log: 5.1
    });
  }, "Optional `config.log` must be not be less than 0", "/jsmultrun/src/JsMultRun.litcoffee JsMultRun()\n  config.log is -1 (must be 0-9)", function() {
    return new JsMultRun({
      log: -1
    });
  }, "Optional `config.log` must be not be greater than 9", "/jsmultrun/src/JsMultRun.litcoffee JsMultRun()\n  config.log is 10 (must be 0-9)", function() {
    return new JsMultRun({
      log: 10
    });
  }
]);
}).call(this,this);
// Example vendor file. 

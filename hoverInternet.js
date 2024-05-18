/*! This file is auto-generated */
!function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
}(function(f) {
  "use strict";
  function u(e) {
      return "function" == typeof e
  }
  var i, r, v = {
      interval: 100,
      sensitivity: 6,
      timeout: 0
  }, s = 0, a = function(e) {
      i = e.pageX,
      r = e.pageY
  }, p = function(e, t, n, o) {
      if (Math.sqrt((n.pX - i) * (n.pX - i) + (n.pY - r) * (n.pY - r)) < o.sensitivity)
          return t.off(n.event, a),
          delete n.timeoutId,
          n.isActive = !0,
          e.pageX = i,
          e.pageY = r,
          delete n.pX,
          delete n.pY,
          o.over.apply(t[0], [e]);
      n.pX = i,
      n.pY = r,
      n.timeoutId = setTimeout(function() {
          p(e, t, n, o)
      }, o.interval)
  };
  f.fn.hoverIntent = function(e, t, n) {
      function o(e) {
          var u = f.extend({}, e)
            , r = f(this)
            , v = ((t = r.data("hoverIntent")) || r.data("hoverIntent", t = {}),
          t[i])
            , t = (v || (t[i] = v = {
              id: i
          }),
          v.timeoutId && (v.timeoutId = clearTimeout(v.timeoutId)),
          v.event = "mousemove.hoverIntent.hoverIntent" + i);
          "mouseenter" === e.type ? v.isActive || (v.pX = u.pageX,
          v.pY = u.pageY,
          r.off(t, a).on(t, a),
          v.timeoutId = setTimeout(function() {
              p(u, r, v, d)
          }, d.interval)) : v.isActive && (r.off(t, a),
          v.timeoutId = setTimeout(function() {
              var e, t, n, o, i;
              e = u,
              t = r,
              n = v,
              o = d.out,
              (i = t.data("hoverIntent")) && delete i[n.id],
              o.apply(t[0], [e])
          }, d.timeout))
      }
      var i = s++
        , d = f.extend({}, v);
      f.isPlainObject(e) ? (d = f.extend(d, e),
      u(d.out) || (d.out = d.over)) : d = u(t) ? f.extend(d, {
          over: e,
          out: t,
          selector: n
      }) : f.extend(d, {
          over: e,
          out: e,
          selector: t
      });
      return this.on({
          "mouseenter.hoverIntent": o,
          "mouseleave.hoverIntent": o
      }, d.selector)
  }
});

/**
 * Created by charlie on 10/13/16.
 */

import Vue from 'vue'

Vue.directive('clickoutside', {
  bind: function () {},
  update: function (handler) {
    // do something based on the updated value
    // this will also be called for the initial value
    if (typeof handler !== 'function') {
      return
    }

    let el = this.el
    let scope = this._scope || this.vm

    this.handler = function (ev) {
      // @NOTE: IE 5.0+
      // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
      if (!el.contains(ev.target)) {
        scope.$event = ev
        let res = handler(ev)
        scope.$event = null
        return res
      }
    }

    Vue.util.on(document.documentElement, 'click', this.handler)
  },
  unbind: function () {
    // do clean up work
    Vue.util.off(document.documentElement, 'click', this.handler)
  }
})

export default Vue

/**
 * Created by charlie on 10/11/16.
 */
import Vue from 'vue'
import VhModal from './modal.vue'
import VhModalAlert from './alert.vue'

// let VhModalFn = Vue.extend(VhModal)
let VhAlertFn = Vue.extend(VhModalAlert)

// let _mixins = {}

let Factory = {
  /**
   * @param msg
   * @param callback
   */
  confirm (msg, callback = () => {}) {
    let options = {
      message: msg,
      onConfirm: () => callback(true),
      onCancel: () => callback(false)
    }

    let vmodel = new VhAlertFn({
      data: options
    }).$mount()

    document.body.appendChild(vmodel.$el)

    vmodel.visible = true

    return vmodel
  },
  /**
   * @param msg
   * @param done
   */
  alert (msg, done) {
    let options = {
      message: msg,
      onConfirm: done
    }

    let vmodel = new VhAlertFn({
      data: options
    }).$mount()

    // vmodel.id = Date.now() + Math.random()* 10000 + '';
    document.body.appendChild(vmodel.$el)

    vmodel.visible = true

    return vmodel
  },
  /**
   * @param label
   * @param done
   */
  prompt (label, done) {
    // @Todo implementation...
  }
}

export {
  Factory as default,
  VhModal
}

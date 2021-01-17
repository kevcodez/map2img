import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, setInteractionMode } from 'vee-validate'
import { required, max, min, numeric, min_value, max_value } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', required)
extend('max', max)
extend('min', min)
extend('numeric', numeric)
extend('min_value', min_value)
extend('max_value', max_value)

setInteractionMode('eager')

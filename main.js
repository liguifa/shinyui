import Vue from 'vue'
import Button from "./src/button/sui.button.component.vue";

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<Button type="danger" text="haha" />',
  components: { Button }
})
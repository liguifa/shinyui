<template>
    <div class='sui-button-div'>
        <button v-bind:class='"sui-button sui-button-"+type+" sui-button-"+size' v-on:click='click'>
            <sui-icon class='sui-button-icon' v-if='icon' type='vm.icon'></sui-icon>
            <span>{{text}}</span>
        </button>
    </div>
</template>

<script>
export default {
  name: "suiButton",
  props: {
    type: String,
    size: String,
    text: String,
    disabled: Boolean,
    href: String,
    icon: String
  },
  data() {
    return {};
  },
  methods: {
    click: function() {
      alert("hello world");
    }
  }
}
</script>

<style>
.sui-button {
  display: inline-block;
  height: 38px;
  line-height: 38px;
  padding: 0 18px;
  background-color: #009688;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  opacity: 0.9;
  min-width: 98px;
  outline: 0;
  -webkit-transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.35, 0.5);
  transition: border-color 0.3s cubic-bezier(0.65, 0.05, 0.35, 0.5);
  -webkit-box-sizing: border-box !important;
  -moz-box-sizing: border-box !important;
  box-sizing: border-box !important;
  line-height: 38px;
}

.sui-button:hover {
  opacity: 0.8;
}

.sui-button-icon {
  float: left;
  height: 20px;
  width: 20px;
  margin-left: -12px;
  margin-top: 5px;
}

.sui-button-primary {
  border: 1px solid #c9c9c9;
  background-color: #fff;
  color: #555;
}

.sui-button-default {
  background-color: #009688;
  color: #fff;
}

.sui-button-normal {
  background-color: #1e9fff;
  color: #fff;
}

.sui-button-warm {
  background-color: #f7b824;
  color: #fff;
}

.sui-button-danger {
  background-color: #ff5722;
  color: #fff;
}

.sui-button-big {
  height: 44px;
  line-height: 44px;
  padding: 0 25px;
  font-size: 16px;
  min-width: 116px;
}

.sui-button-small {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 12px;
  min-width: 70px;
}

.sui-button-mini {
  height: 22px;
  line-height: 22px;
  padding: 0 5px;
  font-size: 12px;
  min-width: 60px;
}

.sui-button-disabled {
  border: 1px solid #e6e6e6;
  background-color: #fbfbfb;
  color: #c9c9c9;
  cursor: not-allowed;
  opacity: 1;
}
</style>
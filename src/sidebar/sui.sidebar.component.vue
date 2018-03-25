<template>
    <div class='sui-sidebar'>
                    <ul class='sui-sidebar-list'>
                        <li v-for='item in navs' :key='item.title'>
                            <a class='sui-sidebar-text' :href='item.url' v-if='item.subs == undefined'>{{item.title}}</a>
                            <div class='sui-sidebar-subtitle' v-if='item.subs != undefined' v-on:click='open(item)'>
                                <span>{{item.title}}</span>
                                <sui-icon class='sui-sidebar-subtitle-icon' type='angle_down' v-if='item.subs != undefined && !item.isOpen' /></sui-icon>
                                <sui-icon class='sui-sidebar-subtitle-icon' type='angle_up' v-if='item.subs != undefined && item.isOpen' /></sui-icon>
                            </div>
                            <ul v-if='item.subs != undefined && item.isOpen' class='sui-sidebar-list-sub'>
                                <li :class='sub.isActive?"sui-sidebar-item sui-sidebar-item-active":"sui-sidebar-item"' v-for='sub in item.subs' :key='sub.title'>
                                    <a class='sui-sidebar-text' :href='sub.url' :target='sub.target' v-on:click='navClick(sub)'>{{sub.title}}</a>
                                </li>
                            </ul>
                        </li></ul>
                   </div>
</template>

<script>
export default {
  name: "sidebar",
  props: {
    items: Array
  },
  data() {
    return {
      navs: this.items
    };
  },
  methods: {
    open(item) {
      this.navs = this.navs.map(nav => {
        nav.isOpen = nav == item;
        return nav;
      });
    },
    navClick(item) {
      this.navs = this.navs.map(nav => {
        nav.isActive = nav == item;
        nav.subs = nav.subs.map(sub => {
          sub.isActive = false;
          return sub;
        });
        return nav;
      });
    }
  }
};
</script>

<style>
.sui-sidebar {
  width: 200px;
  height: 100%;
  background: #393d49;
  left: 0px;
  overflow-y: auto;
}

.sui-sidebar::-webkit-scrollbar {
  width: 0px;
}

.sui-sidebar-list {
  list-style: none;
  margin: 0px;
  padding-left: 0px;
}

.sui-sidebar-item {
  width: 200px;
  height: 40px;
  border-left: 5px solid #393d49;
}

.sui-sidebar-item:hover {
  border-left: 5px solid #009688;
}

.sui-sidebar-text {
  text-decoration: none;
  color: #c2c2c2;
  padding-left: 15px;
  line-height: 40px;
  cursor: pointer;
  font-size: 14px;
}

.sui-sidebar-text:hover {
  color: #fff;
}

.sui-sidebar-list-sub {
  list-style: none;
  margin: 0px;
  padding: 0px;
  background: #393d49;
}

.sui-sidebar-subtitle {
  background: #2b2e37;
  line-height: 40px;
  height: 40px;
  width: 180px;
  font-size: 14px;
  color: #fff;
  padding-left: 20px;
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.sui-sidebar-subtitle span {
  display: inline-block;
  width: 130px;
}

.sui-sidebar-subtitle-icon {
  color: #fff;
  line-height: 48px;
  position: relative;
  display: inline-block;
}

.sui-sidebar-item-active {
  background: #5fb878;
  color: #fff;
  cursor: default;
  /*box-shadow:2px 2px 3px #000;*/
  border-left: 5px solid #5fb878;
}

.sui-sidebar-item-active .sui-sidebar-text {
  color: #fff;
}

.sui-sidebar-item-active:hover {
  border-left: 5px solid #5fb878 !important;
}
</style>
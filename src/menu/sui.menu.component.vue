<template>
    <div class='sui-nav'>
                    <img class='sui-nav-icon' :src='icon' />
                    <ul class='sui-nav-list'>
                        <li class='sui-nav-item' v-for='nav in navs' :key='nav.title'>
                            <a v-if='nav.isLink' :href='nav.url' target='_blank'>{{nav.title}}</a>
                            <a v-if='!nav.isLink' v-on:click='showSubs(nav)'>{{nav.title}}</a>
                            <div v-if='nav.isShowSubs' class='sui-nav-subnav'>
                                <ul class='sui-nav-subnav-list'>
                                    <li class='sui-nav-subnav-item' v-for='subnav in nav.subs' :key='subnav.title'>
                                        <span v-if='!subnav.isLink' v-on:click='subClick(subnav,nav)'>{{subnav.title}}</span>
                                        <a v-if='subnav.isLink' :href='subnav.url' target='_blank'>{{subnav.title}}</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div class='sui-nav-custom'><slot></slot></div>
                   </div>
</template>

<script>
export default {
  name: "suiMenu",
  props: {
    items: Array,
    icon: String
  },
  data() {
    return {
        navs:this.items
    };
  },
  methods: {
    showSubs: function(item) {
      this.navs = this.navs.map(function(nav) {
        nav.isShowSubs = item == nav;
        nav.subs = nav.subs.map(function(sub) {
          sub.isShowSubs = false;
          return sub;
        });
        return nav;
      });
    },
    subClick: function(sub, parentNav) {
      sub.click();
      parentNav.isShowSubs = false;
    }
  }
};
</script>

<style>
.sui-nav {
  position: relative;
  padding: 0 20px;
  background-color: #393d49;
  color: #c2c2c2;
  /*border-radius: 2px;*/
  font-size: 0;
  box-sizing: border-box !important;
  height: 55px;
}

.sui-nav-custom {
  float: right;
  margin-right: 10px;
  height: 55px;
  line-height: 55px;
  vertical-align: central;
}

.sui-nav-icon {
  width: 116px;
  height: 35px;
  margin-top: 12px;
  float: left;
  margin-right: 10px;
}

.sui-nav-list {
  list-style: none;
  margin: 0px;
  float: left;
}

.sui-nav-item {
  position: relative;
  display: inline-block;
  /*vertical-align: middle;*/
  line-height: 50px;
  height: 50px;
  /* width:80px; */
}

.sui-nav-item:hover {
}

.sui-nav-item:hover a {
  color: #fff;
  border-bottom: solid 5px #5fb878;
}

.sui-nav-item a {
  display: block;
  padding: 0 20px;
  color: #c2c2c2;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: solid 5px #393d49;
}

.sui-nav-subnav {
  width: 200px;
  height: auto;
  border: #e6e6e6;
  background: #fff;
  float: left;
  margin-top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  white-space: nowrap;
}

.sui-nav-subnav-list {
  margin: 0px;
  list-style: none;
  padding: 0px;
}

.sui-nav-subnav-item:hover {
  background: #e2e2e2;
}

.sui-nav-subnav-item {
  color: #000;
  font-size: 14px;
  line-height: 36px;
  vertical-align: central;
  padding: 0 20px;
  cursor: pointer;
}

.sui-nav-subnav-item a {
  width: 100%;
  background: #fff;
  color: #000000;
  border: none;
  margin: 0px;
  padding: 0px;
}

.sui-nav-subnav-item:hover a {
  color: #000;
  background: #e2e2e2;
}

.sui-nav-item:hover .sui-nav-subnav-item a {
  width: 100%;
  color: #000000;
  border: none;
}

.sui-nav-subnav-item a:hover {
  width: 100%;
  background: #fff;
  color: #000000;
  border: none;
  background: #e2e2e2;
}
</style>
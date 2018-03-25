import Button from "./button/sui.button.component.vue"
import Menu from "./menu/sui.menu.component.vue"
import Avatar from "./avatar/sui.avatar.component.vue"
import Sidebar from "./sidebar/sui.sidebar.component.vue"
import Datagrid from "./datagrid/sui.datagrid.component.vue"
import Line from "./line/sui.line.component.vue"

const suiView = {
    suiButton: Button,
    suiMenu: Menu,
    suiAvatar:Avatar,
    suiSidebar:Sidebar,
    suiDatagrid:Datagrid,
    suiLine:Line
}

for (var key in suiView) {
    Vue.component(key, suiView[key]);
}
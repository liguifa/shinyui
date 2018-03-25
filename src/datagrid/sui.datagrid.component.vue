<template>
    <div class="sui-datagrid-content">
                    <div class="sui-datagrid-tool" v-if="isShowTool"><ul class="sui-datagrid-tool-list">
                        <li class="sui-datagrid-tool-item"><sui-icon type="\'trash_empty\'" v-on:click="remove"></sui-icon></li>
                        <li class="sui-datagrid-tool-item"><sui-icon type="\'plus_circle\'"></sui-icon></li>
                        <li class="sui-datagrid-tool-item"><sui-icon type="\'edit\'"></sui-icon></li>
                        <li class="sui-datagrid-tool-item"><sui-icon type="\'flopp\'"></sui-icon>
                        <li class="sui-datagrid-tool-item sui-datagrid-tool-column"><sui-multiselect :fields="fields"></sui-multiselect></li>
                        <li class="sui-datagrid-tool-item sui-datagrid-tool-column"><sui-search :placeholder="placeholder" :fields="fields"></sui-search></li>
                    </ul></div>
                    <div class="sui-datagrid-data">
                        <div class="sui-datagrid-data-header" :style="'padding-right:'+tableHeaderPadding+'px'">
                            <table class="sui-datagrid">
                                <thead v-if="isShowThead">
                                  <tr>
                                    <th v-if="isCanSelect"><input type="checkbox" name="" v-on:change="globalChecked" v-model="isGlobalSelected"></th>
                                    <th v-for="field in fields" v-on:click="sort(field.name)" :key="field.name">
                                        {{field.name}}
                                        <div class="sui-datagrid-content-header-icon" v-if="field.isPrimary"><img src="/Static/Images/icon_key.png" /></div>
                                        <div class="sui-datagrid-content-sort-icon sui-icon-sort-asc" v-if="field.isSort && field.isuisc"></div>
                                        <div class="sui-datagrid-content-sort-icon sui-icon-sort-desc" v-if="field.isSort && !field.isuisc"></div>
                                    </th>
                                  </tr> 
                                </thead>
                            </table>
                        </div>
                        <div class="sui-datagrid-data-body">
                            <table class="sui-datagrid" :height="tableHeight+'px'">
                                <tbody>
                                      <tr v-for="row in datas" :key="row">
                                        <td v-if="isCanSelect"><input type="checkbox" name="" ng-model="row.isSelected" lay-skin="primary"></td>
                                        <td v-if="isEdit" v-for="value in row.rows" :key='value'><sui-field type="vm.fields[$index].type" :value="value"></sui-field></td>
                                        <td v-if="!isEdit" v-for="(value, key) in row.rows" :key="key" :title="value">{{value}}</td>
                                      </tr>
                                </tbody>
                            </table>
                            <hr />
                        </div>
                    </div>
                    <div class="sui-datagrid-footer" v-if="isShowFooter">
                        <sui-pagination class="sui-datagrid-footer-page" :page="page" pageNumber="10"></sui-pagination>
                        <span class="sui-datagrid-footer-info">共 {{page.total}} 行 {{page.pageCount}} 页，当前显示 {{(page.pageIndex-1)*page.pageSize+1}}-{{page.pageIndex == page.pageCount ? page.total : page.pageIndex*page.pageSize}} 行</span>
                    </div>
                  </div>
</template>

<script>
export default {
  props: {
    datas: Array,
    fields: Array,
    indexs: Array,
    isCanSelect: Boolean,
    isShowThead: Boolean,
    isShowTool: Boolean,
    isShowFooter: Boolean,
    isEdit: Boolean
  },
  data(){
      return {
          page:{
              total:78,
              pageCount:20,
              pageIndex:1,
              pageSize:10
          }
      }
  }
};
</script>

<style>
.sui-datagrid {
  border: 1px solid #e2e2e2;
  width: 100%;
  margin: 0;
  background-color: #fff;
  line-height: 22px;
  border-collapse: collapse;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  z-index: 996;
  border-right: none;
  table-layout: fixed;
}

.sui-datagrid-tool {
  height: 40px;
  border-top: 2px solid #009688;
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
}

.sui-datagrid-tool-list {
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin-left: 10px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

.sui-datagrid-tool-item {
  float: left;
  margin-top: 11px;
}

.sui-datagrid-tool-item .sui-icon {
  color: #009688;
}

.sui-datagrid-tool-column {
  float: right;
  margin-top: 10px;
  margin-right: 30px;
}

.sui-datagrid-data {
  overflow: hidden;
  width: 100%;
}

.sui-datagrid-data th:last-child {
  border-right: none;
}

.sui-datagrid-data td:last-child {
  border-right: none;
}

.sui-datagrid-data-header {
  height: 39px;
  margin: 0px;
  border-right: 1px solid #e2e2e2;
  background: #f2f2f2;
  border-right: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
}

.sui-datagrid-data-header table {
  border-left: none;
}

.sui-datagrid-data-body {
  height: 100%;
  overflow-y: auto;
  margin: 0px;
  border-right: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
}

.sui-datagrid-data-body table {
  border-left: none;
}

.sui-datagrid-data-body hr {
  color: #e2e2e2;
  background: #e2e2e2;
  height: 1px;
  border: none;
  margin: 0px;
}

.sui-datagrid thead tr {
  background-color: #f2f2f2;
}

.sui-datagrid th {
  padding: 9px 15px;
  min-height: 20px;
  line-height: 20px;
  border: 1px solid #e2e2e2;
  border-left: none;
  font-size: 14px;
  text-align: left;
  z-index: 996;
  cursor: pointer;
}

.sui-datagrid tbody tr:hover {
  background: #f2f2f2;
}

.sui-datagrid-content {
  overflow-y: hidden;
  overflow-x: auto;
  height: 80%;
  width: 100%;
  margin: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 996;
}

.sui-datagrid-content-td {
  vertical-align: top;
  padding: 0px;
  z-index: 996;
}

.sui-datagrid-content td {
  padding: 9px 15px 9px;
  min-height: 20px;
  line-height: 20px;
  border: 1px solid #e2e2e2;
  border-left: none;
  font-size: 14px;
  text-align: left;
  height: 25%;
  z-index: 996;
  height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-height: 20px;
}

.sui-datagrid-content-header-icon {
  float: right;
  width: 16px;
  height: 16px;
}

.sui-datagrid-content-header-icon img {
  width: 16px;
  height: 16px;
}

.sui-datagrid-content-sort-icon {
  float: right;
}

.sui-datagrid-footer {
  height: 40px;
  border-bottom: 2px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  background: #f2f2f2;
}

.sui-datagrid-footer-page {
  margin-top: 5px !important;
  margin-right: 10px !important;
  float: right;
}

.sui-datagrid-footer-info {
  float: right;
  margin-top: 10px;
  margin-right: 5px;
}
</style>
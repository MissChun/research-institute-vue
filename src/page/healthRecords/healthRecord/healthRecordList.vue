<template>
  <div>
    <div class="nav-tab">
      <div class="tab-screen border-top">
        <el-form class="search-filters-form" label-width="80px" :model="searchFilters" status-icon>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-input
                placeholder="请输入"
                v-model="searchFilters.keyword"
                class="search-filters-screen"
                @keyup.native.13="startSearch"
              >
                <el-select v-model="searchFilters.field" slot="prepend" placeholder="请选择">
                  <el-option
                    v-for="(item,key) in selectData.fieldSelect"
                    :key="key"
                    :label="item.value"
                    :value="item.id"
                  ></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="startSearch"></el-button>
              </el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="性别:">
                <el-select v-model="searchFilters.gender" placeholder="请选择" @change="startSearch">
                  <el-option
                    v-for="(item,key) in selectData.perfectSelect"
                    :key="key"
                    :label="item.value"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="签约属性:">
                <el-select
                  v-model="searchFilters.package_state"
                  placeholder="请选择"
                  @change="startSearch"
                >
                  <el-option
                    v-for="(item,key) in selectData.select1"
                    :key="key"
                    :label="item.value"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="operation-btn text-right">
        <!-- <el-button type="primary" plain>导入</el-button> -->
        <!-- <el-button type="primary">导出</el-button> -->
        <el-button type="success" @click="goAddLink">新增</el-button>
      </div>
      <div class="table-list">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          size="mini"
          v-loading="pageLoading"
          :class="{'tabal-height-500':!tableData.length}"
        >
          <el-table-column
            v-for="(item,key) in thTableList"
            :key="key"
            align="center"
            :label="item.title"
            :width="item.width"
          >
            <template slot-scope="scope">
              <span v-if="item.param === 'gender'">
                <span v-if="scope.row.profile.gender === '0'">女</span>
                <span v-if="scope.row.profile.gender === '1'">男</span>
                <span v-if="scope.row.profile.gender === '2'">未知</span>
              </span>
              <span
                v-if="item.param !== 'gender'"
                style="margin-left: 10px"
              >{{ scope.row.profile[item.param]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="150" fixed="right">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="handleMenuClick(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <noData v-if="!pageLoading && tableData.length==0"></noData>
      </div>
      <div class="page-list text-center">
        <el-pagination
          background
          layout="prev, pager, next,jumper"
          :total="pageData.totalCount"
          :page-size="pageData.pageSize"
          :current-page.sync="pageData.currentPage"
          @current-change="pageChange"
          v-if="!pageLoading && pageData.totalCount>10"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'healthRecordList',
  computed: {},
  data() {
    return {
      pageLoading: false,
      pageData: {
        currentPage: 1,
        totalCount: '',
        pageSize: 10
      },
      searchPostData: {}, // 搜索参数
      postDataCopy: '',
      searchFilters: {
        package_state: '',
        gender: '',
        keyword: '',
        field: 'nick_name'
      },
      selectData: {
        perfectSelect: [
          { id: '', value: '全部' },
          { id: '2', value: '未知' },
          { id: '1', value: '男' },
          { id: '0', value: '女' }
        ],
        select1: [
          { id: '', value: '全部' },
          { id: true, value: '已签约' },
          { id: false, value: '未签约' }
        ],
        fieldSelect: [
          { id: 'nick_name', value: '姓名' },
          { id: 'identity_card', value: '身份证' },
          { id: 'mobile_number', value: '电话' }
        ]
      },
      thTableList: [
        {
          title: '姓名',
          param: 'nick_name',
          width: ''
        },
        {
          title: '性别',
          param: 'gender',
          width: ''
        },
        {
          title: '年龄',
          param: 'age',
          width: ''
        },
        {
          title: '身份证号',
          param: 'identity_card',
          width: ''
        },
        {
          title: '电话',
          param: 'mobile_number',
          width: ''
        },
        {
          title: '疾病史',
          param: 'id_number',
          width: ''
        }
      ],
      tableData: []
    }
  },
  methods: {
    goAddLink() {
      window.open(`/#/healthRecords/healthRecord/healthRecordDetail`, '_blank')
    },
    getHealthRecords(postData) {
      this.pageLoading = true
      this.$$http('getHealthRecords', postData)
        .then(results => {
          this.pageLoading = false
          if (results.data && results.data.code == 0) {
            this.tableData = results.data.content.instances
            this.pageData.totalCount = results.data.content.count
          }
        })
        .catch(err => {
          this.pageLoading = false
        })
    },
    startSearch() {
      this.pageData.currentPage = 1
      let postData = {
        page: this.pageData.currentPage,
        page_size: this.pageData.pageSize,
        gender: this.searchFilters.gender,
        search_type: this.searchFilters.field,
        search: this.searchFilters.keyword,
        package_state: this.searchFilters.package_state
      }
      this.postDataCopy = Object.assign({}, postData)
      this.getHealthRecords(postData)
    },
    pageChange(page) {
      console.log('page', page)
      this.postDataCopy.page = page
      this.getHealthRecords(this.postDataCopy)
    },
    handleMenuClick() {
      this.$router.push({
        path: '/healthRecords/healthRecord/healthRecordDetail'
      })
    }
  },
  created() {
    this.getHealthRecords()
  }
}
</script>
<style>
</style>

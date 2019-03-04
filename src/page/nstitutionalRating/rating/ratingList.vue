<template>
  <div>
    <div class="nav-tab">
      <div class="tab-screen border-top">
        <el-form class="search-filters-form" label-width="80px" :model="searchFilters" status-icon>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-input placeholder="请输入" v-model="searchFilters.keyword"  class="search-filters-screen">
                <el-select v-model="searchFilters.field" slot="prepend" placeholder="请选择">
                  <el-option v-for="(item,key) in selectData.fieldSelect" :key="key" :label="item.value" :value="item.id"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" ></el-button>
              </el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="机构类型:">
                <el-select v-model="searchFilters.complete_status"  placeholder="请选择">
                  <el-option v-for="(item,key) in selectData.perfectSelect" :key="key" :label="item.value" :value="item.id"></el-option>
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
        <el-table :data="tableData" stripe style="width: 100%" size="mini" v-loading="pageLoading" :class="{'tabal-height-500':!tableData.length}">
          <el-table-column v-for="(item,key) in thTableList" :key="key" :prop="item.param" align="center" :label="item.title" :width="item.width">
          </el-table-column>
          <el-table-column label="完善状态" align="center" width="140">
            <template slot-scope="scope">
              <div>{{scope.row.complete_status?'已完善':'未完善'}}</div>
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
        <el-pagination background layout="prev, pager, next,jumper" :total="pageData.totalCount" :page-size="pageData.pageSize" :current-page.sync="pageData.currentPage" @current-change="pageChange" v-if="!pageLoading && pageData.totalCount>10">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'threePartyCapacityList',
  computed: {

  },

  data() {
    return {
      pageLoading: false,
      pageData: {
        currentPage: 1,
        totalCount: '',
        pageSize: 10,
      },
      searchPostData: {}, //搜索参数
      searchFilters: {
        complete_status: '',
        keyword: '',
        field: 'tractor_plate_number',
      },
      selectData: {
        perfectSelect: [
          { id: '', value: '全部' },
          { id: false, value: '医院' },
          { id: true, value: '医疗机构' }
        ],
        fieldSelect: [
          { id: 'tractor_plate_number', value: '机构名称' },
          { id: 'semitrailer_plate_number', value: '机构代码' },
        ]
      },
      thTableList: [{
        title: '机构名称',
        param: 'tractor.plate_number',
        width: ''
      }, {
        title: '机构代码',
        param: 'semitrailer.plate_number',
        width: ''
      }, {
        title: '机构类型',
        param: 'tractor.carrier.name',
        width: ''
      }, {
        title: '评级分数',
        param: 'master_driver.name',
        width: ''
      }, {
        title: 'XX标签',
        param: 'master_driver.id_number',
        width: ''
      }],
      tableData: []
    }
  },
  methods: {
    goAddLink(){
      window.open(`/#/nstitutionalRating/rating/ratingEdit`,'_blank');
    }
    
  },
  created() {
  }

}

</script>
<style>


</style>

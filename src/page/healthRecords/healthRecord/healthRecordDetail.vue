<template>
  <div>
    <div class="nav-tab">
      <el-tabs v-model="activeName" type="card" @tab-click="clicktabs">
        <el-tab-pane label="个人资料" name="first">
          <div class="detail-content">
            <ul>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">姓名：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">性别：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">男</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">女</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">出生日期：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">身份证号：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">手机号：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">身高（cm）：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">体重（kg）：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">婚姻状况：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">已婚</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">未婚</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">离婚</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">丧偶</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">受教育程度：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">大学本科及以上</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">专科</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">高中</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">初中</el-radio>
                      <el-radio v-model="detailData.message.gender" label="5">小学</el-radio>
                      <el-radio v-model="detailData.message.gender" label="7">未受教育</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">职业：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="1">国家机关、党群组织、事业单位负责人</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="2">专业技术人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="3">办事和有关人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="4">商业、服务业人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="5">农、林、牧、渔、水利业生产人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="6">生产、运输设备操作人员及相关人员</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="7">军人</el-radio>
                      </div>
                      <div class="multiple-rows">
                        <el-radio v-model="detailData.message.gender" label="8">不方便分类的其他从业人员</el-radio>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="健康状况" name="second">
          <div class="detail-content">
            <ul>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">早发心血管病风险：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">有</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">无</el-radio>
                      <div class="remarks">
                        注：早发心血管病是指您的父母，兄弟姐妹，子女中时候患有心血管病（心绞痛，冠状动脉血运重建，慢性心力衰竭，心肌梗塞
                        并且发病年龄男＜55岁，女＜65岁
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">既往史：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left">
                      <ul>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">无</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">高血压</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">糖尿病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">高血脂症</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">脑卒中</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">缺血中脑卒中（脑梗死）</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">脑出血（脑溢血）</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">短暂性脑缺血发作（小中风）</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">急性肾炎</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">慢性肾炎</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">肾功能衰竭</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">糖尿病肾病</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">冠心病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">心肌梗死</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">慢性心力衰竭</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">心绞痛</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">冠状动脉重建史（心脏支架或搭桥手术）</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">糖尿病眼病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">高血压眼病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">视网膜出血或渗出</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">视网膜视乳头水肿</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">肝炎</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">脂肪肝</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">胆囊疾病</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">颈椎病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">肩周病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">腰椎间盘突出</el-checkbox>
                        </li>
                        <li class="padding-20">
                          <el-checkbox v-model="detailData.message.gender">恶性肿瘤</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">甲状腺疾病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">结核病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">慢性阻塞性肺疾病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">糖尿病足</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">职业病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">外周血管疾病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">重性精神疾病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">结其他法定传染病病</el-checkbox>
                          <el-checkbox v-model="detailData.message.gender">其他</el-checkbox>
                        </li>
                      </ul>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">家族史：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-tabs v-model="secondActiveName" @tab-click="handleClick">
                        <el-tab-pane label="父亲" name="first">
                          <ul>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">无</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">高血压</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">糖尿病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">冠心病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">慢病阻塞性疾病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">恶性肿瘤</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">脑卒中</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">重性精神疾病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">结核病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">肝炎</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">先天畸形</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">其他</el-checkbox>
                            </li>
                          </ul>
                        </el-tab-pane>
                        <el-tab-pane label="母亲" name="second">
                          <ul>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">无</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">高血压</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">糖尿病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">冠心病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">慢病阻塞性疾病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">恶性肿瘤</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">脑卒中</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">重性精神疾病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">结核病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">肝炎</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">先天畸形</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">其他</el-checkbox>
                            </li>
                          </ul>
                        </el-tab-pane>
                        <el-tab-pane label="兄弟姐妹" name="third">
                          <ul>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">无</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">高血压</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">糖尿病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">冠心病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">慢病阻塞性疾病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">恶性肿瘤</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">脑卒中</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">重性精神疾病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">结核病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">肝炎</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">先天畸形</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">其他</el-checkbox>
                            </li>
                          </ul>
                        </el-tab-pane>
                        <el-tab-pane label="子女" name="fourth">
                          <ul>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">无</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">高血压</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">糖尿病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">冠心病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">慢病阻塞性疾病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">恶性肿瘤</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">脑卒中</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">重性精神疾病</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">结核病</el-checkbox>
                            </li>
                            <li>
                              <el-checkbox v-model="detailData.message.gender">肝炎</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">先天畸形</el-checkbox>
                              <el-checkbox v-model="detailData.message.gender">其他</el-checkbox>
                            </li>
                          </ul>
                        </el-tab-pane>
                      </el-tabs>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="饮食运动" name="third">
          <div class="detail-content">
            <ul>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">锻炼频率：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">每天</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">每周一次以上</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">偶尔</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">不锻炼</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">每次锻炼时间：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">锻炼强度：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <div>
                        <el-radio v-model="detailData.message.gender" label="1">小强度</el-radio>
                        <span>（运动中呼吸频率和呼吸深度变化不大，运动中可以正常歌唱）</span>
                      </div>
                      <div>
                        <el-radio v-model="detailData.message.gender" label="2">中强度</el-radio>
                        <span>（运动中呼吸深度和呼吸频率增加，但可以表述完整的句子，与正常人交流）</span>
                      </div>
                      <div>
                        <el-radio v-model="detailData.message.gender" label="3">大强度</el-radio>
                        <span>（运动中呼吸困难，但思维清楚，由于呼吸急促，运动中无法与人交谈）</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">体力劳动强度水平：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <div>
                        <el-radio v-model="detailData.message.gender" label="1">卧床休息</el-radio>
                        <span>（需要卧床休息的病患或者孕妇）</span>
                      </div>
                      <div>
                        <el-radio v-model="detailData.message.gender" label="2">轻体力劳动</el-radio>
                        <span>（办公室职员、教师、售货员、简单家务，或与其相当的活动量）</span>
                      </div>
                      <div>
                        <el-radio v-model="detailData.message.gender" label="3">中体力劳动</el-radio>
                        <span>（学生、司机、外科医生、体育教师、一般农活，或与其相当的活动量）</span>
                      </div>
                      <div>
                        <el-radio v-model="detailData.message.gender" label="4">重体力劳动</el-radio>
                        <span>（重农活、建筑工、搬运工、舞蹈者、运动员，或与其相当的活动量）</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">荤素偏好：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">荤素均衡</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">荤食为主</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">素食为主</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">口味偏好（多选）：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-checkbox v-model="detailData.message.gender">嗜盐</el-checkbox>
                      <el-checkbox v-model="detailData.message.gender">嗜油</el-checkbox>
                      <el-checkbox v-model="detailData.message.gender">嗜糖</el-checkbox>
                      <el-checkbox v-model="detailData.message.gender">无特殊偏好</el-checkbox>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">早餐习惯：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">有中餐习惯</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">无早餐习惯</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">晚餐习惯：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">有夜宵习惯</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">无夜宵习惯</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="生活习惯" name="four">
          <div class="detail-content">
            <ul>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">吸烟情况：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">从不</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">偶尔</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">经常</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">已戒烟</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">日吸烟量：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                      <span>（支/日）</span>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">二手烟情况：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">二手烟</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">无二手烟</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">饮酒情况：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">从不</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">偶尔</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">经常</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">已戒烟</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">日饮酒量：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                      <span>（两/日）</span>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">睡眠质量：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">很差</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">差</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">一般</el-radio>
                      <el-radio v-model="detailData.message.gender" label="4">良好</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">心理压力：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-radio v-model="detailData.message.gender" label="1">大</el-radio>
                      <el-radio v-model="detailData.message.gender" label="2">一般</el-radio>
                      <el-radio v-model="detailData.message.gender" label="3">小</el-radio>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">聚会情况：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                      <span>（近1个月与亲友见面/聚会的次数）</span>
                    </div>
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="8">
                    <div class="item-common item-right">社交情况：</div>
                  </el-col>
                  <el-col :span="16">
                    <div class="item-common item-left padding-20">
                      <el-input
                        size="mini"
                        v-model="detailData.message.name"
                        class="item-input-common"
                      />
                      <span>（近1个月参加公共社交活动的次数）</span>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'healthRecordDetail',

  computed: {},
  data() {
    return {
      activeName: 'third',
      secondActiveName: 'first',
      pageLoading: false,
      detailData: {
        message: {
          name: '田小龙',
          gender: '1'
        }
      }
    }
  },
  methods: {
    getOrderDetail: function() {
      this.pageLoading = true
      var vm = this
      let postData = {
        id: this.willId
      }
      this.$$http('getConOrderDetail', postData).then(results => {
        this.pageLoading = false
        if (results.data && results.data.code === 0 && results.data.data) {
        } else {
          vm.$message({
            message: results.data.msg,
            type: 'error'
          })
        }
      })
    },
    clicktabs() {}
  },

  created: function() {
    // this.getOrderDetail();
  }
}
</script>
<style scoped lang="less">
.detail-content {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #e4e7ed;
  border-top: 0 none;
  ul {
    list-style: none;
  }
  li {
    border-bottom: 1px solid #e4e7ed;
    line-height: 50px;
  }
  .padding-20 {
    padding: 0 20px;
  }
  > ul {
    border: 1px solid #e4e7ed;
    > li {
      border-bottom: 1px solid #e4e7ed;
      line-height: 50px;
      .item-right {
        font-weight: bold;
        padding: 0 20px;
      }
      .item-left {
        border-left: 1px solid #e4e7ed;
      }
      .item-input-common {
        width: 400px;
      }
      .item-common {
        .multiple-rows {
          line-height: 40px;
        }
        .remarks {
          line-height: 24px;
          color: #aaa;
          font-size: 14px;
          padding-bottom: 10px;
        }
      }
    }
  }
}
</style>

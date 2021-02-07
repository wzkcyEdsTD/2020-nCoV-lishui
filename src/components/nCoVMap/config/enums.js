export const xmMenu = [{
  id: 'inside',
  label: '境内人员管控',
  children: [{
      id: 'inside-qz',
      label: '确诊病例',
      unit: '例',
      table: {
        tableName: "SzlsDwSjjhWjwQzblxx",
        fields: [
          "xm@姓名",
          "sfzh@身份证号",
          "fxsj@发现时间",
          "zlqk@治疗情况",
          "ysbjcry@疑似被接触人员",
          "tjwz@途径位置",
          "lxsj@联系手机",
          "tjsj@统计时间",
          "xzyy@现住医院",
          "jcryxxjcs@接触人员信息（接触史）"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-care',
      label: '密切接触者',
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhWjwMqjczxx",
        fields: [
          "xm@姓名",
          "sfzh@身份证号",
          "fxsj@发现时间",
          "hsjcjg@核酸检测结果",
          "ysbjcry@疑似被接触人员",
          "lxfs@联系方式",
          "tjwz@途径位置",
          "zrjd@责任街道",
          "zrsq@责任社区"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-fr',
      label: '无症状感染者',
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhWjwWzzgrzxx",
        fields: [
          "xm@姓名",
          "sfzhm@身份证号",
          "jcryxx@接触人员信息",
          "jqtjlx@近期途径路线",
          "jqjcry@近期接触人员",
          "lxsj@联系手机",
          "fxsj@发现时间",
          "xzyy@现住医院",
          "jcryxxjcs@接触人员信息（接触史）"
        ],
        primaryKey: "tongid"
      }
    },
    // { id: 'inside-jx', label: '疑似病例', unit: '例' },
    {
      id: 'theme_data',
      label: '发热门诊患者',
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhWjwFrmzhzxx",
        fields: [
          "xm@姓名",
          "sfzhm@身份证号",
          "jzsj@就诊时间",
          "jzyy@就诊医院",
          "yytyshxydm@医院统一社会信用代码",
          "lxsj@联系手机",
          "zdmc@诊断名称",
          "jtzz@家庭住址",
          "zrjd@责任街道",
          "zrsq@责任社区"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-hs-point',
      label: '急性呼吸道感染者',
      unit: '人'
    },
    {
      id: 'inside-back',
      label: '三省六市拟入丽人员',
      amount: 7859,
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhSfxptJkmFkxtNlzsslsry",
        fields: [
          "xm@姓名",
          "sfzh@身份证号",
          "sjh@手机号码",
          "mffd@码发放地",
          "scffsj@首次申请时间",
          "sfmh@是否民航",
          "mhgjsj@民航轨迹时间",
          "mhxxsm@民航信息说明",
          "sftl@是否铁路",
          "tlgjsj@铁路轨迹时间",
          "tlxxsm@铁路信息说明",
          "lyss@来源省市"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@3',
      label: '卡口信息',
      amount: 1,
      unit: '个',
      table: {
        tableName: "SzlsDwSjjhGtbLsgtzkkjryxx",
        fields: [
          "qkmc@名称",
          "qkdz@地址",
          "fzdw@负责单位",
          "qkfzr@卡口负责人",
          "fzrsfzhm@负责人身份证号",
          "qkfzrlxsjhm@卡口负责人联系手机号码"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-ym-data',
      label: '卡口检查数据',
      unit: '条',
      table: {
        tableName: "SzlsDwSjjhGajKkjcsjxx",
        fields: [
          "kkmc@卡口名称",
          "bjcrxm@被检查人姓名",
          "bjcrsfzh@被检查人身份证号",
          "bjcrclxx@被检查人车辆信息",
          "bjcrlxfs@被检查人联系方式",
          "cfd@出发地",
          "mdd@目的地",
          "jcsj@检查时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@2',
      label: '中大型商超',
      amount: 56,
      unit: '座',
      table: {
        tableName: "SzlsDwSjjhSwjLsszdxscjbqkxx",
        fields: [
          "scmc@名称",
          "scdz@地址",
          "fzr@负责人",
          "fzrlxfs@负责人联系方式",
          "kfsj@开放时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@0',
      label: '农贸市场',
      amount: 58,
      unit: '座',
      table: {
        tableName: "SzlsDwSjjhScjgjNmscxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式",
          "kfsj@开放时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-gl-jj',
      label: '宗教活动场所',
      amount: 636,
      unit: '所',
      table: {
        tableName: "SzlsDwSjjhSwtzbZjhdcsxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "fzr@负责人",
          "fzrsjh@负责人联系方式"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@8',
      label: '公共文化场所',
      amount: 42,
      unit: '所',
      table: {
        tableName: "SzlsDwSjjhWgltjGgwhcsxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "fzr@负责人",
          "fzrlxfs@负责人联系方式",
          "ssqh@所属区划",
          "kfsj@开放时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-ll-gn',
      label: '福利院和养老院',
      amount: 97,
      unit: '所',
      table: {
        tableName: "SzlsDwSjjhMzjFlyhylyxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "szqx@所在区县",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-ll-ry',
      label: '福利院和养老院重点人群',
      amount: 300,
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhMzjFlyhylygzryxx",
        fields: [
          "xm@姓名",
          "sfzh@身份证号",
          "xb@性别",
          "zz@住址",
          "lxfs@联系方式",
          "stzk@身体状况",
          "sffrhhxdgrzz@是否发热或呼吸道感染症状",
          "flyhylymc@福利院和养老院名称",
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@1',
      label: '火车站',
      amount: 1,
      unit: '座',
      table: {
        tableName: "SzlsDwSjjhGtbJhcwdlszxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式",
          "kfsj@开放时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-ll-gn3',
      label: '丽水高铁站疫情防控移交人员',
      amount: 53,
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhGtbGtzyqfkyjryxx",
        fields: [
          "rq@日期",
          "cc@车次",
          "dz@到站",
          "cfd@出发地",
          "xm@姓名",
          "zjhh@证件号码",
          "lxdh@联系电话",
          "jkm@健康码",
          "sfwgwllry@是否为国外来丽人员",
          "czjg@处置结果"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@10',
      label: '汽车站',
      amount: 2,
      unit: '座',
      table: {
        tableName: "SzlsDwSjjhLqjtQczxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式",
          "kfsj@开放时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@4',
      label: '学校',
      amount: 1137,
      unit: '所',
      table: {
        tableName: "SzlsDwSjjhJyjXxxx",
        fields: [
          "xxmc@名称",
          "xxdz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-ll-gn1',
      label: '学生健康状况打卡信息',
      amount: 32139,
      unit: '条',
      table: {
        tableName: "SzlsDwSjjhJyjXsjkqkdkxx",
        fields: [
          "xxmc@学校名称",
          "xxdz@学校地址",
          "bjmc@班级名称",
          "bjrs@班级人数",
          "ycrs@异常人数",
          "rq@日期",
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'inside-ll-gn2',
      label: '发热、咳嗽、腹泻学生信息',
      unit: '人',
    },
  ]
}, {
  id: 'outside',
  label: '入境人员管控',
  children: [{
      id: 'outside-work',
      label: '入境物品从业人员',
      amount: 700,
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhDsjjRjwpcyryxx",
        fields: [
          "xm@姓名",
          "sfzh@身份证号",
          "lxsjh@联系方式",
          "sqs@设区市",
          "xsq@县（市、区）",
          "xz@乡镇（街道）",
          "jtdz@具体地址",
          "plqk@暴露情况",
          "sfxjry@是否新进人员",
          "ymjzqk@疫苗接种情况",
          "jzsj@接种时间",
          "szdw@所在单位",
          "dwdz@单位地址",
          "dwfzr@单位负责人",
          "fzrsjh@负责人联系方式"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'outside-back',
      label: '浙江省侨胞回国健康与申报人员信息',
      amount: 530000,
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhSfxptRjxxNewFkxtReturnee",
        fields: [
          "name@姓名",
          "id_card_type@证件类型",
          "id_card_number@证件号码",
          "city@设市区",
          "county@区县",
          "town@街道",
          "addr_detail@中国境内住址",
          "health_status@身体状况",
          "from_country@出发国家",
          "via_country@途径国家",
          "arrive_zj_date@拟到浙时间",
          "linkman_name@国内联系人姓名",
          "linkman_mobile@国内联系人手机",
          "linkman_addr@国内联系人家庭住址",
          "traffic_type@交通方式",
          "traffic_number@交通班次",
          "traffic_type_zj@国内返浙交通方式",
          "traffic_number_zj@国内返浙交通班次"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'outside-back-7d',
      label: '原始未来7日入境人员信息',
      amount: 2611141,
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhSfxptRjxxRujingrenyuan7rOriginal",
        fields: [
          "zwxm@姓名",
          "xb@性别",
          "gj@国籍/地区",
          "zjlb@证件类别",
          "zjhm@证件号码",
          "hbh@航班号",
          "hbrq@航班日期",
          "jyjg@校验结果",
          "crbs@出入标识",
          "qfjc@起飞机场",
          "qfjcgj@起飞机场国家",
          "yjqfsj@预计起飞时间",
          "ddjc@到达机场",
          "yjddsj@预计到达时间",
          "cw@舱位",
          "lkdph@旅客订票号",
          "hkgs@航空公司",
          "hbzt@航班状态",
          "sfzj@是否值机",
          "sfdj@是否登机",
          "sfyq@风险等级",
          "sfzh@身份证号"
        ],
        primaryKey: "tongid"
      }
    },
  ]
}, {
  id: 'goods',
  label: '物品风险防控',
  children: [{
      id: 'goods-check',
      label: '冷链检查数据',
      unit: '条'
    },
    {
      id: 'goods-pharmacy',
      label: '药店',
      unit: '间'
    },
    {
      id: 'goods-pharmacy-purchase',
      label: '药店购药数据',
      unit: '条'
    },
    {
      id: 'goods-insurance-purchase',
      label: '医保购药数据',
      unit: '条',
      table: {
        tableName: "SzlsDwSjjhYlbzjYbgmtszkypsjxx",
        fields: [
          "ywmc@药物名称",
          "gysj@购药时间",
          "gyrymc@购药人员名称",
          "sfzh@身份证号@*",
          "lxfs@联系方式",
          "zz@症状",
          "ydmc@药店名称"
        ]
      }
    },
  ]
}, {
  id: 'ability',
  label: '防控能力提升',
  children: [{
      id: 'ability-xx-info',
      label: '隔离点',
      unit: '个',
      table: {
        tableName: "SzlsDwSjjhWjwGldgzryxx",
        fields: [
          "gldmc@隔离点名称",
          "dz@地址",
          "glfjsl@隔离房间数量",
          "sysl@剩余数量",
          "fzr@负责人",
          "fzrsfzh@负责人身份证号",
          "fzrlxsj@负责人联系手机",
          "xm@姓名",
          "sfzh@身份证号",
          "gw@岗位",
          "lxsj@联系手机",
          "jkqk@健康情况"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'ability-xx-health',
      label: '集中隔离人员信息',
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhWjwJzglryxx",
        fields: [
          "xm@姓名",
          "sfzhm@身份证号码",
          "lxsj@联系手机",
          "gldmc@隔离点名称",
          "glfjh@隔离房间号",
          "ksglsj@开始隔离时间",
          "jsglsj@结束隔离时间",
          "sfhsjc@是否核酸检测",
          "hsjcsj@核酸检测时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'ability-fy-ill',
      label: '居家隔离人员数据',
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhWjwJjglrysjxx",
        fields: [
          "xm@姓名",
          "sfzhm@身份证号码",
          "lxsj@联系手机",
          "gldz@隔离地址",
          "hjdz@户籍地址",
          "zrjd@责任街道",
          "zrsq@责任社区",
          "hsjcjg@核酸检测结果",
          "ksglsj@开始隔离时间",
          "jsglsj@结束隔离时间",
          "sfhsjc@是否核酸检测",
          "hsjcsj@核酸检测时间"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'ability-fy-subway',
      label: '负压救护车',
      amount: 28,
      unit: '辆',
      table: {
        tableName: "SzlsDwSjjhWjwFyjhcxx",
        fields: [
          "cphm@车牌号码",
          "ssyljg@所属医疗机构",
          "gpsxx@GPS信息",
          "ssxq@所属县区",
          "cllx@车辆类型",
          "clxh@车辆型号",
          "sprq@上牌日期"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@11',
      label: '新冠检测专用CT信息',
      amount: 34,
      unit: '条',
      table: {
        tableName: "SzlsDwSjhWjwXgjczyctxx",
        fields: [
          "bh@编号",
          "xh@型号",
          "ssyljg@所属医疗机构"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@7',
      label: '新冠定点医院信息',
      amount: 10,
      unit: '座',
      table: {
        tableName: "SzlsDwSjjhWjwXgddyyxx",
        fields: [
          "yymc@医院名称",
          "yydz@医院地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系手机"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@6',
      label: '发热门诊信息',
      amount: 17,
      unit: '条',
      table: {
        tableName: "SzlsDwSjjhWjwFrmzxx",
        fields: [
          "ssyljgmc@所属医疗机构名称",
          "dz@地址",
          "lxdh@联系电话",
          "fzr@负责人"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@12',
      label: '方舱',
      amount: 1,
      unit: '个',
      table: {
        tableName: "SzlsDwSjjhWjwFcxx",
        fields: [
          "fcmc@方仓名称",
          "fcdz@方仓地址",
          "gljg@管理机构",
          "cws@床位数",
          "cwsys@床位剩余数",
          "fzr@负责人",
          "sfzhm@身份证号码",
          "lxdh@联系电话"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@9',
      label: '核酸检测点',
      amount: 27,
      unit: '个',
      table: {
        tableName: "SzlsDwSjjhWjwHsjcdxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系手机"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'ability-wz',
      label: '核酸检测信息',
      amount: 132938,
      unit: '条',
      table: {
        tableName: "SzlsDwSjjhSwjwHsjcxx",
        fields: [
          "bjcrxm@被检测人员姓名",
          "sfzh@身份证号码",
          "bjcrylxdh@被检测人员联系手机",
          "jcsj@检测时间",
          "jcjg@检测机构",
          "jcjgtyshxydm@检测机构统一社会信用代码",
          "jcfs@检测方式",
          "jcdd@检测地点",
          "jcjig@检测结果",
          "jcryxm@检测人员姓名"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'ability-wz-resource',
      label: '新冠疫苗接种地点',
      unit: '个',
      table: {
        tableName: "SzlsDwSjjhWjwJgymjzddxx",
        fields: [
          "mc@名称",
          "dz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系手机"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'ability-fc',
      label: '新冠疫苗接种数据',
      unit: '条',
      table: {
        tableName: "SzlsDwSjjhWjwXgymjzsjxx",
        fields: [
          "bjzyxm@被接种员姓名",
          "sfzhm@身份证号码",
          "lxsj@联系手机",
          "jzsj@接种时间",
          "jzjg@接种结构",
          "jzdd@接种地点",
          "ymmc@疫苗名称",
          "jzdw@接种单位",
          "jzdwtyshxydm@接种单位统一社会信用代码"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'theme_data@5',
      label: '医疗物资仓库',
      amount: 1,
      unit: '个',
      table: {
        tableName: "SzlsDwSjjhWjwYlwzckxx",
        fields: [
          "ckmc@仓库名称",
          "ckdz@仓库地址",
          "glbm@管理部门",
          "fzrxm@负责人姓名",
          "fzrlxsj@负责人联系手机"
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'ability-fr-mz',
      label: '医疗物资库存',
      amount: 5,
      unit: '个',
      table: {
        tableName: "SzlaDwSjjhWjwYlwzkxx",
        fields: [
          "wzmc@物资名称",
          "wzglyxm@物资管理员姓名",
          "wzglylxfs@物资管理员联系方式",
          "glbm@管理部门",
          "ckdz@仓库地址",
          "tjsj@统计时间"
        ],
        primaryKey: "tongid"
      }
    },
  ]
}]
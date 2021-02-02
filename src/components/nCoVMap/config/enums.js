export const xmMenu = [{
  id: 'inside', label: '境内人员管控',
  children: [
    { id: 'inside-qz', label: '确诊病例', unit: '例' },
    { id: 'inside-care', label: '密切接触者', unit: '人' },
    { id: 'inside-fr', label: '无症状感染者', unit: '人' },
    // { id: 'inside-jx', label: '疑似病例', unit: '例' },
    { id: 'theme_data@6', label: '发热门诊患者', amount: 17, unit: '人' },
    { id: 'inside-hs-point', label: '急性呼吸道感染者', unit: '人' },
    { id: 'inside-back', label: '三省六市拟入丽人员', unit: '人' },
    {
      id: 'theme_data@3', label: '卡口信息', amount: 1, unit: '个',
      table: {
        tableName: "SzlsDwSjjhGtbLsgtzkkjryxx",
        fields: [
          "qkmc@名称@*",
          "qkdz@地址",
          "fzdw@负责单位",
          "qkfzr@卡口负责人",
          "fzrsfzhm@负责人身份证号",
          "qkfzrlxsjhm@卡口负责人联系手机号码"
        ]
      }
    },
    { id: 'inside-ym-data', label: '卡口检查数据', unit: '条' },
    {
      id: 'theme_data@2', label: '中大型商超', amount: 56, unit: '座',
      table: {
        tableName: "SzlsDwSjjhSwjLsszdxscjbqkxx",
        fields: [
          "scmc@名称@*",
          "scdz@地址",
          "fzr@负责人",
          "fzrlxfs@负责人联系方式",
          "kfsj@开放时间"
        ]
      }
    },
    {
      id: 'theme_data@0', label: '农贸市场', amount: 58, unit: '座',
      table: {
        tableName: "SzlsDwSjjhScjgjNmscxx",
        fields: [
          "mc@名称@*",
          "dz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式",
          "kfsj@开放时间"
        ]
      }
    },
    {
      id: 'inside-gl-jj', label: '宗教活动场所', amount: 636, unit: '所',
      table: {
        tableName: "SzlsDwSjjhSwtzbZjhdcsxx",
        fields: [
          "mc@名称@*",
          "dz@地址",
          "fzr@负责人",
          "fzrsjh@负责人联系方式"
        ]
      }
    },
    { id: 'theme_data@8', label: '公共文化场所', amount: 42, unit: '所' },
    {
      id: 'inside-ll-gn', label: '福利院和养老院', amount: 97, unit: '所',
      table: {
        tableName: "SzlsDwSjjhMzjFlyhylyxx",
        fields: [
          "mc@名称@*",
          "dz@地址",
          "szqx@所在区县",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式"
        ]
      }
    },
    {
      id: 'inside-ll-ry', label: '福利院和养老院重点人群', amount: 300, unit: '人',
      table: {
        tableName: "SzlsDwSjjhMzjFlyhylygzryxx",
        fields: [
          "xm@姓名",
          "sfzh@身份证号@*",
          "xb@性别",
          "zz@住址",
          "lxfs@联系方式",
          "stzk@身体状况",
          "sffrhhxdgrzz@是否发热或呼吸道感染症状",
          "flyhylymc@福利院和养老院名称",
        ]
      }
    },
    {
      id: 'theme_data@1', label: '火车站', amount: 1, unit: '座',
      table: {
        tableName: "SzlsDwSjjhGtbJhcwdlszxx",
        fields: [
          "mc@名称@*",
          "dz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式",
          "kfsj@开放时间"
        ]
      }
    },
    { id: 'inside-bus', label: '汽车站', unit: '座' },
    {
      id: 'theme_data@4', label: '学校', amount: 1137, unit: '所',
      table: {
        tableName: "SzlsDwSjjhJyjXxxx",
        fields: [
          "xxmc@名称@*",
          "xxdz@地址",
          "fzr@负责人",
          "fzrlxsj@负责人联系方式"
        ]
      }
    },
    { id: 'inside-ll-gn1', label: '学生健康状况打卡信息', unit: '人', },
    { id: 'inside-ll-gn2', label: '发热、咳嗽、腹泻学生信息', unit: '人', },
  ]
}, {
  id: 'outside', label: '入境人员管控',
  children: [
    {
      id: 'outside-work', label: '入境物品从业人员', amount: 700, unit: '人',
      table: {
        tableName: "SzlsDwSjjhDsjjRjwpcyryxx",
        fields: [
          "xm@姓名",
          "sfzh@身份证号@*",
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
        ]
      }
    },
    { id: 'outside-back', label: '浙江省侨胞回国健康与申报人员信息', unit: '人', },
    { id: 'outside-back-7d', label: '原始未来7日入境人员信息', unit: '人', },
  ]
}, {
  id: 'goods', label: '物品风险防控',
  children: [
    { id: 'goods-check', label: '冷链检查数据', unit: '条' },
    { id: 'goods-pharmacy', label: '药店', unit: '间' },
    { id: 'goods-pharmacy-purchase', label: '药店购药数据', unit: '条' },
    {
      id: 'goods-insurance-purchase', label: '医保购药数据', amount: 123010, unit: '条',
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
  id: 'ability', label: '防控能力提升',
  children: [
    { id: 'ability-xx-info', label: '隔离点', unit: '个' },
    { id: 'ability-xx-health', label: '集中隔离人员信息', unit: '人' },
    { id: 'ability-fy-ill', label: '居家隔离人员数据', unit: '人' },
    { id: 'ability-fy-subway', label: '负压救护车', unit: '辆' },
    { id: 'ability-fy-bus', label: '新冠检测专用CT信息', unit: '条' },
    { id: 'theme_data@7', label: '新冠定点医院信息', amount: 10, unit: '座' },
    { id: 'ability-fy-nm', label: '发热门诊信息', unit: '人' },
    { id: 'ability-fy-zj', label: '方舱', unit: '个' },
    { id: 'theme_data@9', label: '核酸检测点', amount: 27, unit: '个' },
    { id: 'ability-wz', label: '核酸检测信息', unit: '条' },
    { id: 'ability-wz-resource', label: '新冠疫苗接种地点', unit: '个' },
    { id: 'ability-fc', label: '新冠疫苗接种数据', unit: '条' },
    { id: 'theme_data@5', label: '医疗物资仓库', amount: 1, unit: '个' },
    { id: 'ability-fr-mz', label: '医疗物资库存', unit: '个' },
  ]
}]
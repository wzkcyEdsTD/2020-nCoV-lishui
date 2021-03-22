export const xmMenu = [{
  id: 'inside',
  label: '境内人员管控',
  children: [
    // { id: 'inside-jx', label: '疑似病例', unit: '例' },
    {
      id: 'inside-visitor',
      label: '访客登记表',
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhZdryApc",
        fields: [
          "scenecode@场景码",
          "scenename@场景名",
          "userid@用户ID",
          "username@姓名",
          "mobile@手机号",
          "cardno@身份证号码",
          "interviewee@受访人",
          "reasonsforvisit@来访原因",
          "areaname@县市区",
          "streetname@街道乡镇",
          "villagename@社区村",
          "source@来源",
          "posttype@提交类型",
          "proxyuser_username@代理人姓名",
          "proxyuser_mobile@代理人手机号",
          "proxyuser_cardno@代理人身份证号码"
        ],
        primaryKey: "accesscontrolid"
      }
    },
    {
      id: 'inside-returnHome',
      label: '返乡人员登记表',
      unit: '人',
      // table: {
      //   tableName: "SzlsDwSjjhZdryReturnHomeUsers",
      //   fields: [
      //     "username@姓名",
      //     "cardid@身份证号码",
      //     "gender@性别",
      //     "mobile@手机号码",
      //     "fromprovincename@来源省份",
      //     "fromcityname@来源地市",
      //     "fromareaname@来源县市区",
      //     "fromstreetname@来源街道乡镇",
      //     "fromvillagename@来源社区村",
      //     "toaddressdetail@目的地详细地址",
      //     "toareaname@目的地县市区",
      //     "tostreetname@目的地街道乡镇",
      //     "tovillagename@目的地社区村",
      //     "backhomereason@返乡原因",
      //     "backhomedate@返乡时间",
      //     "trafficway@交通方式",
      //     "flightno@航班，班车，车牌号",
      //     "hasfever@有无发热、咳嗽、恶心、呕吐、腹泻等症状",
      //     "haschecknucleic@有无三日内核酸检测阴性证明",
      //     "isfromdangerarea@来自地区的风险等级",
      //     "usertypes@人员类型",
      //     "usertypetext@其它类型人员，用户自行输入",
      //     "backstatus@人员状态：0 已返（回），1 将返（回）",
      //     "contactlinkmanusername@目的地联系人",
      //     "contactlinkmanmobile@目的地联系电话",
      //     "usedfreechecknucleicstatus@使用免费检测核酸状态，0 未使用，1 已使用",
      //     "usedfreechecknucleicdatetime@使用免费检测核酸时间",
      //     "scanchecknucleicsource@使用免费检测核酸扫码来源，zlb 浙里办，alipay 支付宝，wechat 微信",
      //     "scanchecknucleicsitecode@核酸检测点编码",
      //     "haslivingdangerareaswithin14days@十四天内是否有国内中高风险地区旅居史（是、否）",
      //     "hascases@是否存在以下情况（单选） 1 新冠肺炎确诊治愈（含无症状） 2 密切接触者或次密切接触者（2个月内） 0 不存在以上情况",
      //     "_createon@申报时间",
      //   ],
      //   primaryKey: "id"
      // }
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
      id: 'outside-qz',
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
      id: 'outside-fr',
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
    {
      id: 'outside-care',
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
      id: 'outside-inboundPassengers',
      label: '重点涉丽入境旅客信息',
      amount: 295,
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhDsjjMdlhzrjryxx",
        fields: [
          "djrq@登记日期",
          "xm@姓名",
          "hj@户籍",
          "hzhm@护照号码",
          "sfzhm@身份证号码",
          "lxdh@联系电话",
          "wfgjhdq@往返国家或地区",
          "rjhbh@入境航班号",
          "zzqwd@杭州口岸",
          "djrq@登记日期",
          "rysfzgr@人员身份中国人",
          "rysfwjhr@人员身份外籍华人",
          "rysfwjr@人员身份外籍人",
          "ldhryqx@落地后人员去向",
          "sfzljc@是否滞留机场",
          "sfwzzjc@是否为中转机场",
          "zzhhbh@中转后航班号",
          "zzhhbrq@中转后航班日期",

          "zzhhbsj@中转后航班时间",
          "zzhhbmdd@中转后航班目的地",
          "gljd@隔离酒店",
          "dz@地址",
          "sjly@数据来源",
          "bz@备注",
          "rjsj@入境时间",
        ],
        primaryKey: "tongid"
      }
    },
    {
      id: 'outside-overseasChinese',
      label: '侨胞返浙申报信息',
      unit: '人',
      table: {
        tableName: "SzlsDwSjjhSdsjjQbfzsbxx",
        fields: [
          "sbrlx@申报人类型",
          "sbrxm@申报人姓名",
          "sbrsjh@申报人手机号",
          "xm@姓名",
          "rjrylx@入境人员类型",
          "zjlx@证件类型",
          "zjhm@证件号码",
          "zzjzdsqs@在浙居住地设区市",
          "zzjzdsqsxsq@在浙居住地设区市县（市、区）",
          "zzjzdsqsxzjd@在浙居住地设区市乡镇（街道）",
          "zzjzdxxdz@在浙居住地详细地址",
          "dqszgjdqqjd@当前所在国家/地区（侨居地）",
          "qtgjdq@其他国家/地区",
          "jnsjhm@境内手机号码",
          "jwhgatlxsjhm@境外（含港澳台）联系手机号码",
          "jnlxrxm@境内联系人姓名",
          "jnlxrybrgx@境内联系人与本人关系",
          "jnlxrlxfs@境内联系人联系方式",
          "jnlxrjtzz@境内联系人家庭住址",
          "jwhgatlxrxm@境外（含港澳台）联系人姓名",
          "jwhgatlxrlxfs@境外（含港澳台）联系人联系方式",
          "jwhgatlxrjtzz@境外（含港澳台）联系人家庭住址",
          "wlsgynywfzjh@未来3个月内有无返浙计划",
          "mddsqs@目的地设区市",
          "mddxsq@目的地县（市、区）",
          "mddxzjd@目的地乡镇（街道）",
          "mddxxdz@目的地详细地址",
          "stzk@身体状况",
          "cfgjdq@出发国家/地区",
          "qtgjjdq@其他国家及地区",
          "tjgjdqzhtw@途经国家/地区",
          "nrjrq@拟入境日期",
          "rjka@入境口岸",
          "rjjtfs@入境交通方式",
          "rjjtgjbc@入境交通工具班次",
          "jnfzjtfs@境内返浙交通方式",
          "jnfzjtgjbc@境内返浙交通工具班次",
          "nrgksj@纳入管控时间",
          "jsgksj@结束管控时间",
          "sjrjsj@实际入境时间",
          "sjdzjsj@实际到浙江时间",
        ],
        primaryKey: "tongid"
      }
    },
  ]
}, {
  id: 'goods',
  label: '物品风险防控',
  children: [
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
  children: [
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
      id: 'ability-zydj',
      label: '住院登记信息',
      unit: '条',
      table: {
        tableName: "SzlsDwSjjhSwjwZydjxx",
        fields: [
          "xm@姓名",
          "hzzsy@患者主索引",
          "yydm@医院代码（业务机构代码）",
          "yymc@医院名称",
          "xbdm@性别代码",
          "lxdh@联系电话",
          "zylsh@住院流水号",
        ],
        primaryKey: "tongid"
      }
    },
  ]
}]
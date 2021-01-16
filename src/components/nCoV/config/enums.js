const {
    macroscopic
} = window.nCov_luchengData;
const {
    lc,
    lc_yt
} = macroscopic;
export const leftOptions = [{
    label: "疫情分布",
    tabIndex: 0,
    check: false,
    show: true,
    children: [{
        name: `确诊病例 (${lc.qzbl}例)`,
        ytd: "ContactHistory like '%银泰%'",
        id: "qzbl",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        sublayers: "0",
        icon: "确诊病例",
        check: true
    }, {
        name: `疑似病例 (${lc.zzbl}例)`,
        ytd: "ContactHistory like '%银泰%'",
        id: "zzbl",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        sublayers: "1",
        icon: "疑似病例",
        check: false
    }, {
        name: "-1",
        id: "ytyg",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        sublayers: "11",
        icon: "银泰员工",
        check: false
    },
    {
        name: `集中医学观察点 (${lc.gld}个)`,
        id: "gld",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "2",
        icon: "治愈",
        check: false
    }, {
        name: `集中医学观察点人员名单 (${lc.gld_list}个)`,
        id: "gld_list",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "5",
        icon: "集聚区",
        check: false
    }, {
        name: `红码隔离点 (${lc.hmgld}个)`,
        id: "hmgld",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "9",
        icon: "红码",
        check: false
    }, {
        name: `红码隔离点人员名单 (${lc.hmgld_list}个)`,
        id: "hmgld_list",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "7",
        icon: "医院发热待查",
        check: false
    }, {
        name: `华侨隔离点 (${lc.hqgld}个)`,
        id: "hqgld",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "10",
        icon: "华侨",
        check: false
    }, {
        name: `华侨隔离点人员名单 (${lc.hqgld_list}个)`,
        id: "hqgld_list",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "8",
        icon: "社区发热待查",
        check: false
    }, {
        name: `康复隔离点 (${lc.kfgld}个)`,
        id: "kfgld",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "11",
        icon: "康复隔离点",
        check: false
    }, {
        name: `康复隔离点人员名单 (${lc.kfgld_list}个)`,
        id: "kfgld_list",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "12",
        icon: "康复人员",
        check: false
    }, {
        name: `密切接触者 (${lc.mj}例)`,
        id: "mj",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        sublayers: "5",
        icon: "密接",
        check: false
    }, {
        name: -1,
        // ytd: "IdentityType like '%银泰%'",
        id: "mj",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        sublayers: "6",
        icon: "密接",
        check: false
    }, {
        name: `居家隔离人员 (${lc.jjgl}例)`,
        id: "jjgl",
        ytname: -1,
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        sublayers: "7",
        icon: "死亡",
        check: false
    }, {
        name: `湖北回鹿人员/信令 (${lc.hbhw}例/${lc.hbhw_xl}例)`,
        id: "hbhw",
        ytname: -1,
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        sublayers: "9",
        icon: "湖北回温",
        check: false
    }
    ]
},
{
    label: "网格管理",
    tabIndex: 0,
    check: false,
    show: true,
    children: [{
        name: "五色风险评估",
        id: "chanyePlate",
        sublayers: "0",
        isImg: true,
        // url: "https://172.28.88.252:6443/arcgis/rest/services/weijian/xzjd/MapServer",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/xzjd_ws/MapServer",
        check: true
    }, {
        name: "社区网格",
        id: "wg",
        sublayers: "12",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        check: false
    }, {
        name: "小区、大厦",
        id: "xq",
        sublayers: "14",
        // isImg: true,
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        check: false
    }]
},
{
    label: "卡口值班",
    tabIndex: 0,
    check: false,
    show: true,
    children: [{
        name: `交通卡口 (${macroscopic.highway_type_4}个)`,
        id: "highway_type_4",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "6",
        icon: "高速",
        check: false
    },
    {
        name: `商场超市 (${macroscopic.people_type_8}个)`,
        id: "people_type_8",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/paiban/MapServer",
        sublayers: "3",
        icon: "商场超市",
        check: false
    }, {
        name: `农贸市场 (${macroscopic.people_type_9}个)`,
        id: "people_type_9",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "4",
        icon: "农贸市场",
        icon2: "农贸市场2",
        check: false
    }, {
        name: "小区进出口点",
        id: "xqjck",
        sublayers: "17",
        // icon: "进出口",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/fangkong/MapServer",
        check: false
    }
    ]
},
{
    label: "人员密集场所",
    tabIndex: 0,
    check: false,
    show: true,
    children: [{
        name: `佛道宗教活动场所 (${macroscopic.people_type_1}个)`,
        id: "people_type_1",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "2",
        icon: "宗教",
        check: false
    }, {
        name: `天基宗教活动场所 (${macroscopic.people_type_2}个)`,
        id: "people_type_2",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "3",
        icon: "宗教",
        check: false
    }, {
        name: `伊斯兰教宗教活动场所 (${macroscopic.people_type_13}个)`,
        id: "people_type_13",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "12",
        icon: "宗教",
        check: false
    }, {
        name: `专业市场 (${macroscopic.people_type_3}个)`,
        id: "people_type_3",
        url: "http://172.20.89.59/server/rest/services/lcjjdt/jjts/MapServer",
        sublayers: "3",
        icon: "市场",
        check: false
    }, {
        name: `城市书房 (${macroscopic.people_type_6}个)`,
        id: "people_type_6",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "6",
        icon: "城市书房",
        check: false
    }, {
        name: `健身房 (${macroscopic.people_type_7}个)`,
        id: "people_type_7",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "5",
        icon: "健身房",
        check: false
    },
    {
        name: `民办培训机构 (${macroscopic.people_type_12}个)`,
        id: "people_type_12",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "13",
        icon: "民办培训机构",
        check: false
    },
    {
        name: `博物馆 (${macroscopic.people_type_10}个)`,
        id: "people_type_10",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "7",
        icon: "博物馆",
        check: false
    }, {
        name: `文化场所 (${macroscopic.people_type_11}个)`,
        id: "people_type_11",
        url: "https://172.28.88.252:6443/arcgis/rest/services/lucheng/crowded/MapServer",
        sublayers: "8",
        icon: "文化",
        check: false
    }
    ]
},
{
    label: "医疗资源",
    tabIndex: 0,
    check: false,
    show: true,
    children: [{
        name: `发热门诊 (${macroscopic.clinic_type_1}家)`,
        id: "clinic_type_1",
        url: "https://172.28.88.252:6443/arcgis/rest/services/weijian/resource/MapServer",
        sublayers: "1",
        icon: "发热门诊",
        check: false
    }, {
        name: `定点救治医院 (${macroscopic.clinic_type_2}家)`,
        id: "clinic_type_2",
        url: "https://172.28.88.252:6443/arcgis/rest/services/weijian/resource/MapServer",
        sublayers: "2",
        icon: "定点医院",
        check: false
    }, {
        name: `其他专科医院 (${macroscopic.clinic_type_3}家)`,
        id: "clinic_type_3",
        url: "https://services.wzmap.gov.cn/server/rest/services/TDT/ZhuanTiSJ/MapServer",
        sublayers: "8",
        definitionExpression: "TAG LIKE '%专科医院%'",
        icon: "其他专科医院",
        check: false
    },
    {
        name: `医保药房 (${macroscopic.clinic_type_5}家)`,
        id: "clinic_type_5",
        url: "https://services.wzmap.gov.cn/server/rest/services/TDT/ZhuanTiSJ/MapServer",
        sublayers: "8",
        definitionExpression: "TAG LIKE '%药房/保健品%'",
        icon: "药店",
        check: false
    },
    {
        name: `疾控中心 (${macroscopic.clinic_type_7}家)`,
        id: "clinic_type_7",
        sublayers: "0",
        url: "https://172.28.88.252:6443/arcgis/rest/services/weijian/resource/MapServer",
        icon: "疾控中心",
        check: false
    }
    ]
}
]
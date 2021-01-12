export const tipHash = {
    qzbl: "illHash",
    zzbl: "illHash",
    yydc: "illHash",
    sqdc: "illHash",
    jjgl: "jjglHash",
    gld: "gldHash",
    gld_list: "gldListHash",
    lg: "lgHash",
    mj: "mjHash",
    ytyg: "ytygHash",
    hbhw: "hbhwHash",
    people_type_1: "cultureHash",
    people_type_2: "cultureHash",
    people_type_13: "cultureHash",
    // people_type_2: "marketHash",
    people_type_3: "scHash",
    people_type_6: "sfHash",
    people_type_7: "jsHash",
    people_type_8: "sccsHash",
    people_type_9: "nmscHash",
    people_type_10: "bwgHash",
    people_type_12: "mbpxHash",
    highway_type_1: "subwayHash",
    highway_type_2: "subwayHash",
    highway_type_3: "carHash",
    highway_type_4: "highwayHash",
    clinic_type_1: "hospitalHash",
    clinic_type_2: "hospitalHash",
    clinic_type_3: "hospitalHash",
    clinic_type_4: "hospitalHash",
    clinic_type_5: "hospitalHash",
    clinic_type_6: "hospitalHash",
    clinic_type_7: "hospitalHash",
    xq: "xqHash",
    xqjck: "xqjckHash",
    wg: "wgHash",
    jzgd: "jzgdHash",
    nj_zdqy: "njzdqyHash",
    nj_xm_1: "njxmHash",
    nj_xm_2: "njxmHash",
    glmd: "illHash",
    gjmj: "mjHash",
    wm_gs: "wmgsHash",
    qyfg: "qyfgHash",
    school: "schoolHash",
    zjgd: "zjgdHash",
    nj_qy: "njqyHash",
    hmgld_list: "hmgldListHash",
    hqgld_list: "hmgldListHash",
    kfgld_list: "kfgldListHash",
    hmgld: "hmgldHash",
    hqgld: "hmgldHash",
    kfgld: "hmgldHash"
}

// 隔离点人员名单
const gldListHash = [{
    fieldName: "Country",
    label: "街道"
}, {
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Sex",
    label: "性别"
}, {
    fieldName: "Phone",
    label: "联系电话"
}, {
    fieldName: "Code",
    label: "身份证号"
}, {
    fieldName: "Address",
    label: "家庭住址"
}, {
    fieldName: "IsHBToWZ",
    label: "是否为湖北返温"
}, {
    fieldName: "IsolationPlace",
    label: "隔离点"
}, {
    fieldName: "Room",
    label: "房间号"
}]


// 红码、华侨隔离点人员名单
const hmgldListHash = [{
    fieldName: "Country",
    label: "街镇"
}, {
    fieldName: "GLD",
    label: "隔离点"
}, {
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Sex",
    label: "性别"
}, {
    fieldName: "Phone",
    label: "联系电话"
}, {
    fieldName: "Code",
    label: "身份证号码"
}, {
    fieldName: "HJDZ",
    label: "户籍地址"
}, {
    fieldName: "ZWJZDZ",
    label: "在温居住地址"
}, {
    fieldName: "DRSTZT",
    label: "当日身体状态"
}, {
    fieldName: "DRSTZTBZ",
    label: "当日身体状态备注"
}, {
    fieldName: "RYLX",
    label: "人员类型"
}, {
    fieldName: "LYSS",
    label: "来源省市"
}, {
    fieldName: "LY",
    label: "来源"
}, {
    fieldName: "LYD",
    label: "来源地"
}, {
    fieldName: "QWJZ",
    label: "去往街镇"
}, {
    fieldName: "JZLXRY",
    label: "街镇联系人员"
}, {
    fieldName: "LXHM",
    label: "联系号码"
}, {
    fieldName: "ZJCGLRYSSFGZJD",
    label: "在解除隔离人员时是否告知街镇"
}, {
    fieldName: "SFJE",
    label: "收费金额"
}, {
    fieldName: "FJH",
    label: "房间号"
}, {
    fieldName: "KSGLSJ",
    label: "开始隔离时间"
}, {
    fieldName: "YJJCGLSJ",
    label: "预计解除隔离时间"
}, {
    fieldName: "SJLKGLDSJ",
    label: "实际离开隔离点时间"
}, {
    fieldName: "SFYFJCGL",
    label: "是否依法解除隔离"
}, {
    fieldName: "SFZYSBL",
    label: "是否转疑似病例"
}, {
    fieldName: "SFYQTSYLKGLD",
    label: "是否因其他事由离开隔离点"
}, {
    fieldName: "Note",
    label: "备注"
}]

// 康复隔离点人员名单
const kfgldListHash = [{
    fieldName: "Country",
    label: "街镇"
}, {
    fieldName: "GLD",
    label: "隔离点"
}, {
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Sex",
    label: "性别"
}, {
    fieldName: "Phone",
    label: "联系电话"
}, {
    fieldName: "PhoneCheck",
    label: "联系电话核对"
}, {
    fieldName: "PhoneNote",
    label: "联系电话备注"
}, {
    fieldName: "Code",
    label: "身份证号码"
}, {
    fieldName: "DRSTZT",
    label: "当下日身体状态"
}, {
    fieldName: "DRSTZTBZ",
    label: "当日身体状态备注"
}, {
    fieldName: "Address",
    label: "家庭住址"
}, {
    fieldName: "LY",
    label: "来源"
}, {
    fieldName: "LYD",
    label: "来源地"
}, {
    fieldName: "SFFDDWJMQJCZ",
    label: "是否湖北_重点为武汉及周边_返温人员及其密切接触者"
}, {
    fieldName: "FJH",
    label: "房间号"
}, {
    fieldName: "KSGLSJ",
    label: "开始隔离时间"
}, {
    fieldName: "YJJCGLSJ",
    label: "预计解除隔离时间"
}, {
    fieldName: "SJLKGLDSJ",
    label: "实际离开隔离点时间"
}, {
    fieldName: "SFYFJCGL",
    label: "是否依法解除隔离"
}, {
    fieldName: "SFZYSBL",
    label: "是否转疑似病例"
}, {
    fieldName: "SFYQTSYLKGLD",
    label: "是否因其他事由离开隔离点"
}, {
    fieldName: "Note1",
    label: "备注1"
}, {
    fieldName: "Note2",
    label: "备注2"
}]

// 红码、华侨隔离点
const hmgldHash = [{
    fieldName: "Country",
    label: "街镇"
}, {
    fieldName: "Name",
    label: "集中隔离点名称"
}, {
    fieldName: "Address",
    label: "地点"
}, {
    fieldName: "Linkman",
    label: "联络人"
}, {
    fieldName: "Phone",
    label: "联络电话"
}, {
    fieldName: "Rooms",
    label: "房间数"
}, {
    fieldName: "UseNumber",
    label: "使用人数"
}, {
    fieldName: "RemainRooms",
    label: "剩余可用房间数"
}, {
    fieldName: "Note",
    label: "备注"
}, {
    fieldName: "IsUsing",
    label: "是否启用"
}, {
    fieldName: "TerminateIsolationNumber",
    label: "累计解除隔离人数"
}, {
    fieldName: "TerminateIsolationNumber_add",
    label: "新增解除隔离人数"
}, {
    fieldName: "IsolationNumber_add",
    label: "新增隔离人数"
}, {
    fieldName: "QZSDW",
    label: "区直设单位"
}, {
    fieldName: "DXSHDQLFJ",
    label: "未消杀或待清理房间"
}]

// 银泰员工
const ytygHash = [{
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Address",
    label: "通讯地址"
}, {
    fieldName: "Phone",
    label: "手机号"
}, {
    fieldName: "Country",
    label: "区域"
}];

const bwgHash = [{
    fieldName: "Name",
    label: "名称"
}, {
    fieldName: "Address",
    label: "地址"
}, {
    fieldName: "Type",
    label: "类别"
}, {
    fieldName: "Phone",
    label: "号码"
}, {
    fieldName: "Question",
    label: "问题"
}]

// 网格
const wgHash = [{
    fieldName: "Name",
    label: "名称"
}, {
    fieldName: "数据来源",
    label: "数据来源"
}, {
    fieldName: "jd",
    label: "街镇"
}, {
    fieldName: "jwh",
    label: "居委会、村委会名称"
}, {
    fieldName: "sq",
    label: "社（小）区、自然村名称"
}, {
    fieldName: "wgpzlxdh",
    label: "网格片长（街镇领导）联系电话"
}, {
    fieldName: "wgpzxm",
    label: "网格片长（街镇领导）姓名"
}, {
    fieldName: "wgzdylxdh",
    label: "网格指导员（楼栋长）联系电话"
}, {
    fieldName: "wgzdyxm",
    label: "网格指导员（楼栋长）姓名"
}, {
    fieldName: "wgzlxdh",
    label: "网格长（社区主任）联系电话"
}, {
    fieldName: "wgzxm",
    label: "网格长（社区主任）姓名"
}, {
    fieldName: "问题描述",
    label: "问题描述"
}]
// 居家隔离
const jjglHash = [{
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Sex",
    label: "性别"
}, {
    fieldName: "Phone",
    label: "联系方式"
}, {
    fieldName: "Address",
    label: "家庭住址"
}, {
    fieldName: "Country",
    label: "街道"
}, {
    fieldName: "StartDivideTime",
    label: "开始隔离时间"
}, {
    fieldName: "IsDivide",
    label: "是否接触隔离"
}]

// 湖北回温
const hbhwHash = [{
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Sex",
    label: "性别"
}, {
    fieldName: "Age",
    label: "年龄"
}, {
    fieldName: "Phone",
    label: "联系方式"
}, {
    fieldName: "Address",
    label: "家庭住址"
}, {
    fieldName: "District",
    label: "区县"
}, {
    fieldName: "Country",
    label: "乡镇街道"
}, {
    fieldName: "ChargeManPhone",
    label: "责任人手机号"
}, {
    fieldName: "OtherPhone",
    label: "其他联系电话"
}, {
    fieldName: "ToWZTime",
    label: "到温时间"
}, {
    fieldName: "Type",
    label: "类型"
}, {
    fieldName: "Status",
    label: "状态"
}, {
    fieldName: "StatusIllustration",
    label: "状态说明"
}]

// 隔离点
const gldHash = [{
    fieldName: "Name",
    label: "集中医学观察点名称"
}, {
    fieldName: "Country",
    label: "街道"
}, {
    fieldName: "Address",
    label: "地点"
}, {
    fieldName: "Rooms",
    label: "可用医学观察房间"
}, {
    fieldName: "UseNumber",
    label: "使用人数"
}, {
    fieldName: "Linkman",
    label: "联络人"
}, {
    fieldName: "Phone",
    label: "联络电话"
}, {
    fieldName: "RemainRooms",
    label: "可用房间数"
}, {
    fieldName: "TerminateIsolationNumber",
    label: "其中湖北回鹿人数"
}, {
    fieldName: "TerminateIsolationNumber_add",
    label: "解除隔离人数"
}]

// 留观
const lgHash = [{
    fieldName: "Name",
    label: "集中医学观察点名称"
}, {
    fieldName: "Address",
    label: "地点"
}, {
    fieldName: "Rooms",
    label: "房间数"
}, {
    fieldName: "Using",
    label: "是否启用"
}]
// 密接
const mjHash = [{
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Sex",
    label: "性别"
}, {
    fieldName: "Age",
    label: "年龄"
}, {
    fieldName: "Supervision",
    label: "是否监管"
}, {
    fieldName: "DividePlace",
    label: "隔离地点"
}, {
    fieldName: "StartDivideTime",
    label: "开始隔离时间"
}, {
    fieldName: "Patient",
    label: "病人"
}, {
    fieldName: "IdentityType",
    label: "身份类型"
}, {
    fieldName: "Relation",
    label: "关系"
}, {
    fieldName: "Phone",
    label: "电话"
}, {
    fieldName: "Address_Department",
    label: "现住址_工作单位"
}, {
    fieldName: "Country",
    label: "责任街道"
}, {
    fieldName: "HealthCenter",
    label: "属地所属卫生院"
}, {
    fieldName: "StartobserveTime",
    label: "开始观察日期"
}, {
    fieldName: "IDCard",
    label: "身份证号"
}, {
    fieldName: "JZGL",
    label: "集中隔离"
}, {
    fieldName: "Note",
    label: "备注"
}, {
    fieldName: "SJZHQZ",
    label: "是否转为确诊"
}, {
    fieldName: "SFJCGL",
    label: "是否解除隔离"
}, {
    fieldName: "JCGLSJ",
    label: "解除隔离时间"
}, {
    fieldName: "State",
    label: "状态"
}, {
    fieldName: "LZMD ",
    label: "流转目的"
}, {
    fieldName: "Note",
    label: "备注"
}]
// 专业市场
const scHash = [{
    type: "fields",
    fieldInfos: [{
        fieldName: "NAME",
        label: "名称"
    }]
}]
// 书房
const sfHash = [{
    fieldName: "Name",
    label: "名称"
},
{
    fieldName: "Address",
    label: "地址"
},
{
    fieldName: "Question",
    label: "问题"
}
]
// 健身房
const jsHash = [{
    fieldName: "Address",
    label: "地址"
}, {
    fieldName: "Type",
    label: "类别"
}, {
    fieldName: "Question",
    label: "问题"
}]
// 民办培训机构
const mbpxHash = [{
    fieldName: "Name",
    label: "名称"
}, {
    fieldName: "Address",
    label: "地址"
}]

// 商场超市
const sccsHash = [{
    fieldName: "Name",
    label: "名称"
}, {
    fieldName: "Address",
    label: "具体地址"
}, {
    fieldName: "Country",
    label: "街道"
}, {
    fieldName: "CompanyLinkMan",
    label: "企业联系人"
}, {
    fieldName: "CountryLinkMan",
    label: "属地街道责任人"
}, {
    fieldName: "BusinessLeaderPhone",
    label: "商务带队领导"
}, {
    fieldName: "BusinessWorkPhone",
    label: "商务部门工作专班"
}]

// 农贸市场
const nmscHash = [{
    fieldName: "Name",
    label: "市场名称"
}, {
    fieldName: "Address",
    label: "详细地址"
}, {
    fieldName: "lcwj.DBO.农贸市场.Area",
    label: "面积"
}, {
    fieldName: "ManageNumber",
    label: "经营户数"
}, {
    fieldName: "Building",
    label: "建筑"
}, {
    fieldName: "Department",
    label: "举办单位"
}, {
    fieldName: "LinkMan",
    label: "联系人"
}, {
    fieldName: "LinkManPhone",
    label: "电话"
}, {
    fieldName: "Country",
    label: "街道"
}, {
    fieldName: "lcwj_DBO_农贸市场_Area",
    label: "面积"
}, {
    fieldName: "IsOpening",
    label: "是否开放"
}, {
    fieldName: "OpenTime",
    label: "开放时间"
}]

// 小区出入口
const xqjckHash = [{
    fieldName: "社区名称",
    label: "社区名称"
}, {
    fieldName: "所属街道",
    label: "所属街道"
}, {
    fieldName: "小区名称",
    label: "小区名称"
}, {
    fieldName: "出入口情况",
    label: "出入口情况"
}, {
    fieldName: "问题备注",
    label: "问题备注"
}]

// 小区
const xqHash = [{
    fieldName: "MansionName",
    label: "小区（大厦）名称"
}, {
    fieldName: "Country_1",
    label: "所属街道"
}, {
    fieldName: "Community",
    label: "所属社区"
}, {
    fieldName: "CommunityLink",
    label: "街道社区联系人、电话"
}, {
    fieldName: "HousingAuthorityChargeMan",
    label: "房管中心联系人"
}, {
    fieldName: "HousingAuthorityChargeManPhone",
    label: "房管中心联系电话"
}, {
    fieldName: "MansionChargeMan",
    label: "小区管理处负责人"
}, {
    fieldName: "MansionChargeMan",
    label: "小区管理处负责人"
}, {
    fieldName: "MansionChargeManPhone",
    label: "小区管理处负责人联系方式"
}, {
    fieldName: "PropertyName",
    label: "物业服务企业名称"
}, {
    fieldName: "问题",
    label: "问题"
}]
// 火车
const subwayHash = [{
    fieldName: "Name",
    label: "名称"
}]
//  汽车
const carHash = [{
    fieldName: "name",
    label: "名称"
},
{
    fieldName: "address",
    label: "地点"
},
{
    fieldName: "type",
    label: "类型"
}
]
// 交通卡口
const highwayHash = [{
    fieldName: "Name",
    label: "交通卡口名称"
},
{
    fieldName: "FGLD",
    label: "分管领导"
},
{
    fieldName: "LLY",
    label: "联络员"
}
]

//  市场
const marketHash = [{
    fieldName: "name",
    label: "名称"
},
{
    fieldName: "ssjd",
    label: "街道"
}
]
//  文化
const cultureHash = [{
    fieldName: "NAME",
    label: "名称"
},
{
    fieldName: "ADDRESS",
    label: "地址"
},
{
    fieldName: "Classify",
    label: "教别"
},
{
    fieldName: "ChargeMan",
    label: "负责人"
},
{
    fieldName: "ChargeManPhone",
    label: "联系电话"
}
]
//  医院诊所
const hospitalHash = [{
    fieldName: "NAME",
    label: "名称"
},
{
    fieldName: "ADDRESS",
    label: "地址"
},
{
    fieldName: "TYPE",
    label: "类型"
},
{
    fieldName: "GRADE",
    label: "等级"
}
]
//  病例
const illHash = [{
    fieldName: "Name",
    label: "姓名"
}, {
    fieldName: "Sex",
    label: "性别"
}, {
    fieldName: "Age",
    label: "年龄"
}, {
    fieldName: "Profession",
    label: "职业"
}, {
    fieldName: "Country",
    label: "街道"
}, {
    fieldName: "Address",
    label: "现住址"
}, {
    fieldName: "DiseaseTime",
    label: "发病时间"
}, {
    fieldName: "Hospital",
    label: "现住医院"
}, {
    fieldName: "ContactHistory",
    label: "接触史"
}, {
    fieldName: "InWZTime",
    label: "到温时间"
}, {
    fieldName: "WarehousingTime",
    label: "入库时间"
}]


// 民办培训机构
const jzgdHash = [{
    fieldName: "项目名称",
    label: "项目名称"
}, {
    fieldName: "项目地址",
    label: "项目地址"
}, {
    fieldName: "建设单位",
    label: "建设单位"
}, {
    fieldName: "建设单位联系人",
    label: "建设单位联系人"
}, {
    fieldName: "建设单位联系电话",
    label: "建设单位联系电话"
}, {
    fieldName: "责任单位",
    label: "责任单位"
}, {
    fieldName: "责任单位联系人",
    label: "责任单位联系人"
}, {
    fieldName: "责任单位联系电话",
    label: "责任单位联系电话"
}, {
    fieldName: "问题",
    label: "问题"
}]

// 南郊重点企业
const njzdqyHash = [{
    fieldName: "CompanyName",
    label: "单位名称"
}, {
    fieldName: "Address",
    label: "地址"
}, {
    fieldName: "LinkMan",
    label: "联系人"
}, {
    fieldName: "LinkManPhone",
    label: "手机号码"
}, {
    fieldName: "CompanyCode",
    label: "组织机构代码"
}, {
    fieldName: "Type",
    label: "类型"
}, {
    fieldName: "MajorBusiness",
    label: "主要业务活动"
}, {
    fieldName: "JPCode",
    label: "经营码"
}]



// 南郊在建自建项目
const njxmHash = [{
    fieldName: "ProjectName",
    label: "项目名称"
}, {
    fieldName: "ConstructionCompanyLinkMan",
    label: "施工单位联系人"
}, {
    fieldName: "LinkManPhone",
    label: "联络电话"
}, {
    fieldName: "DepartmentLinkMan",
    label: "科室联络人"
}, {
    fieldName: "WorkTime",
    label: "复工时间"
}, {
    fieldName: "EstimateToWZ",
    label: "预计返温的务工人数"
}, {
    fieldName: "HBNumber",
    label: "湖北籍人数"
}, {
    fieldName: "WHNumber",
    label: "武汉人数"
}, {
    fieldName: "CompanyName",
    label: "企业名称"
}, {
    fieldName: "CompanyType",
    label: "企业类别"
}]


// 五马街道规上企业
const wmgsHash = [{
    fieldName: "Name",
    label: "单位详细名称"
}, {
    fieldName: "Address",
    label: "街(村)、门牌号(注册地址)"
}, {
    fieldName: "ChargeMan",
    label: "法定代表人（单位负责人）"
}]


// 在建工地
const zjgdHash = [{
    fieldName: "ANBH",
    label: "安监编号"
}, {
    fieldName: "ProjectName",
    label: "工程名称"
}, {
    fieldName: "JSDD",
    label: "建设地点"
}, {
    fieldName: "JZMJ",
    label: "建筑面积"
}, {
    fieldName: "GCZJ",
    label: "工程造价"
}, {
    fieldName: "SGDW",
    label: "施工单位"
}, {
    fieldName: "JLDW",
    label: "监理单位"
}, {
    fieldName: "JSDW",
    label: "建设单位"
}, {
    fieldName: "LinkMan",
    label: "负责人"
}, {
    fieldName: "LinkManPhone",
    label: "联系电话"
}, {
    fieldName: "JD",
    label: "街道"
}, {
    fieldName: "JQZFGSJ",
    label: "经劝阻复工时间"
}, {
    fieldName: "YJFGHJSDWRYSL",
    label: "预计复工后建设单位人员数量"
}, {
    fieldName: "YJFGHJSDWHBYGSL",
    label: "预计复工后建设单位湖北籍员工数量已通知暂缓来项目"
}, {
    fieldName: "YJFGSGDWRYSL",
    label: "预计复工后施工单位人员数量"
}, {
    fieldName: "YJFGHSGDWHBYGSL",
    label: "预计复工后施工单位湖北籍员工数量已通知暂缓来项目"
}, {
    fieldName: "YJFGHJLDWRYSL",
    label: "预计复工后监理单位人员数量"
}, {
    fieldName: "YJFGHJLDWHBYGSL",
    label: "预计复工后监理单位湖北籍员工数量已通知暂缓来项目"
}, {
    fieldName: "DTGDRS",
    label: "当天工地人数"
}, {
    fieldName: "DTGDHBHWRS",
    label: "当天工地湖北籍回温人数或到过湖北的"
}, {
    fieldName: "CNSQD",
    label: "承诺书签订"
}]

// 企业返工
const qyfgHash = [{
    fieldName: "企业名称",
    label: "企业名称"
}, {
    fieldName: "统一社会信",
    label: "统一社会信"
}, {
    fieldName: "行业代码",
    label: "行业代码"
}, {
    fieldName: "行业分类",
    label: "行业分类"
}]

// 学校
const schoolHash = [{
    fieldName: "NAME",
    label: "名称"
}, {
    fieldName: "SHORTNAME",
    label: "简称"
}, {
    fieldName: "ADDRESS",
    label: "地址"
}, {
    fieldName: "PHONE",
    label: "电话"
}]

// 南郊企业
const njqyHash = [{
    fieldName: "CompanyCode",
    label: "组织机构代码"
}, {
    fieldName: "JPCode",
    label: "经普码"
}, {
    fieldName: "Type",
    label: "类型"
}, {
    fieldName: "CompanyName",
    label: "单位详情名称"
}, {
    fieldName: "Address",
    label: "单位地址"
}, {
    fieldName: "MajorBusiness",
    label: "主要业务活动"
}, {
    fieldName: "LegalPerson",
    label: "法人代表"
}, {
    fieldName: "LegalPersonPhone",
    label: "法人联系号码"
}, {
    fieldName: "LinkMan",
    label: "联系人"
}, {
    fieldName: "LinkManPhone",
    label: "联系人号码"
}, {
    fieldName: "OfficeLinkMan",
    label: "办公室联系人"
}, {
    fieldName: "OfficeLinkManPhone",
    label: "办公室联系号码"
}, {
    fieldName: "单位负责人",
    label: "单位负责人"
}, {
    fieldName: "单位负责人联系电话",
    label: "单位负责人联系电话"
}, {
    fieldName: "Accountant",
    label: "会计姓名"
}, {
    fieldName: "AccountantPhone",
    label: "会计联系号码"
}, {
    fieldName: "Phone",
    label: "电话号码"
}, {
    fieldName: "Fax",
    label: "传真"
}, {
    fieldName: "Note",
    label: "备注"
}, {
    fieldName: "企业性质",
    label: "企业性质"
}]


export const Hash = {
    hospitalHash,
    illHash,
    cultureHash,
    marketHash,
    subwayHash,
    carHash,
    highwayHash,
    xqHash,
    xqjckHash,
    scHash,
    sfHash,
    jsHash,
    jjglHash,
    hbhwHash,
    gldHash,
    lgHash,
    mjHash,
    wgHash,
    bwgHash,
    ytygHash,
    mbpxHash,
    jzgdHash,
    njzdqyHash,
    njxmHash,
    gldListHash,
    sccsHash,
    nmscHash,
    wmgsHash,
    qyfgHash,
    schoolHash,
    zjgdHash,
    njqyHash,
    hmgldListHash,
    hmgldHash,
    kfgldListHash
}


export const imgHash = {
    矮凳桥: 4,
    安澜: 2,
    八仙楼: 1,
    百里坊: 3,
    城西街: 2,
    府前: 3,
    黎明西路: 2,
    路湾: 3,
    墨池: 3,
    十八家: 2,
    谢池: 4
}
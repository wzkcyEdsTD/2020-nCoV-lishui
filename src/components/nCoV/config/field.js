// 详情展示字段
export const sbFields = {
    // 确诊
    qzbl: ["Name", "Sex", "Age", "Profession", "Country", "DiseaseTime", "Hospital"],
    // 疑似
    zzbl: ["Name", "Sex", "Age", "Country", "DiseaseTime", "Hospital"],
    // 银泰
    ytyg: ["Name", "Phone", "Country", "Address"],
    // 隔离点
    gld: ["Name", "Address", "Country", "Linkman", "Phone", "IsUsing"],
    // 隔离点名单
    gld_list: ["Name", "Sex", "Phone", "IsolatePlace", "Room", "StartIsolationTime", "IsTerminateIsolate"],
    // 密接
    mj: ["Name", "NAME", "Sex", "Phone", "Country", "Patient", "Relation"],
    // 居家隔离
    jjgl: ["Name", "Sex", "Phone", "Address", "Country", "StartDivideTime", "IsDivide"],
    // 湖北回鹿
    hbhw: ["Name", "Sex", "Age", "Country", "ChargeManPhone"],
    // 国际确诊
    glmd: ["Name", "Sex", "Phone", "Address", "Community", "KSGCSJ"],
    // 国际密接
    gjmj: ["NAME", "Sex", "Phone", "Relation", "DividePlace", "Country"],
    // 社区
    wg: ["Name", "jd", "jwh", "sq", "wgpzxm", "wgpzlxdh"],
    // 小区
    xq: ["MansionName", "CommunityName", "District", "CommunityChargeMan", "Phone"],
    // 高速
    highway_type_1: ["Name"],
    // 火车站
    highway_type_2: ["Name"],
    // 交通卡口
    highway_type_4: ["Name"],
    // 商场超市
    people_type_8: ["Name", "Country", "Address", "CompanyLinkMan"],
    // 农贸市场
    people_type_9: ["Name", "Address", "Country", "LinkMan", "LinkManPhone"],
    // 小区进出口
    xqjck: ["社区名称", "所属街道", "小区名称", "出入口情况"],
    // 佛教
    people_type_1: ["Name", "Country", "Address", "ChargeMan", "ChargeManPhone"],
    // 天基
    people_type_2: ["Name", "Country", "Address", "ChargeMan", "ChargeManPhone"],
    // 伊斯兰
    people_type_13: ["Name", "Country", "Address", "ChargeMan", "ChargeManPhone"],
    // 专业市场
    people_type_3: [],
    // 城市书房
    people_type_6: ["Name", "Address"],
    // 健身房
    people_type_7: ["Address", "Type"],
    // 民办培训机构
    people_type_12: ["Name", "Address"],
    // 博物馆
    people_type_10: ["Name", "Address", "Type", "Phone"],
    // 文化场所
    people_type_11: ["Name", "Address", "LinkMan", "LinkManPhone"],
    // 发热门诊
    clinic_type_1: ["NAME", "ADDRESS", "PHONE", "GRADE"],
    // 定点救治
    clinic_type_2: ["NAME", "ADDRESS", "PHONE", "GRADE"],
    // 其他专科
    clinic_type_3: ["SHORTNAME", "ADDRESS", "TYPE", "PHONE"],
    // 医保药房
    clinic_type_5: ["SHORTNAME", "ADDRESS", "TYPE", "PHONE"],
    // 疾控中心
    clinic_type_7: ["NAME", "ADDRESS", "PHONE", "GRADE"],
    // 建筑工地
    jzgd: ["项目名称", "项目地址", "建设单位"],
    // 南郊重点企业
    nj_zdqy: ["CompanyName", "Address", "LinkMan", "LinkManPhone"],
    // 南郊自建项目
    nj_xm_1: ["ProjectName", "ConstructionCompanyLinkMan", "LinkManPhone"],
    // 南郊在建项目
    nj_xm_2: ["ProjectName", "ConstructionCompanyLinkMan", "LinkManPhone"],
    // 五马规上
    wm_gs: ["Name", "Address", "ChargeMan"],
    // 企业返工
    qyfg: ["企业名称", "统一社会信", "行业代码", "行业分类"],
    // 学校
    school: ["NAME", "SHORTNAME", "ADDRESS", "PHONE"],
    // 在建工地
    zjgd: ["ProjectName", "JSDD", "JD", "JQZFGSJ", "CNSQD"],
    // 南郊企业
    nj_qy: ["CompanyName", "Address", "MajorBusiness", "单位负责人", "单位负责人联系电话"],
    // 红码隔离点人员名单
    hmgld_list: ["Name", "Sex", "Country", "Phone", "GLD"],
    // 华侨隔离点人员名单
    hqgld_list: ["Name", "Sex", "Country", "Phone", "GLD"],
    // 康复隔离点人员名单
    kfgld_list: ["Name", "Sex", "Country", "Phone", "GLD"],
    // 红码隔离点
    hmgld: ["Name", "Address", "Country", "Linkman", "Phone", "IsUsing"],
    // 华侨隔离点
    hqgld: ["Name", "Address", "Country", "Linkman", "Phone", "IsUsing"],
    // 康复隔离点
    kfgld: ["Name", "Address", "Country", "Linkman", "Phone", "IsUsing"]
}



// 弹框不显示字段
export const noShowFields = [
    "OBJECTID",
    "OBJECTID_1",
    "FEATUREGUID",
    "id",
    "Bid",
    "bid",
    "Question",
    "question",
    "yy",
    "Id",
    "小区面名称",
    "小区面唯一码",
    "X",
    "Y",
    "problem",
    "Problem",
    "RelatingCodes",
    "QZ_DATE",
    "DZMC",
    "DZJDZB",
    "DZWDZB",
    "YLL",
    "PC",
    "CDWTX",
    "MJBJ",
    "CRTime",
    "MJZS",
    "WarehousingTime",
    "Shape.STArea()",
    "Shape.STLength()",
    "XZQMC",
    "数据来源",
    "pd",
    "序号",
    "x",
    "y",
    "mc",
    "chanye",
    "企业名称_1",
    "POINT_X",
    "POINT_Y",
    "FCODE",
    "DZPP",
    "Longitude",
    "Latitude",
    "OldBid",
    "形状",
    "DateUsource",
    "经度",
    "纬度",
    "总序号",
    "康复隔离__总序号"
]
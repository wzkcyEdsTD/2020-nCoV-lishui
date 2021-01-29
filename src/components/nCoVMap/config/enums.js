export const xmMenu = [{
  id: 'inside', label: '境内人员管控',
  children: [
    { id: 'inside-qz', label: '确诊病例' },
    { id: 'close_contact@0', label: '密切接触者' },
    { id: 'inside-fr', label: '无症状感染者' },
    { id: 'inside-jx', label: '疑似病例' },
    { id: 'inside-wzz', label: '发热门诊患者' },
    { id: 'inside-hs-point', label: '急性呼吸道感染者' },
    { id: 'inside-back', label: '国内高风险地区来丽返丽人员' },
    { id: 'theme_data@3', label: '卡口信息', amount: 1, isDetail: true },
    { id: 'inside-ym-data', label: '卡口检查数据' },
    { id: 'theme_data@2', label: '中大型商超', amount: 28, isDetail: true },
    { id: 'theme_data@0', label: '农贸市场', amount: 58, isDetail: true },
    { id: 'inside-gl-jj', label: '宗教活动场所', isDetail: true },
    { id: 'inside-ll-jw', label: '公共文化场所' },
    { id: 'inside-ll-gn', label: '福利院和养老院', isDetail: true },
    { id: 'inside-ll-ry', label: '福利院和养老院重点人群', isDetail: true },
    { id: 'theme_data@1', label: '火车站', amount: 1, isDetail: true },
    { id: 'inside-bus', label: '汽车站' },
    { id: 'theme_data@4', label: '学校', amount: 1137, isDetail: true },
    { id: 'inside-ll-gn1', label: '学生健康状况打卡信息' },
    { id: 'inside-ll-gn2', label: '发热、咳嗽、腹泻学生信息' },
  ]
}, {
  id: 'outside', label: '入境人员管控',
  children: [
    { id: 'outside-back', label: '境外来丽返丽人员', isDetail: true }
  ]
}, {
  id: 'goods', label: '物品风险防控',
  children: [
    { id: 'goods-check', label: '冷链检查数据' }, //  关联卡口人员
    { id: 'goods-pharmacy', label: '药店' },
    { id: 'goods-pharmacy-purchase', label: '药店购药数据' },
    { id: 'goods-insurance-purchase', label: '医保购药数据', isDetail: true },
  ]
}, {
  id: 'ability', label: '防控能力提升',
  children: [
    { id: 'ability-xx-info', label: '隔离点' },
    { id: 'ability-xx-health', label: '集中隔离人员信息' },
    { id: 'ability-fy-ill', label: '居家隔离人员数据' },
    { id: 'ability-fy-subway', label: '负压救护车' }, //  关联火车票
    { id: 'ability-fy-bus', label: '新冠检测专用CT信息' }, //  关联汽车票
    { id: 'ability-fy-mall', label: '新冠定点医院信息' },
    { id: 'ability-fy-nm', label: '发热门诊信息' },
    { id: 'ability-fy-zj', label: '方舱' },
    { id: 'ability-fy-wh', label: '核酸检测点' },
    { id: 'ability-wz', label: '核酸检测信息' },
    { id: 'ability-wz-resource', label: '新冠疫苗接种地点' },
    { id: 'ability-fc', label: '新冠疫苗接种数据' },
    { id: 'ability-fy-car', label: '医疗物资仓库' },
    { id: 'ability-fr-mz', label: '医疗物资库存' },
  ]
}]
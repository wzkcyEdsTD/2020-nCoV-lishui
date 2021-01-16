export const xmMenu = [{
  id: 'yq', label: '疫情分布',
  children: [
    { id: 'close_contact@0', label: '密切接触者' },
    { id: 'yq-qz', label: '确诊病例' },
    { id: 'yq-fr', label: '发热门诊患者' },
    { id: 'yq-jx', label: '急性呼吸道感染者' },
    { id: 'yq-wzz', label: '无症状感染者信息' },
    { id: 'yq-hs-point', label: '核酸检测点' },
    { id: 'yq-hs-info', label: '核酸检测信息' },
    { id: 'yq-ym-point', label: '新冠疫苗接种地点' },
    { id: 'yq-ym-data', label: '新冠疫苗接种数据' },
    { id: 'yq-gl-people', label: '隔离点工作人员' },
    { id: 'yq-gl-jz', label: '集中隔离人员数据' },
    { id: 'yq-gl-jj', label: '居家隔离人员数据' },
    { id: 'yq-ll-jw', label: '境外来丽反丽人员' },
    { id: 'yq-ll-gn', label: '国内高风险地区来丽反丽人员' },
  ]
}, {
  id: 'wg', label: '网格管理',
  children: [
    { id: 'wg-point', label: '网格点位' }
  ]
}, {
  id: 'kk', label: '卡口值班',
  children: [
    { id: 'kk-info', label: '卡口信息' }, //  关联卡口人员
    { id: 'kk-data', label: '卡口检查数据' },
  ]
}, {
  id: 'mj', label: '人员密集场所',
  children: [
    { id: 'mj-xx-info', label: '学校信息' },
    { id: 'mj-xx-health', label: '学生健康状况打卡信息' },
    { id: 'mj-fy-ill', label: '发热、咳嗽、腹泻学生信息' },
    { id: 'mj-fy-subway', label: '火车站' }, //  关联火车票
    { id: 'mj-fy-bus', label: '汽车站' }, //  关联汽车票
    { id: 'mj-fy-mall', label: '中大型商超' },
    { id: 'mj-fy-nm', label: '农贸市场' },
    { id: 'mj-fy-zj', label: '宗教活动场所' },
    { id: 'mj-fy-wh', label: '公共文化场所' },
  ]
}, {
  id: 'yl', label: '医疗资源',
  children: [
    { id: 'yl-wz', label: '医疗物资仓库' },
    { id: 'yl-wz-resource', label: '医疗物资资源' },
    { id: 'yl-fc', label: '放舱' },
    { id: 'yl-fy-car', label: '负压救护车' },
    { id: 'yl-fr-mz', label: '发热门诊信息' },
    { id: 'yl-fy-ll', label: '冷链检查数据' },
    { id: 'yl-fy-yw', label: '药店购买药物' },
    { id: 'yl-fy-gy', label: '医保购药数据' },
    { id: 'yl-fy-fl', label: '福利院和养老院' }, //  关联重点人群
    { id: 'yl-fy-yd', label: '药店' },
  ]
}]
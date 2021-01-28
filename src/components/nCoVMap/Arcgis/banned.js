//  筛选排除的字段
export const BANNED_PARAMS = [
  "objectid",
  "OBJECTID",
  "OBJECTID_1",
  "Shape",
  "Shape_Area",
  "SHAPE_Area",
  "Shape.STArea()",
  "Shape_STArea__",
  "Shape_Leng",
  "SHAPE_Length",
  "Shape.STLength()",
  "Shape_Length",
  "Shape_STLength__",
];
//  工业企业暂时去除
export const BANNED_PARAMS_COMPANY = [];
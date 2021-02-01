/* eslint-disable */

import { SERVER } from "../config/index";
import { loadModules } from "esri-loader";
import { BANNED_PARAMS, BANNED_PARAMS_COMPANY } from "./banned";
import { fetchArcgisServer } from "@/api/spaceAPI";
import { SZQH } from "@/components/common/Tmap";
/**
 * FeatureLayer
 * @param {*} context
 * @param {*} item
 */
const doMassFeatureLayer = async (context, { url, id }, shallTop = true) => {
  const { data } = await fetchArcgisServer({ url });
  const reg = new RegExp("[\u4e00-\u9fa5]");
  const fieldAliases = data.fieldAliases;
  const _html_ = Object.keys(fieldAliases)
    .filter(item => !BANNED_PARAMS.includes(item) && !BANNED_PARAMS_COMPANY.includes(item))
    .map(key => reg.test(fieldAliases[key]) ? `<div><span>${fieldAliases[key]}</span><span>{${key || ""}}</span></div>` : ``
    ).join('')
  // 
  return new Promise((resolve, reject) => {
    if (context.map.findLayerById(id)) {
      context.map.findLayerById(id).visible = true;
      resolve(true);
    } else {
      //  不存在图层,生成图层
      loadModules(["esri/layers/FeatureLayer",]).then(([FeatureLayer]) => {
        //  feature
        const option = { url, id, opacity: 1, outFields: ["*"], };
        option.popupTemplate = {
          actions: [
            {
              id: "feature-video-overview",
              image: "/libs/img/video.png",
              title: "查看监控"
            }
          ],
          content: `<div class="yqPopFrame"><div>${_html_}</div></div>`,
        };
        const layer = new FeatureLayer(option);
        context.map.add(layer, shallTop ? 10 : 2);
        context.legend.layerInfos.push({ layer });
        resolve(true);
      });
    }
  });
};
/**
 * basic server graphic
 * @param {*} context
 * @param {*} param1 配置信息
 * @param {*} sub 图层
 */
const doBasicLayer = (context, { url, id }, sub = []) => {
  loadModules(["esri/layers/MapImageLayer"]).then(([MapImageLayer]) => {
    const option = { url, id };
    sub &&
      sub.length &&
      (option.sublayers = sub.map(id => {
        return { id };
      }));
    const basicLayer = new MapImageLayer(option);
    context.map.add(basicLayer, 2);
  });
};
/**
 * 默认项目
 * @param {*} context
 */
export const doPointLayer = (context, key) => {
  const [layer, level] = key.split("@");
  if (!layer || !level) return context.$message({ type: "error", message: `[${key}]无数据服务` })
  doMassFeatureLayer(context, { url: `${SERVER}/${layer}/MapServer/${level}`, id: key });
};
/**
 * 县市区网格\蒙黑
 * @param {*} context
 */
export const doXSQLayer = context => {
  doBasicLayer(context, { url: yqXSQURL, id: "xsqLayer" }, [3, 0]);
};

/**
 * 手动弹框
 * @param {*} view
 * @param {*} obj
 * @param {*} fieldAliases 枚举
 */
export const doArcgisPopup = (
  { view, $util },
  { attributes, type, geometry },
  fieldAliases
) => {
  const _html_ = Object.keys(fieldAliases)
    .filter(
      item =>
        !BANNED_PARAMS.includes(item) && !BANNED_PARAMS_COMPANY.includes(item)
    )
    .map(key => {
      return `<div><span>${fieldAliases[key]}</span><span>${attributes[key] ||
        ""}</span></div>`;
    })
    .join("");
  view.popup.open({
    content: `<div class="yqPopFrame">${_html_}</div>`,
    location:
      type == "point" ? geometry : $util.getPolygonCenter(geometry.rings)
  });
};

/**
 * removeLayer
 * @param {*} context
 * @param {*} id
 */
export const removeLayer = (context, id) => {
  if (context.map.findLayerById(id)) {
    context.map.findLayerById(id).visible = false;
  }
};

/**
 * 底图切换
 * @param {*} context 
 * @param {*} param1 
 */
export const doImage = (context, { key, id, boolean }) => {
  loadModules(["esri/layers/MapImageLayer"]).then(([MapImageLayer]) => {
    const layer = context.map.findLayerById(key);
    if (layer) {
      layer.visible = boolean
    } else {
      if (boolean) {
        context.map.add(new MapImageLayer({
          url: SZQH,
          id: key,
          sublayers: [{ id }],
        }));
      }
    }
  });
}
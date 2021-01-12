import {
  tipHash,
  Hash
} from "../config/hash.js";
import {
  loadModules
} from "esri-loader";
import {
  OPTION
} from "@/components/common/Tmap";

// 隔离点人员详情
export const getGLDList = (context, name, bid) => {
  loadModules(
    ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
    OPTION
  ).then(async ([QueryTask, Query]) => {
    const queryTask = new QueryTask({
      url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/5`
    });
    const query = new Query();
    query.outFields = ["*"];
    query.returnGeometry = true;
    query.where = `Bid = '${bid}'`;
    const {
      fields,
      features
    } = await queryTask.execute(query);
    const fieldAliases = {};
    fields.map(item => {
      fieldAliases[item.name] = item.alias;
    });
    const list = features.map(item => {
      item.fieldAliases = fieldAliases;
      return item;
    });
    context.$parent.$refs.gldxq.list = [...list];
    context.$parent.$refs.gldxq.title = name;
  });
};

// 红码隔离点人员详情
export const getHMGLDList = (context, name, bid) => {
  loadModules(
    ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
    OPTION
  ).then(async ([QueryTask, Query]) => {
    const queryTask = new QueryTask({
      url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/7`
    });
    const query = new Query();
    query.outFields = ["*"];
    query.returnGeometry = true;
    query.where = `Bid = '${bid}'`;
    const {
      fields,
      features
    } = await queryTask.execute(query);
    const fieldAliases = {};
    fields.map(item => {
      fieldAliases[item.name] = item.alias;
    });
    const list = features.map(item => {
      item.fieldAliases = fieldAliases;
      return item;
    });
    context.$parent.$refs.gldxq.list = [...list];
    context.$parent.$refs.gldxq.title = name;
  });
};

// 华侨隔离点人员详情
export const getHQGLDList = (context, name, bid) => {
  loadModules(
    ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
    OPTION
  ).then(async ([QueryTask, Query]) => {
    const queryTask = new QueryTask({
      url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/8`
    });
    const query = new Query();
    query.outFields = ["*"];
    query.returnGeometry = true;
    query.where = `Bid = '${bid}'`;
    const {
      fields,
      features
    } = await queryTask.execute(query);
    const fieldAliases = {};
    fields.map(item => {
      fieldAliases[item.name] = item.alias;
    });
    const list = features.map(item => {
      item.fieldAliases = fieldAliases;
      return item;
    });
    context.$parent.$refs.gldxq.list = [...list];
    context.$parent.$refs.gldxq.title = name;
  });
};

// 康复隔离点人员详情
export const getKFGLDList = (context, name, bid) => {
  loadModules(
    ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
    OPTION
  ).then(async ([QueryTask, Query]) => {
    const queryTask = new QueryTask({
      url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/12`
    });
    const query = new Query();
    query.outFields = ["*"];
    query.returnGeometry = true;
    query.where = `Bid = '${bid}'`;
    const {
      fields,
      features
    } = await queryTask.execute(query);
    const fieldAliases = {};
    fields.map(item => {
      fieldAliases[item.name] = item.alias;
    });
    const list = features.map(item => {
      item.fieldAliases = fieldAliases;
      return item;
    });
    context.$parent.$refs.gldxq.list = [...list];
    context.$parent.$refs.gldxq.title = name;
  });
};


// 南郊企业人员
export const getNJQYList = (context, name) => {
  const nameFix = name.replace(/(^\s*)|(\s*$)/g, "")
  loadModules(
    ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
    OPTION
  ).then(async ([QueryTask, Query]) => {
    const queryTask = new QueryTask({
      url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/nanjiao/MapServer/8`
    });
    const query = new Query();
    query.outFields = ["*"];
    query.returnGeometry = true;
    query.where = `工作单位 like '%${nameFix}%'`;
    const {
      fields,
      features
    } = await queryTask.execute(query);

    const fieldAliases = {};
    fields.map(item => {
      fieldAliases[item.name] = item.alias;
    });
    const list = features.map(item => {
      item.fieldAliases = fieldAliases;
      return item;
    });
    context.$parent.$refs.njqyForm.list = [...list];
    context.$parent.$refs.njqyForm.title = name;
  });
};
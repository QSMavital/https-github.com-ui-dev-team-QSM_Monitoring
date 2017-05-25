const apiEntryPoint = "/operator/api";

export const Api = {
  init: {url:`${apiEntryPoint}/general/settingsUser/get`,payload:{}},
  customer: {url:`${apiEntryPoint}/general/get`,payload:{}},
  dashboard_connection: {url:`${apiEntryPoint}/main/connection/get`,payload:{}},
  dashboard_device_status: {url:`${apiEntryPoint}/main/deviceStatus/get`,payload:{}},
  dashboard_action_status: {url:`${apiEntryPoint}/main/actionStatus/get`,payload:{}},
  dashboard_issuer_action_status: {url:`${apiEntryPoint}/main/issuerActionStatus/get`,payload:{}},
  dashboard_online_status: {url:`${apiEntryPoint}/main/onlineStatus/get`,payload:{}},
  atms_inventory: {url:`${apiEntryPoint}/atms/get`,payload:{}},
  atms_events: {url:`${apiEntryPoint}/events/get`,payload:{eventSeverity: ["FATAL","ERROR","WARN","INFO"]}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}},
  // getAtms: {url:'/atms',payload:{action: 'get'}}
}

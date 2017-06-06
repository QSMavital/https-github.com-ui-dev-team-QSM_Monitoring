const apiEntryPoint = "/operator/api";

export const Api = {
  init: {url: `${apiEntryPoint}/general/settingsUser/get`, payload: {}},
  customer: {url: `${apiEntryPoint}/general/get`, payload: {}},
  dashboard_connection: {url: `${apiEntryPoint}/main/connection/get`, payload: {}},
  dashboard_device_status: {url: `${apiEntryPoint}/main/deviceStatus/get`, payload: {}},
  dashboard_action_status: {url: `${apiEntryPoint}/main/actionStatus/get`, payload: {}},
  dashboard_issuer_action_status: {url: `${apiEntryPoint}/main/issuerActionStatus/get`, payload: {}},
  dashboard_online_status: {url: `${apiEntryPoint}/main/onlineStatus/get`, payload: {}},
  atms_inventory: {
    url: `${apiEntryPoint}/atms/get`, payload: {
      "fromLine": null,
      "numOfLine": null,
      "status": null, "group": null, "area": null
    }
  },
  atms_events: {
    url: `${apiEntryPoint}/events/get`,
    payload: {
      eventSeverity: null,
      "fromLine": null,
      "atmNo": null,
      "numOfLine": null,
      "fromDate":new Date().setHours(0,0,0,0),
      "toDate":new Date().getTime()
    }
  },
  hsm_statistic: {
    url: `${apiEntryPoint}/hsm/statistics/get`,
    payload: {
      eventSeverity: null,
      "fromLine": null,
      "atmNo": null,
      "numOfLine": null,
      "fromDate":new Date().setHours(0,0,0,0),
      "toDate":new Date().getTime()
    }
  },
  atms_transactions: {
    url: `${apiEntryPoint}/transactions/get`,
    payload: {
      "atmNo": null,
      "fromLine": null,
      "numOfLine": null,
      "fromDate":new Date().setHours(0,0,0,0),
      "toDate":new Date().getTime()
    }
  },
  getAtmStatus: {url:`${apiEntryPoint}/atm/atmStatus/get`,payload:{atmNo: null}},
  getAtmAccessories: {url:`${apiEntryPoint}/atm/atmAccessories/get`,payload:{atmNo: null}},
  getAtmRetainedCards: {url:`${apiEntryPoint}/atm/retainedCards/get`,payload:{atmNo: null,fromSettelments: "AT_ATM"}},
  getAtmSettings: {url:`${apiEntryPoint}/atm/settings/get`,payload:{atmNo: null}},
  saveAtmSettings: {url:`${apiEntryPoint}/atm/settings/patch`},
  createAtmSettings: {url:`${apiEntryPoint}/atm/settings/post`},
  getTransaction: {url:`${apiEntryPoint}/transactions/transaction/get`,payload:{transactionId: null}},
  action: {url:`${apiEntryPoint}/atms/action`,payload:{action: null,atmList:null}}
}

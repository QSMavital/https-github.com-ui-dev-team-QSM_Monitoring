export const GeneralConstants = {
  Banks: {
    "99": {value: "99", label: "banks.99"},
    "12": {value: "12", label: "banks.12"},
    "10": {value: "10", label: "banks.10"},
    "11": {value: "11", label: "banks.11"},
    "20": {value: "20", label: "banks.20"},
    "14": {value: "14", label: "banks.14"},
    "17": {value: "17", label: "banks.17"},
    "9":  {value: "9",  label: "banks.9",},
    "13": {value: "13", label: "banks.13"},
    "46": {value: "46", label: "banks.46"},
    "52": {value: "52", label: "banks.52"},
    "90": {value: "90", label: "banks.90"},
    "77": {value: "77", label: "banks.77"},
    "4":  {value: "4",  label: "banks.4",},
    "26": {value: "26", label: "banks.26"},
    "7":  {value: "7",  label: "banks.7",},
    "8":  {value: "8",  label: "banks.8",},
    "6":  {value: "6",  label: "banks.6",},
    "54": {value: "54", label: "banks.54"},
    "34": {value: "34", label: "banks.34"},
    "1":  {value: "1",  label: "banks.1",},
    "19": {value: "19", label: "banks.19"},
    "22": {value: "22", label: "banks.22"},
    "48": {value: "48", label: "banks.48"},
    "68": {value: "68", label: "banks.68"},
    "23": {value: "23", label: "banks.23"},
    "67": {value: "67", label: "banks.67"},
    "25": {value: "25", label: "banks.25"},
    "39": {value: "39", label: "banks.39"},
    "OUR_BANK":{value: "OUR_BANK", label: "banks.OUR_BANK"}

  },
  Vendors: {
    NCR: {value: "NCR", label: "NCR",validations:{minLength:8,maxLength:8}},
    WINCOR: {value: "WINCOR", label: "WINCOR",validations:{minLength:16,maxLength:16}},
    DIEBOLD: {value: "DIEBOLD", label: "DIEBOLD",validations:{minLength:8,maxLength:8}}
  },
  AtmProtocol: {
    NCR: {value: "NCR", label: "NCR"},
    DIEBOLD912: {value: "DIEBOLD912", label: "DIEBOLD912"}
  },
  RklProtocol: {
    NONE: {value: "NONE", label: "rklProtocol.NONE"},
    NCR_ENHANCED: {value: "NCR_ENHANCED", label: "rklProtocol.NCR_ENHANCED"},
    CERTIFICATE: {value: "CERTIFICATE", label: "rklProtocol.CERTIFICATE"},
    WINCOR_SIGNATURE: {value: "WINCOR_SIGNATURE", label: "rklProtocol.WINCOR_SIGNATURE"}
  },
  Area: {
    NONE: {value: "NONE", label: "area.NONE"},
    NORTH: {value: "NORTH", label: "area.NORTH"},
    SOUTH: {value: "SOUTH", label: "area.SOUTH"},
    CENTER: {value: "CENTER", label: "area.CENTER"},
    JERUSALEM: {value: "JERUSALEM", label: "area.JERUSALEM"},

  },
  Responsibility:{
    NONE: {value: "NONE", label: "Responsibility.NONE"},
    BRANCH: {value: "BRANCH", label: "Responsibility.BRANCH"},
    VENDOR: {value: "VENDOR", label: "Responsibility.VENDOR"},
    TECHNICIAN: {value: "TECHNICIAN", label: "Responsibility.TECHNICIAN"}
  },
  CurrencyCode:{
    NIS: {value: "NIS", label: "CurrencyCode.NIS"},
    USD: {value: "USD", label: "CurrencyCode.USD"},
    EUR: {value: "EUR", label: "CurrencyCode.EUR"},
    NONE: {value: "NONE", label: "CurrencyCode.NONE"},
  },
  Denomination:{
    20: {value: "20", label: "20"},
    50: {value: "50", label: "50"},
    100: {value: "100", label: "100"},
    200: {value: "200", label: "200"},
  },
  Belong:{
    BRANCH:{value: "BRANCH", label: "atms.branch"},
    REMOTE:{value: "REMOTE", label: "enums.REMOTE"},
    YAHAV:{value: "YAHAV", label:  "enums.YAHAV"}
  },
  Supply:{
    "NO_INFO":"100",
    "GOOD":"25",
    "LOW":"25",
    "OUT":"50",
    "OVERFILL":"75",
    "NEARLY_FULL":"50"
  }
};

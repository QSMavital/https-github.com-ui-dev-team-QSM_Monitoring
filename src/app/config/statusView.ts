var colors={
  blue:'#03aefd',
  green:'#71d36b',
  red:'#ff563e',
  yellow:'#fa9a52',
};
export const StatusView = {
  DISABLE: {color: colors.blue},
  DISABLED: {color: colors.blue},
  GOOD: {color: colors.green},
  INFO: {color: colors.green},
  DEBUG: {color: colors.green},
  TRACE: {color: colors.green},
  ATTENTION: {color: colors.yellow},
  FATAL: {color:  colors.red},
  ERROR: {color:  colors.red},
  OFF_LINE: {color: colors.red},
  OPERATOR: {color: colors.yellow},
  WARN: {color: colors.yellow},
  NOT_APPROVED: {color: colors.red},
  APPROVED: {color: colors.green},
  QUESTIONABLE: {color: colors.yellow},
  REVERSED: {color: colors.red},
  DECLINED: {color: colors.yellow},
  APPROVED_TEMPORARY: {color: colors.green},
  REVERSED_SHVA: {color: colors.red},
  CLOSED: {color: colors.green},
  OPEN: {color: colors.green},
  LOADING: {color: colors.yellow},
  SUPERVISOR: {color: colors.yellow},
  NONE: {color: colors.blue},
  IN_PROCESS: {color: colors.yellow},
  FAILED: {color: colors.red},
  DONE: {color: colors.green}

};

export const ActionsStatus = {
    IncorrectPINCode: "OPERATOR",
    Rejection: "FATAL",
    SuccessfulOperations:"GOOD",
    Fault:"DISABLE"
};

var colors={
  blue:'#03aefd',
  green:'#71d36b',
  red:'#ff563e',
  yellow:'#fa9a52',
}
export const StatusView = {
  DISABLE: {color: colors.blue},
  GOOD: {color: colors.green},
  ATTENTION: {color: colors.yellow},
  FATAL: {color:  colors.red},
  OFF_LINE: {color: colors.red},
  OPERATOR: {color: colors.yellow},

  NOT_APPROVED: {color: colors.red},
  APPROVED: {color: colors.green},
  QUESTIONABLE: {color: colors.yellow},
  REVERSED: {color: colors.red},
  DECLINED: {color: colors.yellow},
  APPROVED_TEMPORARY: {color: colors.green},
  REVERSED_SHVA: {color: colors.red}
};

export const ActionsStatus = {
    IncorrectPINCode: "OPERATOR",
    Rejection: "FATAL",
    SuccessfulOperations:"GOOD",
    Fault:"DISABLE"
}

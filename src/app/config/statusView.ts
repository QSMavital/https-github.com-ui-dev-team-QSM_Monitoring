export const StatusView = {
  DISABLE: {
    color: "#03aefd"
  },
  GOOD: {
    color: "#71d36b"
  },
  ATTENTION: {
    color: "#fad247"
  },
  FATAL: {
    color: "#ff563e"
  },
  OPERATOR: {
    color: "#fa9a52"
  }
};

export const ActionsStatus =
  {
    IncorrectPINCode: "OPERATOR",
    Rejection: "FATAL",
    SuccessfulOperations:"GOOD",
    Fault:"DISABLE"
  }
;

var app = {
  isValid: function (response, statusCode) {
    __Logger.log("App script updated");
    var result = {
      isError: false,
      message: "",
      body: response,
      errorType: "softError",
    };
    if (statusCode == 400 || statusCode == 404) {
      result.errorType = "softError";
    } else if (statusCode == 401) {
      result.errorType = "expiredAuth";
    }
    if (response.startsWith("{") || response.startsWith("[")) {
      var body = JSON.parse(response);
      if (body.error && body.error.message) {
        result.isError = true;
        result.message = body.error.message;
      }
      return result;
    }
    result.isError = true;
    result.message = "Invalid JSON";

    return result;
  },
  returnError: function (result) {
    if (result.errorType == "softError") {
      return softError(result.message, result.body);
    } else if (result.errorType == "expiredAuth") {
      return expiredAuth(result.message, result.body);
    } else {
      return error(result.message, result.body);
    }
  },
};

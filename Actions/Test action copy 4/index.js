//TEST SCRIPT
var action = {
  isValid: function (response, statusCode) {
    if (statusCode == 200) {
      return {
        isValid: true,
        errorType: "softError",
      };
    }
  },
};

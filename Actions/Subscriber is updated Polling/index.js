var action = {
    post: function(response) {
        var result = app.isValid(response.Body, response.StatusCode);
        if (result.isError) {
            return app.returnError(result);
        }

        var responseBody = JSON.parse(result.body);
        if (Array.isArray(responseBody)) {
            responseBody.forEach(function(subscriber) {
                subscriber.updatedId = md5(subscriber.id+subscriber.date_updated);
            });
        }
        return success(JSON.stringify(responseBody));


    },
    outputFields: function() {
        var fields = executeAction("Get fields");
        return fields;
    }
};
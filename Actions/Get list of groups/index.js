var action = {
    post: function(response) {
        var result = app.isValid(response.Body, response.StatusCode);

        if (result.isError) {
            return app.returnError(result);
        } else
        {
            return success(result.body);
        }
    }
};
var action = {
    post: function(response) {
        var result = app.isValid(response.Body, response.StatusCode);

        if (result.isError) 
        {
            return app.returnError(result);
        }
        
            return success(result.body);
        }
};
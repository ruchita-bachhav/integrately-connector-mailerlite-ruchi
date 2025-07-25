var action = {
    post: function(response) {

        var result = app.isValid(response.Body, response.StatusCode);
        if (result.isError) {
            return app.returnError(result);
        }
        var fields = [];
        var body = JSON.parse(response.Body);
        if (Array.isArray(body)) {
            body.forEach(function(field) {
                var type = "String";

                if (field.type == "TEXT") {
                    type = "String";
                } else if (field.type == "Date") {
                    type = "Date";
                }

                var obj = {
                    "name": field.key,
                    "label": field.title,
                    "type": type,
                };
                fields.push(obj);
            });
        }
        return success(JSON.stringify(fields));
    }
};
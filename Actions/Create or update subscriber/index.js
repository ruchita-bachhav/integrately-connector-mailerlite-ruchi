var action={
    pre:function(request){
        var requestBody=JSON.parse(request.Body);
         __Logger.logPair("Raw Request",request.Body);
        __Logger.logPair("Modified Request",JSON.stringify(requestBody));
        return{
            Body:JSON.stringify(requestBody)
        };
    },
    post:function(response){
        var result=app.isValid(response.Body, response.StatusCode);
        if(result.isError) {
            return app.returnError(result);
        }
            return success(result.body);
    },
	inputFields:function(){
         var fields=executeAction("Get fields");
        return fields;
    }
};
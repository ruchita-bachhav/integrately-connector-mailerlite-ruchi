var action={
    subscribe: function (request) {
        var body = {};
        body.url = request.TargetUrl;
        body.event = "subscriber.unsubscribe";
        var subscribeResponse = executeAction('Create Webhook', JSON.stringify(body));
        var subscribeBody = JSON.parse(subscribeResponse);
        return {
            Success: true,
            Data: JSON.stringify({
                WebhookId: subscribeBody.id,
            })
        };
    },
    unsubscribe: function (request) {
        var unsubscribeResponse = executeAction('Delete webhook', JSON.stringify({ id: JSON.parse(request.SubscriptionData).WebhookId }));
        return { Success: true };
    }
};
function generalisedResponseHandler(err, resp, body, args) {
	if (err) {
		console.log(args['event'], 'webhook request failed with error:', err);
		return;
	}
	console.log('Received response of', args['event'], 'event webhook from ', args['iparams']['backendAppName'] , 'Backend App.');
	console.log("Response code: ", resp.statusCode);
	console.log("Response body: ", body, '\n');
}

handleResponse = {
	'onAppInstall': function(err, resp, body, args) {
		generalisedResponseHandler(err, resp, body, args);
	},
	'onAppUninstall': function(err, resp, body, args) {
		generalisedResponseHandler(err, resp, body, args);
	},
	'onTicketCreated': function(err, resp, body, args) {
		generalisedResponseHandler(err, resp, body, args);
	},
	'onTicketUpdated': function(err, resp, body, args) {
		generalisedResponseHandler(err, resp, body, args);
	},
	'onContactCreated': function(err, resp, body, args) {
		generalisedResponseHandler(err, resp, body, args);
	},
	'onContactUpdated': function(err, resp, body, args) {
		generalisedResponseHandler(err, resp, body, args);
	},
	'onConversationCreated': function(err, resp, body, args) {
		generalisedResponseHandler(err, resp, body, args);
	}
};

exports = {
  handleResponse: handleResponse
};
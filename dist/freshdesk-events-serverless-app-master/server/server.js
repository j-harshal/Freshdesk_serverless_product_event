var request = require('request');
var handler = require('./lib/handle-response');

var logEventData = function(args) {
  console.log(args['event'], 'Event triggered on Freshdesk.');
  console.log('Making a POST request to', args, 'Backend App with data:');
  console.log(JSON.stringify(args));  
};

exports = {

  events: [
    { event: "onAppInstall", callback: "onAppInstallCallback" },
    { event: "onAppUninstall", callback: "onAppUninstallCallback" },
    { event: 'onTicketCreate', callback: 'onTicketCreateCallback' },
    { event: "onTicketUpdate", callback: "onTicketUpdateCallback" },
    { event: "onContactCreate", callback: "onContactCreateCallback" },
    { event: "onContactUpdate", callback: "onContactUpdateCallback" },
    { event: "onConversationCreate", callback: "onConversationCreateCallback" }
  ],

  // args is a JSON block containing the args information.
  // args['iparams'] will contain the installation parameter values.


  onAppInstallCallback: function(args) {
    logEventData(args); 
    
    var url = args['iparams']['appInstallWebhookUrl'];
    if(!url) {
      console.log('No webhook url configured for', args['event'], 'event. Not triggering', args , 'backed app webhook', '\n');
      return;
    }
    
    request.post({url: url, body: args, json: true}, function (error, response, body) {
      if(error) {
        // If there is an error during the setup, shopw error
        renderData({message: error});
      }
      handler.handleResponse.onAppInstall(error, response, body, args);
      // If the setup is successful
      renderData();
    });
  },

  onAppUninstallCallback: function(args) {
    logEventData(args); 
    
    var url = args['iparams']['appUninstallWebhookUrl'];
    if(!url) {
      console.log('No webhook url configured for', args['event'], 'event. Not triggering', args , 'backed app webhook', '\n');
      return;
    }
    
    request.post({url: url, body: args, json: true}, function (error, response, body) {
      if(error) {
        // If there is an error during the setup, shopw error
        renderData({message: error});
      }
      handler.handleResponse.onAppUninstall(error, response, body, args);
      // If the setup is successful
      renderData();
    });
  },

  onTicketCreateCallback: function(args) {
    logEventData(args);
    
    var url = args['iparams']['ticketCreatedWebhookUrl'];
    if(!url) {
      console.log('No webhook url configured for', args['event'], 'event. Not triggering', args , 'backed app webhook', '\n');
      return;
    }

    request.post({url: url, body: args, json: true}, function (error, response, body) {
      handler.handleResponse.onTicketCreated(error, response, body, args);
    });
  },

  onTicketUpdateCallback: function(args) {
    logEventData(args);
    
    var url = args['iparams']['ticketUpdatedWebhookUrl'];
    if(!url) {
      console.log('No webhook url configured for', args['event'], 'event. Not triggering', args , 'backed app webhook', '\n');
      return;
    }

    request.post({url: url, body: args, json: true}, function (error, response, body) {
      handler.handleResponse.onTicketUpdated(error, response, body, args);
    });
  },

  onContactCreateCallback: function(args) {
    logEventData(args);
    
    var url = args['iparams']['contactCreatedWebhookUrl'];
    if(!url) {
      console.log('No webhook url configured for', args['event'], 'event. Not triggering', args , 'backed app webhook', '\n');
      return;
    }

    request.post({url: url, body: args, json: true}, function (error, response, body) {
      handler.handleResponse.onContactCreated(error, response, body, args);
    });
  },
  
  onContactUpdateCallback: function(args) {
    logEventData(args);
    
    var url = args['iparams']['contactUpdatedWebhookUrl'];
    if(!url) {
      console.log('No webhook url configured for', args['event'], 'event. Not triggering', args , 'backed app webhook', '\n');
      return;
    }

    request.post({url: url, body: args, json: true}, function (error, response, body) {
      handler.handleResponse.onContactUpdated(error, response, body, args);
    });
  },

  onConversationCreateCallback: function(args) {
    logEventData(args);
    
    var url = args['iparams']['conversationCreatedWebhookUrl'];
    if(!url) {
      console.log('No webhook url configured for', args['event'], 'event. Not triggering', args , 'backed app webhook', '\n');
      return;
    }

    request.post({url: url, body: args, json: true}, function (error, response, body) {
      handler.handleResponse.onConversationCreated(error, response, body, args);
    });
  }

};
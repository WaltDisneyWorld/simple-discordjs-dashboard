module.exports = {
  "token": "TOKEN", // https://discord.com/developers/applications/ID/bot **DO NOT SHARE THIS WITH ANYONE!**
  
  
  "mongodbUrl": "MONGODB_URL", // Mongodb connection url. If you need one Hosted I reccomend Clever Cloud https://clever-cloud.com/
  
  
  "id": "CLIENT_ID", // https://discord.com/developers/applications/ID/information
  
  
  "clientSecret": "CLIENT_SECRET", // https://discord.com/developers/applications/ID/information
  
  
  
  "domain": "http://localhost", // If using repl.it the repl url.
  
  
  
  
  "port": 8080
};

/**
 * !!!
 * You need to add a redirect url to https://discord.com/developers/applications/ID/oauth2.
 * Format is: domain:port/callback example http://localhost:8080/callback
 * - Do not include port if the port is 80.
 * !!!
 */

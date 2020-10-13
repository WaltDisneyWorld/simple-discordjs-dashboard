# Discord Bot Dashboard
Is a very simple, no-css bot dashboard.
Made with Express, MongoDB, Discord.JS.

## Discord Server
You can join my discord server [here](https://discord.gg/rk7cVyk).
## Features 
* Custom Prefix
* Main Page
* Server Selection Page
* Settings Edit Page
* Dynamically rendered with ejs templating engine
* Ping Command

## Setup
1) Clone this repository locally.
```
git clone https://github.com/MrAugu/discord-bot-dashboard
```
2) Rename `_config.js` to `config.js`.
4) Fill the required values.
3) Install all of the required modules.
```
npm install
```
4) Add the callback url to the bot's OAuth page. (see more in config.js)
5) Start the dashboard.
```
node index
```
[![Run on Repl.it](https://repl.it/badge/github/MrAugu/simple-discordjs-dashboard)](https://repl.it/github/MrAugu/simple-discordjs-dashboard)
# Getting Your Token & More
# Getting started with OAuth2

OAuth2 enables application developers to build applications that utilize authentication and data from the Discord API. This can be used to create things such as web dashboard to display user info, fetch linked third-party accounts like Twitch or Steam, access users' guild information without actually being in the guild, and much more. OAuth2 can greatly extend the functionality of your bot if used correctly.

## A quick example

###  Setting up a basic web server

Most of the time, OAuth2 is used in websites to get information about its users from an external service. In this example, you will use Node.js' built-in `http` module to create a web server to use a user's Discord information to greet them. First, create a file named `index.js` which will be used to start the server.

```js
const http = require('http');
const fs = require('fs');
const port = 53134;

http.createServer((req, res) => {
	let responseCode = 404;
	let content = '404 Error';

	if (req.url === '/') {
		responseCode = 200;
		content = fs.readFileSync('./index.html');
	}

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

	res.write(content);
	res.end();
})
	.listen(port);
```

Right now, you have designated that the contents of an `index.html` file will be served to the user when they visit the root domain, so create an `index.html` file in the same directory with the following contents.

```html
<!DOCTYPE html>
<html>
<head>
	<title>My First OAuth2 App</title>
</head>
<body>
	<div id="info">
		Hoi!
	</div>
</body>
</html>
```

You can start your server with `node index.js`. Once you start it, try connecting to http://localhost:53134 and you should see "Hoi!".

### Getting an OAuth2 url

Now that you have your web server up and running, it's time to get some information from Discord. Head over to [your Discord applications](https://discord.com/developers/applications/) and click "Create an application", where you'll be greeted with the following page:

![Create an application page](https://discordjs.guide/assets/img/1ch98sm.e5c9d28f.png)

Take note of the `client id` field, the `client secret` field, and the "OAuth2" link on the left side of the page. For now, click on "OAuth2" and add a redirect url to `http://localhost:3000/login` like so:



![img](https://discordjs.guide/assets/img/9fejia2.57295b42.png)

Next Go to the Bot Section: 
![img](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-8.jpg)

Go ahead and click add bot
![img](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-9.jpg)

Go click "Yes"
![img](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-10.jpg)

You should not see a token option. Go ahead and click "Copy Token" 
![img](https://cdn.writebots.com/wp-content/uploads/2019/06/discord-bot-token-11.jpg)

Once you've added your redirect url, you will want to generate an OAuth2 url. Lower down on the page, you can conveniently find an OAuth2 Url Generator provided by Discord. Use this to generate a url for yourself with the `identify` scope.

![img](https://discordjs.guide/assets/img/9fejia2.57295b42.png)

The `identify` scope will allow your application to get basic user information from Discord. A list of all scopes can be found [here](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes).

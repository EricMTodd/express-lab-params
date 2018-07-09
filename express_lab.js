console.log("express_lab.js is running...");


// SETUP //
const express = require("express");

const app = express();

app.listen(3000, () => {
	console.log("express_lab.js is listening on port 3000");
});


// GREETINGS //
app.get("/greeting/", (req, res) => {
	res.send("The cycle ends here. We must be better than this.");
});

app.get("/greeting/:name", (req, res) => {
	console.log(req.params);
	res.send(`What's up ${req.params.name}`);
});


// TIP CALCULATOR //
app.get("/tip/:total/:tipPercentage", (req, res) => {
	let total = req.params.total * req.params.tipPercentage/100;
	console.log(req.params);
	res.send(`Here's your total: ${total}`);
});


// MAGIC 8 BALL //
app.get("/magic/:question", (req, res) => {
	const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
	let randomResponse = (Math.floor(Math.random() * response.length));

	console.log(req.params);
	console.log(randomResponse);
	res.send(`${req.params.question}? Answer: ${response[randomResponse]}`);
});


























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


























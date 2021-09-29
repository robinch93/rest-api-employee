const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const routes = require('./routes')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes(express.Router()))

app.listen(port,() => {
    console.log(`REST API listening on port ${port}`)
})

app.use(function(error, req, res, next) {
	res.status(error.status || 500);
	res.json({
		error: {
			status: error.status,
			detail: error.message
		}
	})
});

app.get('/', (req, res) => {
    res.json({ status: "Ready to serve" })
})




const server = require('express');
const app = server();
const port = 8666

app.get('*',  (req, res) => {
	res.status(200).send({
	'message': 'our code works ooooo'
	 })
});

app.listen(port, () => {
	console.log('app is running on port 8666');
})

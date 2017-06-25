const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database('data/aurelia.db');
const express = require('express');
const bodyParser = require('body-parser');

db.serialize(() => {
	//db.run('DROP TABLE IF EXISTS users');
	//db.run('CREATE TABLE IF NOT EXISTS users (fname TEXT, lname TEXT, phone TEXT, email TEXT)');
	//db.run('INSERT INTO users (fname, lname, email, phone) VALUES ("John","Tolkein", "tolkien@inklings.com", "867-5309"),("Clive","Lewis", "lewis@inklings.com", "867-5309"), ("Owen","Barfield", "barfield@inklings.com", "867-5309"), ("Charles","Williams", "williams@inklings.com", "867-5309"), ("Roger","Green", "green@inklings.com", "867-5309")');
});

const restApi = express();
restApi.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
restApi.use(bodyParser.json());
restApi.use(bodyParser.urlencoded({extended: true}));
restApi.get('/users', (req, res) => {
	let data;
	db.all('SELECT ROWID, * FROM users', (err, row) => {
		if(err) {
			console.log(err);
			return res.send(err);
		}

		res.json({"users" : row});
	});
});

restApi.get('/users/:id', (req, res) => {
	let id = req.params.id;
	db.all(`SELECT ROWID, * FROM users WHERE rowid = ${id}`, (err, row) => {
		if(err) {
			console.log(err);
			return res.send(err);
		}

		res.json(row);
	});
});

restApi.delete('/users/:id', (req, res) => {
	let id = req.params.id;
	db.all(`DELETE FROM users WHERE rowid = ${id}`, (err, row) => {
		if(err) {
			console.log(err);
			return res.send(err);
		}

		res.json([{rowid: id}]);
	});
});

restApi.post('/users/:id', (req, res) => {
	let id = req.body.id;
	let test = db.run(`UPDATE users SET fname = '${req.body.firstName}', lname = '${req.body.lastName}', phone = '${req.body.phoneNumber}', email ='${req.body.email}' WHERE ROWID = ${req.body.id}`, (err, row) => {
		if(err) {
			console.log(err);
			return res.send(err);
		}
		db.all(`SELECT *,ROWID from users WHERE ROWID = ${id}`, function (err, row) {
			if(err) {
				console.log(err);
				return res.send(err);
			}
			res.json(row);
		});
	});
});

restApi.put('/users/new', (req, res) => {
	let db_res = db.run(`INSERT INTO users (fname, lname, email, phone) VALUES ("${req.body.firstName}", "${req.body.lastName}", "${req.body.email}", "${req.body.phoneNumber}")`, function (err, row) {
		if(err) {
			console.log(err);
			return res.send(err);
		};
		res.json([{rowid: this.lastID, fname: req.body.firstName, lname: req.body.lastName, email: req.body.email, phone: req.body.phoneNumber}]);
	})
})

restApi.listen(3000);

console.log("Submit GET or POST to http://localhost:3000/users");

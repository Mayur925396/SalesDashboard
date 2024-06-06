const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { database, ref, get, child } = require('./firebase');
const bodyParser = require('body-parser');



// Middleware to handle CORS and JSON responses
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});




// Body parser middleware
app.use(bodyParser.json());
app.use(express.json());

// Basic route
app.get('/', async (req, res) => {
    try {
        res.send('Hello node');
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});






app.get('/getData', async (req, res) => {
    try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, "db"));
        if (snapshot.exists()) {
            res.status(200).json(snapshot.val());
        } else {
            res.status(404).send('No data available');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}),


    app.get('/MonthlyRevenueData', async (req, res) => {
        try {
            const dbRef = ref(database);
            const snapshot = await get(child(dbRef, "db2"));
            if (snapshot.exists()) {
                res.status(200).json(snapshot.val());
            } else {
                res.status(404).send('No data available');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }),
    app.get('/TopSellingProducts', async (req, res) => {
        try {
            const dbRef = ref(database);
            const snapshot = await get(child(dbRef, "db3"));
            if (snapshot.exists()) {
                res.status(200).json(snapshot.val());
            } else {
                res.status(404).send('No data available');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    })


app.get('/user_preferences', async (req, res) => {
    try {
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, "preferences"));
        if (snapshot.exists()) {
            res.status(200).json(snapshot.val());
        } else {
            res.status(404).send('No data available');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.put('/user_preferences', async (req, res) => {
    try {
        const { key, value } = req.body;
        const dbRef = ref(database, `preferences/${key}`);
        await update(dbRef, value);
        res.status(200).send('Preference updated successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Node Server Listening on Port: ' + port);
    }
});

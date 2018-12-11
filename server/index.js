const express = require('express');
const {json} = require('body-parser');
const axios = require('axios');
const cors =  require('cors');
const app = express();
const {info, addfacts, delefacts} = require('./controller/controller')

app.use(json());
app.use(cors());

app.get("/api/activities", info)
app.post("/api/activities", addfacts)
app.delete("/api/activities/:id", delefacts)

const port = 3003;
app.listen(port, () => {console.log(`Listening on port ${port}`);})
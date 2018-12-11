const axios = require('axios');
let facts =[];


const info = (req, res) => {
    axios.get('https://api.arcsecond.io/activities')
    .then(response => {       
        facts = response.data
     })
     .then(response => {
         res.send(facts)
     })
    .catch(err =>{
        console.log(err);
        
    })
}

const delefacts = (req, res, next) => {
    console.log(req.params.id);
    
    const id = req.params.id;
    let index = facts.findIndex( fact => fact.id === +id);
    facts.splice(index, 1);
    res.send(facts);
}

const addfacts = (req, res, next) =>{
    facts.unshift(req.body);
    res.send(facts);
}







module.exports={
    info,
    delefacts,
    addfacts
}
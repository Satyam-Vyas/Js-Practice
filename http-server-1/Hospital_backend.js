const express = require("express");
const app = express();
const BodyParser = require("body-parser");

const users = [{
    name:"John",
    kidneys:[{
        healthy: true,
    }]
}]

app.use(BodyParser.json());

app.get('/',function(req,res){
    const Johnkidneys = users[0].kidneys;
    const numberOfKidneys = Johnkidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(Johnkidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.post('/',function(req,res){
    const isHealthy = req.body.healthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.send("Done!");
})

app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

function UnhealthyKidneyPresent(){
    let UnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            UnhealthyKidney = true;
        }
    }
    return UnhealthyKidney;
}

app.delete('/',function(req,res){
    if(UnhealthyKidneyPresent()){
        let newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({});
    }
    else{
        res.status(411).json({
            msg: "You don't have any unhealthy kidneys"
        })
    }
})

app.listen(3000,function(){
    console.log("Server is listening on port 3000.")
})
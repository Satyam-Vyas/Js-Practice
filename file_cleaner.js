const fs = require('fs');

fs.readFile("b.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }
    else{
        data = data.replace(/\s+/g, ' ').trim();
        fs.writeFile("b.txt",data,{
            encoding: "utf-8",
            flag: 'w',
        },function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Write Operation Performed Succesfully!");
            }
        })
    }
})
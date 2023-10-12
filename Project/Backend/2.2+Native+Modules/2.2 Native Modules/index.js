const fs=require("fs");
 
// fs.writeFile("massge2.txt","Hellow from node js ",(err) => {
//     if(err) throw err;
//     console.log("The file Has been saved!");
//  });

 fs.readFile("massge2.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
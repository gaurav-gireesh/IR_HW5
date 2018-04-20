//  importing the modules to make this server app run

const   express     =   require('express');
const   path        =   require('path');
const   body_parser =   require('body-parser');
const   port        =   3000;
const   routes      =   require('./routes/server_routes');
const   cors        =   require('cors');
const     fs        =   require('fs');

const speller       =   require('./heplers/speller');

//Configuring middleware

var server_app  =   express();


//static directory

server_app.use(express.static(path.join(__dirname,'public')))

server_app.use(body_parser.json());

server_app.use(body_parser.urlencoded({extended:true}));

server_app.use(cors());



//search api route

server_app.use('/api',routes);





/****   app default route ****/
server_app.get('/',(req,res)=>
{
    res.setHeader('Content-type','text/html');
    res.end('<h1>The Server app is running:     Default Route working all good!</h1>');
});




// Here we are pre-populating the Map which holds the mapping from absolute html file paths stored locally to their web urls

contents=fs.readFileSync(path.dirname(require.main.filename)+"/public/abshtml2url.txt","utf-8");
console.log(contents.split("\n").length);

let docs = contents.split("\n");
let lendocs   = docs.length;
let map2files ={    };
for(var i=0;    i<lendocs;  i++)
{
    line=String(docs[i]);
    line0 = line.split(",")[0];
    line1=   line.split(",")[1];
    map2files[line0]=line1;
}

//Now prepopulating the speler's trainer here...
// speller.train(fs.readFile(path.dirname(require.main.filename)+"/public/big1.txt","utf-8",(err,data) => {
//     console.log(err);
//     if(err) throw err;
//     console.log(data);
//     return data;

// }));

fs.readFile(path.dirname(require.main.filename)+"/public/big_1.txt","utf-8",(err,data) => {
    if(err) throw err;
    speller.train(data);
    console.log("Speller trained!!!!");
    module.exports.speller=speller;

});
//console.log("Spellcheker trained....SUCCESS!");
console.log("In server "+speller.correct('migate'));

 //starting the app
server_app.listen(port,()=>
{
    console.log("Server app started successfully on port "+port);
})
module.exports.mymap    = map2files;
//module.exports.speller  = speller;
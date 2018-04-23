/**
 * @description Importing the necessary modules 
 */
const express   = require('express');
const router    = express.Router();
const solr =   require('solr-client');

const fs =      require('fs');
const path =    require('path');
const map2files = require('../server');
const speller  = require('../server');
const config = require('../config/config');


/**
*   @description Apache Solr configuration
 * 
 * */

const solr_host     =   config.solr_host
const solr_port     =   config.solr_port;
const solr_core     =   config.solr_core;
const solr_protocol =   config.solr_protocol;

//Instantiating the client

var client = solr.createClient(
    {
        core:solr_core,
        host:solr_host,
        port:solr_port
    });



 




/********** This comes in from the client  ***********/


//test solr url here...
//              http://localhost:8983/solr/newsday_6874110701/select?q=_text_:french


/***********    Default Route for the Search API on the Server side  ************/

router.get('/',(req,res)=>
{
    res.setHeader('Content-type','text/html');
    res.send("<h2><i>Search APIs working...</i></h2>");
});





/****  The search route that invokes Apache Solr API  WITHOUT PAGE RANK*/
router.get('/search/:keyword',(req,res)=>
{
   
    let q_term = req.params.keyword;
    let solr_query = 'q='+'_text_:'+q_term;


    var query = client.createQuery().q({
        '_text_': q_term
      }).hl({'fl':'*','fragsize':0,'tag.pre':'<em><b>','tag.post':'</b></em>'});
    client.search( query, function(err, obj){
	if(err){
		console.log(err);
	}else{
        
        //res.json(obj);
        
        numDocsReturned=obj['response']['docs'].length;
        console.log("Number returned"+numDocsReturned);
       
        docsReturned = obj['response']['docs'];
      //  console.log(docsReturned[0]['id']);
        var i = 0;
        
        for(i=0;i<numDocsReturned;i++)
        {  
            abspath = docsReturned[i]['id'];
            
            
             line1=map2files.mymap[abspath];
             newObj=obj['response']['docs'][i];
             newObj['gg_web_url']=line1;
             obj['response']['docs'][i]=newObj;
             

            
             
            
        }
        res.json(obj);
        }
       

	}
);
});




/****  The search route that invokes Apache Solr API */
router.get('/search_with_pageRank/:keyword',(req,res)=>
{
   
    let q_term = req.params.keyword;
    let solr_query = 'q='+'_text_:'+q_term;


    var query = client.createQuery().q({
        '_text_': q_term,
        
      }).hl({'fl':'*','fragsize':0,'tag':{'pre':'<em><b>','post':'</b></em>'}}).sort({ pageRank :  'desc' });
    client.search( query, function(err, obj){
	if(err){
		console.log(err);
	}else{
        
        //res.json(obj);
        
        numDocsReturned=obj['response']['docs'].length;
        console.log("Number returned"+numDocsReturned);
       
        docsReturned = obj['response']['docs'];
      //  console.log(docsReturned[0]['id']);
        var i = 0;
        
        for(i=0;i<numDocsReturned;i++)
        {  
            abspath = docsReturned[i]['id'];
           
           line1=map2files.mymap[abspath];
             newObj=obj['response']['docs'][i];
             newObj['gg_web_url']=line1;
             obj['response']['docs'][i]=newObj;
            
        }
        res.json(obj);
        }
       

	}
);
});

/**
 * @author  Gaurav Gireesh
 * @param   keyword for which suggestions are required
 * @returns 5 suggestions for the given keyword
 * @throws No Exception- Solr related exceptions 
 */


/****  The suggest route that invokes Apache Solr Suggetser API  WITHOUT PAGE RANK*/
router.get('/suggest/:keyword',(req,res)=>
{
    // console.log("Coming here...");
   
    let q_term = req.params.keyword;
    if(q_term.length>0)
        q_term = q_term.toLowerCase();
    let solr_query = 'q='+'_text_:'+q_term;


   

    let query='q='+q_term
    client.get( 'suggest',query, function(err, suggestedResults){
	if(err){
		    console.log(err);
    }
    else{
       
       
        res.json(suggestedResults['suggest']['suggest'][q_term])

    
    }
       

	}
);
});





/** route to test the seller */
router.get('/spell/:word', (req,res) => {
    let word = req.params.word;
    res.json({correct:speller.speller.correct(word)});
});




/****   Exporting the Routes in here*****/
module.exports  =   router;
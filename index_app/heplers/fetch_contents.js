/**
** @description This module reads the content of the html file for relevant snippet generation
*/
const fs      =             require('fs');
const config  =             require('../config/config');
const path    =             require('path');


/**
 * Getting the crawl data location from the configuration of the application
 */
const crawl_data_location = config.crawl_data_location;


/**
 * 
 * @param {This is the id of the html file} id 
 * @param {This is the keyword against which we will match the content in the webpage} keyword 
 */
module.exports.fetch_contents = function(id,keyword) {

    //creating the file name here using the path module
    let flnm = path.join(crawl_data_location,id);

    console.log("The file being fetched is :"+ flnm);

    fs.readFile(flnm,"utf-8", (err,data ) => { 

        if(err) throw err;


        //got the data here.. defining the regex to match the sentence which contains the keyword

    });



};

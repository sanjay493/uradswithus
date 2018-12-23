var technewsJSON = require('../technews.json');


//Home1
exports.home = function(req,res){
    
    var technews = technewsJSON.technews;
    var headline = technews.headline;
    var para1 = technews.para1;
    var poster = technews.poster;
    var link = technews.link;
    res.render('home',{
        technews:technews,
        title:"Welcome to Webs News",
        headline:headline,
        para1:para1,
        poster:poster,
        link:link
    });
        
        };
//Home-2
        



// fitness centers

//not found
exports.notFound=function(req,res){
var technews = technewsJSON.technews;    
    res.render('notFound',{
                technews:technews,
                title:"This is not the page you are looking for"
            });
};
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
 var url = req.url;
 console.log('url', url)
 if(url ==='/'){
 	// call function to fetch list of employees from emp.js
    res.write('<h1>get list of all employees<h1>'); //write a response
    res.end(); //end the response
 }
 else if(url === '/project'){
 	// call function to fetch list of project from project.js
 	res.write('<h2>Project1<h2>')
 	res.end(); //end the response
 } else if(url === '/worker'){
 	// call function to fetch list of worker from worker.js
 	res.write('<h2><h2>')
 	res.end(); //end the response
 }
}).listen(8081, function(){

 console.log("server start at port 8081"); //the server object listens on port 3000
});


const http = require("http");
const getReq = require("./methods/getRequest")
const postReq = require("./methods/postRequest")
const putReq = require("./methods/putRequest")
const deleteReq = require("./methods/deleteRequest")
let movies = require("./data/movies.json")
// require("dotenv").config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) =>{
    req.movies = movies;

    switch (req.method) {
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
    
        default:
            res.statusCode = 404;
            res.setHeader("content-type", "application/json");
            res.write(JSON.stringify({ titel: "Not Found", message: "Route not found"}));
            res.end();
            break;
    }
    
});

server.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}`);
} );
let statuscode=404;

let Category =statuscode<300?"Success":
              statuscode<400?"Redirect":
              statuscode<500?"Client Error":
              "Server Errror";

console.log(Category);
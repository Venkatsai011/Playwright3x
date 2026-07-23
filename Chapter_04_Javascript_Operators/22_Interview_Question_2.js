let environment="Staging";

let baseUrl=environment ==="Prod"?"https://www.prod.com":"https://www.staging.com";
console.log(baseUrl);
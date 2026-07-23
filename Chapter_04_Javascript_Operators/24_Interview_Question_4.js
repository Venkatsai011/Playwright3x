let responseTime=850;
let sla=1000;
let slastatus=responseTime<sla?"within SLA":"SLA Breached";
console.log(slastatus);
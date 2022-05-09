
var d = new Date("0");
var d = new Date("sep 05 2017");
var d = new Date("05/02/1997");
var d = new Date("1997");
d.toLocaleString("en-US", {timeZone: "America/New_York"});
// var d = new Date();
// var d = new Date(milliseconds);
// var d = new Date(dateString);
// var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
console.log(d)
console.log(d.getFullYear())
console.log(d.getDate())
console.log(d.getDay())

diasDaSemana = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];

console.log(diasDaSemana[d.getDay()])

console.log(d.getHours())


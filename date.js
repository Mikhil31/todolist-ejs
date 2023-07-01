module.exports.getDate= getDate;

function getDate() {
    let date = new Date();
  const options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };

  let day = date.toLocaleDateString("en-us", options);
  return day;
}
module.exports.deez= deez;
function deez(){
   var deezz= "deez hello";
   return deezz;
}
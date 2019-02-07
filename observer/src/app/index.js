import  Model  from './Model.js';
import  Controller  from './Controller.js';
import  View  from './View.js';

function main(){
  let model = new Model();
  let controller = new Controller(model);
  let view = new View(controller);
  //console.log(document.getElementById("heading"));
}
main();

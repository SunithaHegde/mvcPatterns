export default class Controller {
  constructor(model){
    this.model = model;
    this.clickHandler = this.clickHandler.bind(this);
  }
  handleEvent(e){
    e.stopPropagation();
    //let self = this;
  //  console.log(this.clickHandler);
    switch(e.type){
      case "click":
        this.clickHandler(e.target);
      break;
      default: console.log("Something else");
    }
  }
  clickHandler(elm){
    //this.model.heading = "World";
    this.model.notifyAll();
    //elm.innerText = this.model.heading;
  }
  getModelHeading(){
    return this.model.heading;
  }
}

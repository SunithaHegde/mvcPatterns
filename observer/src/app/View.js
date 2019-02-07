export default class View {
  constructor(controller){
    this.controller = controller;
    this.heading = document.getElementById("heading");
    this.counter = document.getElementById("conter");

    this.heading.addEventListener('click', () =>{
      controller.handleEvent(event);
    });
    this.controller.model.registerObserver(this);
  }
  update(data){
    this.counter.innerText = data.counter;
  }
}

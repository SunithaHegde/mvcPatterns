export default class Model {
  constructor(){
    this.heading = "Hello";
    this.observers = [];
    this.counter = 0;
  }
  registerObserver(observer){
    this.observers.push(observer);
  }
  notifyAll(){
    this.counter++;
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

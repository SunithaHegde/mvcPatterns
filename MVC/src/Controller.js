export default class Controller {
  constructor(model){
      this.model = model;
  }
  getUserList(){
    return this.model.getUserList();
  }
  clickUserHandler(val){
    this.model.changeState(val);
  }

}

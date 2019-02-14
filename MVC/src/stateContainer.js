export default class StateContainer{
  constructor(){
    this.state ={};
  }
  changeState(data,name){
    this.state = data.filter((val)=>{
      return val.name.toLowerCase() === name.toLowerCase();
    })[0];
  }
}

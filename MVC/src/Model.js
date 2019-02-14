import CurrentState from './stateContainer';
export default class Model {
  constructor(){
    this.userState = new CurrentState();
    this.userValue = this.userState.state;
    this.observers = [];
    this.userList = null;
  }
  registerObserver(observer){
    this.observers.push(observer);
  }
  notifyAll(){
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
  getUserList(){
    return new Promise((resolve,reject) => {
				const HTTP = new XMLHttpRequest();
				HTTP.responseType = 'json';
				HTTP.open("GET","https://api.myjson.com/bins/tff5s");
				HTTP.send();
				HTTP.onreadystatechange = (e) => {
					if (HTTP.readyState == 4 && HTTP.status == 200) {
            this.userList = HTTP.response["People"];
						resolve(this.userList);
					}
				}
			});
  }
  changeState(val){
    this.userState.changeState(this.userList,val);
    this.notifyAll();
  }
}

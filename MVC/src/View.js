export default class View{
  constructor(controller){
    this.controller = controller;
    this.controller.model.registerObserver(this);
    this.controller.getUserList().then(()=>{
      this.createUserComponent();
    });
  }
  createUserComponent(){
			let documentFragment = document.createDocumentFragment();
			this.controller.model.userList.forEach((val) => {
				let taskComponent = document.createElement('contact-item');
				taskComponent.setAttribute("data-name",val.name);
				taskComponent.setContactDetails(val.name,this.controller);
				documentFragment.appendChild(taskComponent);
			});
			document.getElementById("contactList").appendChild(documentFragment);
		}
    update(model){
      console.log(model.userState.state);
    }
}
customElements.define('contact-item',
  class extends HTMLElement {
    constructor() {
      super();
	    this.userDetails = "";
		  let contact = this.getContactTemplate();
		  let shadow = this.attachShadow({mode: 'open'});
		  shadow.innerHTML = contact;
		  this.contactComponent = this.shadowRoot.querySelector('.contactName');
		  this.addEventListener("click",{
			handleEvent:this.contactHandler,
			taskScope:this
		},false);

	}
	setContactDetails(name,controller){
		this.contactComponent.textContent=name;
		this.controller = controller;
	}
	contactHandler(){
		let contactDetail = document.createElement("contact-details");
    this.taskScope.controller.clickUserHandler(this.taskScope.contactComponent.textContent);
    contactDetail.setDetails(this.taskScope.controller.model.userState.state);
		document.getElementById("contactDetailsContainer").innerHTML = "";
		document.getElementById("contactDetailsContainer").appendChild(contactDetail);
		//clickedElement != undefined && clickedElement.classList.remove("active");
		//clickedElement = this.taskScope.contactComponent;
		//this.taskScope.contactComponent.classList.add("active");
	}
	getContactTemplate(){
		return `<style>
			.contactName {
				padding: 16px;
				border-bottom: solid 2px #f3f3f3;
				transition: all 0.6s ease;
				height:30px;
			}

			.contactName:hover {
				background: #c3ccdd;
				border-radius: 20px;
			}
			.right{
				border: solid black;
				border-width: 0 3px 3px 0;
				display: inline-block;
				padding: 3px;
				display:none;
				transform: rotate(-45deg);
				-webkit-transform: rotate(-45deg);
			}
			.active {
					background: #e0e4ea;
			}
			</style>
			<div class="contactName"><i class="right"></i></div>
			`
	}
});

customElements.define('contact-details',
	class extends HTMLElement {
		constructor() {
			super();
			let shadow = this.attachShadow({mode: 'open'});
			shadow.appendChild(document.getElementById("contactDetailTemplate").content.cloneNode(true));
			this.imageContainer = this.shadowRoot.querySelector('#profilePic');
			this.ratingSContainer = this.shadowRoot.querySelector('#ratings');
			this.descriptionContainer = this.shadowRoot.querySelector('#contactDescription');
			this.tableContainer = this.shadowRoot.querySelector('#contactTable');
			this.sendMessage = this.shadowRoot.querySelector('.button');
			this.sendMessage.addEventListener('click',()=>alert("Message Sent!!"));
		}
		setDetails(user){
			this.imageContainer.src  = user.img;
			this.descriptionContainer.textContent = user.Description;
			let ratingList ="";
			for(let i=1;i<=5;++i){
				if(i <= user.rating){
					ratingList+=`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABpElEQVRIieXWQWsTQRjG8d+GUkJPxVMJUnIQKR6keC6i9S5+AA9+Kw8iCFL6KUR6KOJJigoGDyqI0It40xCS8ZC3Zdhskt02aQ59lxdmZ555/jPw7uwUSbKKaK2Eei3Ba1WdhaKNDrq4iRG+4Dt+J2lU0rdwI/Q7xhv6GfpfSfo3AUmlJya+wClSln0c4ynWM/169B1jUJpzGl63JziZQQt76GFYMigv4DVuRR5E3zT9MDz30KoCb+JohkGeA7zD+zmLzPMIm1XgJzUNLpOPz3h5VT+cKIDFx6OzRg7evgLwOSMHjyqES4scfHIFvE/nray4dvHX8gqrj3tVVd3GS/U/jyY5DO/2BDjgd/B5CeCP2Kk8uTL4A/xYIPQb7k89MjPwWsB7C4B+xb7sqJwKLu38MvAe9qf6TxsIeBcfLgA9QXem96zBgN/FG/WqfYi32J3rO08Q8O0a8GFoZu60ETjgWzg0+bNP0XeIrdp+dYUB7xhfAgYl6AE6jbyaiAO+gefGR2A/2htNfYowaxSFYhPP4vVVkv409rgIeBFx/S70KwP/B0/WfTGYl4nHAAAAAElFTkSuQmCC"/>`;
				} else {
					ratingList+=`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC7ElEQVRIieWWv2tUQRDHP98jBLEQsbCQZwj3jmBpIUEsQsTeNCJCioipxDJ/gYWVpBYLfxQikkbwDxALsbJRJISQO0I8RCzESiSE97W43Zd9797FiwgpnGbvdmfnM292ZnZlzFFI60io/yV4omnyc7d3TPYZpGnbGVIh2AC2ge9Z3i5S/X6317J9StK04ZzsFlLfsC34kuXtX3WG6snV7/bOASuGq8BpAbYR7BreS3oArGV5ezfoTwLXsW8jzQIT2CCB/Q3pFXA/y9ubjeD+VreFdAl4BHRIjsE2kuLfXew1w90wdxe4ZpjU/gYsIRtDIdhCWsZ+l3Xyoh7qE8A97Jng7cBrQFIJtz0p6YagY7sl6QLQChAEONkvaGHPYN+ztAD8gGpyzRvmHGDl6EFEREUmsC8KZm23UicJXxoj5DCHNCeYiwb2wdLlGKbBGbg0FMdw1hVR4mB9LTocnTdcGQbDlBJQmnKOm9VkerREYOLE1BDYUATtCjB6XZ57zSFSndpajEaTuyVY8CEqx1FxUxJG1x2KYQz70rX4O+YL9qchMPBK8At7UAZNXy6VDoWJMnmUOFsuVxNzF+llE3gDeI5UREhd6veYR+g16BbAM2B9CBza2iqwUT9PJRltu2wQVZKrayEZQ/jXbd9PW2flksjy9jpwB9g5sI5jrSawUXUMbMu+c7aTb6Qmmm6nt7aXBJtl8YfxsHVse0uwjPS2Dhm6JKL0u7154KFhJlgpv6ZyFOF3bJdJu920fftsJ3/dZH8kOMCngZfY5+O5pcbL5KpVgKSPwEKWt7dH2T7wIRA2LhleKzSYA+tYKiS9sb10EPSPXxyl3+1NAU+A+dLZmLX7t1Yh6Q2w/CcojPn0yfL2DrAIrAF7cT7pdHsarC2OAx0bHOBfGbxMXgB7SR3vYa8hrQSdsWSsUKfS3+oeR1rFvjWwoMfYK1kn/3kYO4cGA/S7vZO2b4Ye/TTL2z8Oa+OvwP9C/r8H/ZGBfwNniYY2VnTuCwAAAABJRU5ErkJggg==">`;
				}
			}
			this.ratingSContainer.innerHTML = ratingList;
			this.createTable(user);
		}
		createTable(user){
			this.tableContainer.innerHTML = "";
			let tableBody = document.createElement("tbody");
			tableBody.innerHTML = `<tr style="background:#c3ccdd;"><td>Likes</td><td>Dislikes</td></tr>`;
			let numberOfRows = user.Likes > user.Dislikes ? user.Likes.length : user.Dislikes.length;
			for (let i = 0; i < numberOfRows; i++) {
				let row = document.createElement("tr");
				for (let j = 0; j < 2; j++) {
				  let cell = document.createElement("td");
				  let textContent = j == 0? user.Likes[i]: user.Dislikes[i];
				  textContent = textContent == undefined?"":textContent;
				  let cellText = document.createTextNode(textContent);
				  cell.appendChild(cellText);
				  row.appendChild(cell);
				}

			tableBody.appendChild(row);
		  }
		  this.tableContainer.appendChild(tableBody);
		}
	}
);

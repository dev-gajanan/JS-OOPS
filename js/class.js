class User {
	#amount = 200; //private property
	_a = 2; //prorected property
	constructor(email, name) {
	  	this.email = email;
	  	this.name = name;
	  	this.#getAmount();
	  	this._getA();
	}

	#getAmount() { //private method
		console.log("Private property amount: ", this.#amount);
	}

	_getA() { //protected method
		console.log("Protected property a: ", this._a);
	}

	login() {
		console.log(this.email, ' Just logged in');
	}
	logout() {
		console.log(this.email, ' Just logged out');
	}
}

var userOne = new User('John.email@gmail.com', 'John Deo');
var userTwo = new User('someone@gmail.com', 'Someone');

userOne.login();
//userTwo.logout();
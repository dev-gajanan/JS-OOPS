function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
}

User.prototype.login = function() {
	this.online = true;
	console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
	this.online = false;
	console.log(this.email, 'has logged out');
}

//Prototype inheritance
function Admin(...args) {
	User.apply(this, args);
	this.role = "super admin";
}

//inherit the methods of User class
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
	users = users.filter(user => {
		return user.email != u.email;
	});
}

var userOne = new User('John.email@gmail.com', 'John Deo');
var userTwo = new User('someone@gmail.com', 'Someone');
var admin = new Admin('admin@gmail.com', 'Admin');
var users = [userOne, userTwo, admin];

console.log(User.prototype);
console.log(admin);
console.log(userOne);
userTwo.login();
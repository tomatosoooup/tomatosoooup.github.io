(function(window){
	var sayHello = {};
	var speakWord = "Hello,";

	sayHello.speak = function (name) {
	  console.log(speakWord + " " + name + " !");
	}
	window.sayHello = sayHello;
})(window);

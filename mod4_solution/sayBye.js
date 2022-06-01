(function(window){
	let sayBye = {};
	let speakWord = "Good Bye,";

	sayBye.speak = function (name) {
	  console.log(speakWord + " " + name + " !");
	}

	window.sayBye = sayBye;
})(window);
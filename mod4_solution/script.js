/* what should this script do
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function(window) {
    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (let i = 0;i < names.length;i++) {
      let firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === "j") {
        sayBye.speak(names[i]);
      } else {
        sayHello.speak(names[i]);
      }
    }
  })(window);
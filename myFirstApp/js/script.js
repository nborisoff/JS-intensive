function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ['ruby on rails', 'sql', 'html', 'css'];

		for (let i = 0; i < skills.length; i++) {
			document.write ("Я владею " + skills[i] + '<br>');
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Продолжай в том же духе и у тебя все получится!");
		} else {
			alert("Не унывай, у тебя все еще впереди!");
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num*num);
	}

	calcPow(4);
}

myFirstApp("Никита",25);
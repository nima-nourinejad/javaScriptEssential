let count = 0;

function increaseCount() {
	count++;
	displayCount();
	setTimeout(checkCountValue, 0);
}

function displayCount() {
	document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
	if (count === 10) {
	  alert("Your Instagram post gained 10 followers! Congratulations!");
	} else if (count === 20) {
	  alert("Your Instagram post gained 20 followers! Keep it up!");
	}
	else if (count === 0) {
      alert("Followers count has been reset!");
    }
}

const resetFollowers = () => {
	let conf = confirm("Do you want to reset followers count?")
	if (conf) {
        count = 0;
    displayCount();
	setTimeout(checkCountValue, 0);
	}
}
	
var mathx = Math.floor((Math.random() * 100) + 1);;
var mathy = Math.floor((Math.random() * 100) + 1);;
var btn;
var nextBtn;
var correct = 0;

var incorrect = 0;
var cookieCount = 0;
var bigcookieCount = 0;
			
			
console.log(mathy + mathx);
console.log(cookieCount);
function myFunction() {
 	document.getElementById("demo").innerHTML = mathx;        
 	document.getElementById("demo2").innerHTML = mathy;
	
}
    function checkAnswer() {
if (mathx + mathy == document.getElementById("answer").value) {
		 document.getElementById("check").disabled = true;
		 btn = document.createElement("BUTTON");
		 nextBtn = document.createTextNode("Next Question"); 
		 	 btn.appendChild(nextBtn);   
		     document.body.appendChild(btn);
			 btn.id = 'nextBtn';
			 correct += 1;
			 document.getElementById("correctCount").innerHTML = correct;
		document.getElementById('nextBtn').onclick = function(){
				document.getElementById("demo").innerHTML =	mathx = Math.floor((Math.random() * 100) + 1);        
				document.getElementById("demo2").innerHTML =	mathy = Math.floor((Math.random() * 100) + 1);
				document.getElementById("answer").value = "";
				document.getElementById("check").disabled = false;
				btn.parentNode.removeChild(btn);	
				
		}
			 
        } else {
			 incorrect += 1;
			 document.getElementById("incorrectCount").innerHTML = incorrect;
        }
		
	}
	
	function cook() {
		if (correct >= 5){
			correct -= 5;
			cookieCount +=1;
			document.getElementById("correctCount").innerHTML = correct;
			imgCookie = document.createElement("img");
			imgCookie.setAttribute("src", "cookie.png");
			imgCookie.setAttribute("width", "28");
			imgCookie.setAttribute("height", "28");
			imgCookie.setAttribute("alt", "Delicious Cookie");
			imgCookie.setAttribute("id", "yumCookie");
		    document.body.appendChild(imgCookie);
			window.setInterval(
				document.getElementById('yumCookie').value = function(){
					correct += 1;
					document.getElementById("correctCount").innerHTML = correct;
		
				},   2000);
		}
		
	}
	
	function bigCook() {
		if (cookieCount >= 5){
			cookieCount -= 5;
			bigcookieCount +=1;
			document.getElementById("correctCount").innerHTML = correct;
			imgbigCookie = document.createElement("img");
			imgbigCookie.setAttribute("src", "cookie.png");
			imgbigCookie.setAttribute("width", "50");
			imgbigCookie.setAttribute("height", "50");
			imgbigCookie.setAttribute("alt", "Delicious Big Cookie");
			imgbigCookie.setAttribute("id", "bigCookie");
		    document.body.appendChild(imgCookie);
			window.setInterval(
				document.getElementById('yumCookie').value = function(){
					correct += 4;
					document.getElementById("correctCount").innerHTML = correct;
		
				},   2500);
		}
		
	}

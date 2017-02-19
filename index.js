function setText(selector, text) {
	var selector = document.querySelector(selector);
		selector.innerHTML = text;

		// `selector` is string with CSS-like selector
		// `text` - is just string with text we want to change
	// Write your code here
};


function setTextAll(selector, text) {
	// Write your code here
	var selector = document.querySelectorAll(selector);
	for(i = 0; i < selector.length; i++){
		selector[i].innerHTML = text;
	};
};


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");
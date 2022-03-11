const Header = (title, date, temp) => {
	const headerDiv = document.createElement("div");
	headerDiv.classList.add("header");

	const dateSpan = document.createElement("span");
	dateSpan.classList.add("date");
	headerDiv.appendChild(dateSpan);
	dateSpan.textContent = date;

	const titleH1 = document.createElement("h1");
	headerDiv.appendChild(titleH1);
	titleH1.textContent = title;

	const tempSpan = document.createElement("span");
	tempSpan.classList.add("temp");
	headerDiv.appendChild(tempSpan);
	tempSpan.textContent = temp;

	console.log(headerDiv);

	// TASK 1
	// ---------------------
	// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	//  <div class="header">
	//    <span class="date">{ date }</span>
	//    <h1>{ title }</h1>
	//    <span class="temp">{ temp }</span>
	//  </div>
	//
	return headerDiv;
};
Header("BloomTech Times", "March 11, 2022", "50°");

const headerAppender = (selector) => {
	const header = Header("BloomTech Times", "March 11, 2022", "50°");
	const select = document.querySelector(selector);
	select.appendChild(header);
	// TASK 2
	// ---------------------
	// Implement this function taking a css selector as its only argument.
	// It should create a header using the Header component above, passing arguments of your choosing.
	// It should append the header to the element in the DOM that matches the given selector.
	//
};

export { Header, headerAppender };

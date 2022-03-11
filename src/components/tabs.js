import axios from "axios";

const Tabs = (topics) => {
	const arr = topics;
	const topicsDiv = document.createElement("div");
	topicsDiv.classList.add("topics");
	arr.forEach((item) => {
		const itemDiv = document.createElement("div");
		itemDiv.classList.add("tab");
		itemDiv.textContent = item;
		topicsDiv.appendChild(itemDiv);
	});

	// TASK 3
	// ---------------------
	// Implement this function which takes an array of strings ("topics") as its only argument.
	// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
	// then the function returns the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	// <div class="topics">
	//   <div class="tab">javascript</div>
	//   <div class="tab">bootstrap</div>
	//   <div class="tab">technology</div>
	// </div>
	//
	return topicsDiv;
};
// console.log(Tabs(["john", "folly", "foo"]));

const tabsAppender = (selector) => {
	axios.get("http://localhost:5000/api/topics").then((res) => {
		const topicData = res.data.topics;
		const returnTabs = Tabs(topicData);
		const entrypoint = document.querySelector(selector);
		entrypoint.appendChild(returnTabs);
	});

	// TASK 4
	// ---------------------
	// Implement this function which takes a css selector as its only argument.
	// It should obtain topics from this endpoint: `` (test it with a console.log!).
	// Find the array of topics inside the response, and create the tabs using the Tabs component.
	// Append the tabs to the element in the DOM that matches the selector passed to the function.
	//
};

export { Tabs, tabsAppender };

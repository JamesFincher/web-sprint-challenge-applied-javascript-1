import axios from "axios";

const Card = (article) => {
	const cardDiv = document.createElement("div");
	cardDiv.className = "card";

	const headlineDiv = document.createElement("div");
	headlineDiv.className = "headline";
	cardDiv.appendChild(headlineDiv);
	headlineDiv.textContent = article.headline;

	const authorDiv = document.createElement("div");
	authorDiv.className = "author";
	cardDiv.appendChild(authorDiv);

	const imageDiv = document.createElement("div");
	imageDiv.classList.add("img-container");
	authorDiv.appendChild(imageDiv);

	const image = document.createElement("img");
	imageDiv.appendChild(image);
	image.src = article.authorPhoto;

	const authorSpan = document.createElement("span");
	authorDiv.appendChild(authorSpan);
	authorSpan.textContent = `By ${article.authorName}`;

	cardDiv.addEventListener("click", () => {
		console.log(article.headline);
	});

	return cardDiv;
};

const cardAppender = (selector) => {
	const appendMe = document.querySelector(selector);

	axios
		.get("http://localhost:5000/api/articles")
		.then((response) => {
			var dataFinder = response.data.articles;

			const javascriptDb = response.data.articles.javascript;
			const bootstrapDb = response.data.articles.bootstrap;
			const technologyDb = response.data.articles.technology;
			const jqueryDb = response.data.articles.jquery;
			const nodejsDb = response.data.articles.node;

			const currentCatArray = [
				javascriptDb,
				bootstrapDb,
				technologyDb,
				jqueryDb,
				nodejsDb,
			];

			dataFilter(currentCatArray);

			function dataFilter(data) {
				for (let i = 0; i < currentCatArray.length; i++) {
					const data = currentCatArray[i];

					for (let i = 0; i < data.length; i++) {
						const sortedDataArr = data[i];

						const card = Card(sortedDataArr);

						appendMe.appendChild(card);
					}
				}
			}
		})
		.catch((err) => {
			console.log("api didnt work");
		});
};

export { Card, cardAppender };

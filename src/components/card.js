import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement("div")
  const headlineDiv = document.createElement("div")
  const authortDiv  = document.createElement("div")
  const imageContainer = document.createElement("div")
  const image = document.createElement("img")
  const authorNameArea = document.createElement("span")

  cardDiv.classList.add("card")
  headlineDiv.classList.add("headline")
  authortDiv.classList.add("author")
  imageContainer.classList.add("img-container")

  headlineDiv.textContent = article.headline
  image.src = article.authorPhoto
  authorNameArea.textContent = article.authorName

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authortDiv)
  authortDiv.appendChild(imageContainer)
  authortDiv.appendChild(authorNameArea)
  imageContainer.appendChild(image)

  cardDiv.addEventListener("click", () => {
    console.log(article.headline)
  }) 
  return cardDiv

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardsContainer = document.querySelector(selector)
  axios.get("http://localhost:5001/api/articles")
  .then((response) => {
    console.log(response.data.articles)
    // const responseObject = response.data.articles
    const javascriptArray = response.data.articles.javascript
    console.log(javascriptArray)
    javascriptArray.forEach((item) => {
      const obj = {
        headline: item.headline,
        authorPhoto: item.authorPhoto,
        authorName: item.authorName
      }
      const newEl = Card(obj)
      cardsContainer.appendChild(newEl)
    })
    const bootstrapArray =response.data.articles.bootstrap
    const jqueryArray = response.data.articles.jquery
    const technologyArray = response.data.articles.technology
    const nodeArray =response.data.articles.node

    bootstrapArray.forEach((item) => {
      const obj = {
        headline: item.headline,
        authorPhoto: item.authorPhoto,
        authorName: item.authorName
      }
      const newEl = Card(obj)
      cardsContainer.appendChild(newEl)
    })

    jqueryArray.forEach((item) => {
      const obj = {
        headline: item.headline,
        authorPhoto: item.authorPhoto,
        authorName: item.authorName
      }
      const newEl = Card(obj)
      cardsContainer.appendChild(newEl)
    })
    technologyArray.forEach((item) => {
      const obj = {
        headline: item.headline,
        authorPhoto: item.authorPhoto,
        authorName: item.authorName
      }
      const newEl = Card(obj)
      cardsContainer.appendChild(newEl)
    })

    nodeArray.forEach((item) => {
      const obj = {
        headline: item.headline,
        authorPhoto: item.authorPhoto,
        authorName: item.authorName
      }
      const newEl = Card(obj)
      cardsContainer.appendChild(newEl)
    })
  })
  .catch((error) => {
    return error
  })
}

export { Card, cardAppender }

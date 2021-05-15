import axios from "axios";

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

  // Create HTML elements
  const divCard = document.createElement('div');
  const divHeadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImgContainer = document.createElement('div');
  const imgAuthor = document.createElement('img');
  const spanAuthor = document.createElement('span');
  
  // Organize HTML Elements
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImgContainer);
  divImgContainer.appendChild(imgAuthor);
  divAuthor.appendChild(spanAuthor);

  // Add Classes to HTML elements
  divCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author')
  divImgContainer.classList.add('img-container');

  // Assign Content to elements
  divHeadline.textContent = article.headline;
  imgAuthor.src = article.authorPhoto;
  spanAuthor.textContent = article.authorName;

  return divCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(response => {
    
    const cssElem3 = document.querySelector(selector);

    let articlesObj = response.data.articles;
    console.log(articlesObj);

    let articlesKeys = Object.keys(articlesObj);
    console.log(articlesKeys);
    
    articlesKeys.forEach(element => {

      let artclGroup = articlesObj[element]
      console.log(artclGroup);

      artclGroup.forEach(item => {

        const newCard = Card(item)
        cssElem3.appendChild(newCard)

      })      
      
    });
    
  })

}

export { Card, cardAppender }

// const newCard = Card(element);
//           cssElem3.appendChild(newCard);
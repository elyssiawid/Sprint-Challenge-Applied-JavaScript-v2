// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
    const articlesObject = response.data.articles;
    for (var key in articlesObject) {
        let articlesArray = articlesObject[key];
        // console.log(articlesArray);
        articlesArray.forEach(article => {
            // console.log("WHATSUP", article);
            // createCard(article);
            cardsContainer.appendChild(createCard(article))
        });
    }
  })
  .catch(function(error) {
    console.log(error);
  });

function createCard(data) {
    // console.log('DATAAAA', data);
    //created elements
    console.log("a is mean", data);
    const card = document.createElement('div')
    const headline = document.createElement ('div')
    const author = document.createElement('div')
    const imgcontainer = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src', data.authorPhoto)
    const authorname = document.createElement('span')
    //elements with classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgcontainer.classList.add('imgcontainer');
    //append
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgcontainer);
    author.appendChild(img);
    author.appendChild(authorname);
      //add content
    headline.textContent = data.headline;
    authorname.textContent = data.authorName;
    

    //appending div to page
    // card.appendChild(card)
  
    return card
  }
  

  const cardsContainer = document.querySelector('.cards-container')
  console.log(cardsContainer)
//   cardsContainer.appendChild(createCard())
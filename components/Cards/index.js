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


function cardsCreator (object) {

    console.log(object); 

    const card = document.createElement('div'), 
          headLine = document.createElement('div'), 
          author = document.createElement('div'), 
          imgContainer = document.createElement('div'),
          imgSrc = document.createElement('img'), 
          authorsName = document.createElement('span'); 


    card.classList.add('card'); 
    headLine.classList.add('headline'); 
    author.classList.add('author'); 
    imgContainer.classList.add('img-container'); 



    headLine.textContent = object.headline; 
    imgSrc.src = object.authorPhoto; 
    authorsName.textContent = `by ${object.authorName}`; 

    card.append(headLine, author); 
    author.append(imgContainer, authorsName); 
    imgContainer.append(imgSrc); 

    return card; 

}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {

    cardParent = document.querySelector('.cards-container'); 


    response.data.articles.javascript.map(item => { 
        console.log(item)
        cardParent = document.querySelector('.cards-container'); 

        cardParent.append(cardsCreator(item)); 
        
    });     

    response.data.articles.bootstrap.map(item => {
        cardParent = document.querySelector('.cards-container'); 

        cardParent.append(cardsCreator(item)); 
    })


    response.data.articles.bootstrap.map(item => {
        cardParent = document.querySelector('.cards-container'); 

        cardParent.append(cardsCreator(item)); 
    })


    response.data.articles.bootstrap.map(item => {
        cardParent = document.querySelector('.cards-container'); 

        cardParent.append(cardsCreator(item)); 
    })


    response.data.articles.bootstrap.map(item => {
        cardParent = document.querySelector('.cards-container'); 

        cardParent.append(cardsCreator(item)); 
    })
 
})



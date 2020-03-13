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

// for (const [key, value] of Object.entries(object.data.articles)) {
//     console.log(`key is => ${key}, value is => ${value.forEach(item => {console.log(item.authorName)})}`); 
// }

// let obj = object.data.articles; 
    
// for (const [key, value] of Object.entries(obj)) {
//     console.log(`key is ${key} value is ${value.forEach(item => {
//         console.log(item.headline)
//     })}`)
// }

function cardsCreator (object) {

    const newArr = object; 
    let arr = Object.keys(newArr.data.articles);

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
    
    headLine.textContent = arr.map((key) => {
        return {[key]: newArr.data.articles[key].forEach(item => {return item.headline})};
        }); 
    
    imgSrc.src = arr.map((key) => {
        return {[key]: newArr.data.articles[key].forEach(item => { return item.authorPhoto})};
        }); 

    authorsName.textContent = arr.map((key) => {
        return {[key]: newArr.data.articles[key].forEach(item => { return item.authorName})};
        });

    card.append(headLine, author); 
    author.append(imgContainer, authorsName); 
    imgContainer.append(imgSrc); 

    return card; 

}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {

    const cardParent = document.querySelector('.cards-container'); 

    cardParent.append(cardsCreator(response)); 
    // newArr = response; 
    // let arr = Object.keys(newArr.data.articles);
    // console.log(arr); 
    // let arrObj = arr.map((key) => {
    // return {[key]: newArr.data.articles[key].forEach(item => {console.log(item.headline)})};
    // })
    console.log(response); 
    // console.log(arrObj);
    // console.log(response); 
    // console.log(cardsCreator(response));
}); 

// newArr = response; 
// let arr = Object.keys(newArr.data.articles);
// console.log(arr); 
// let arrObj = arr.map((key) => {
   // return {[key]: newArr.data.articles[key].forEach(item => {console.log(item.headline)})};
// })
// console.log(response); 
// console.log(arrObj);
// console.log(response); 
// console.log(cardsCreator(response));

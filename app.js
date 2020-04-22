let item = document.getElementById('item')



for (index=0; index <dishes.length; index++){
    let dish = dishes[index]
    console.log(dish.title , dish.description,dish.imageURL,dish.price)

    let title = dish.title
    let description = dish.description
    let imageURL= dish.imageURL
   // let price= dish.price
   
   let liItem = document.createElement('li')
   let titleElements = document.createElement('h2')
   let descriptionElements = document.createElement('p')
   let imageElements = document.createElement('img')
   let priceElements = document.createElement('h1')
   

   titleElements.innerHTML= title
   descriptionElements.innerHTML= description
   imageElements.src = imageURL
   priceElements.innerHTML = dish.price

   liItem.appendChild(titleElements)
   liItem.appendChild(descriptionElements)
   liItem.appendChild(imageElements)
   liItem.appendChild(priceElements)
   //liItem.innerHTML = title + description + imageURL + price
   item.appendChild(liItem)


}


const thumbnail = document.querySelector('#sneaker')
const view = document.querySelector('.thumbnailPage');
const buy = document.querySelector('icon-cart');
const close = document.querySelector('.close');
var quantity = document.querySelector('.quan');
const basket = document.querySelector('.cart');
const track = document.querySelector('.thumbnail-image-container');
const slides = Array.from(track.children);
const moveThumbnailPrevious = document.querySelector('.icon-previous');
const moveThumbnailNext = document.querySelector('.icon-next');
const buyButton = document.querySelector(".buy-button");
const cartContent = document.querySelector('.cart-content') ;
const thumbnailNavs = document.querySelector('.thumbnail-container2')
const thumbs = Array.from(thumbnailNavs.children);
const cartQuantity = document.querySelector('.cart-quantity');
const cartTotal = document.querySelector('.cart-total');

//set width
const slideWidth = 470 //slides[0].getBoundingClientRect().width;

//arrange slides next to each other
const setSlidePosition = (slide, index) => {
 slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
currentSlide.classList.remove('current-slide');
targetSlide.classList.add('current-slide');
console.log(currentSlide)
 }

const updateNavs = (currentNav, targetNav) => {
   currentNav.classList.remove('curent-slide');
   targetNav.classList.add('curent-slide'); 

}

const hideShowArrow = (slides, moveThumbnailPrevious, moveThumbnailNext, targetIndex) => {
   if(targetIndex === 0) {
      moveThumbnailPrevious.classList.add('is-hidden')
      moveThumbnailNext.classList.remove('is-hidden')
   } else if (targetIndex === slides.length -1){
      moveThumbnailPrevious.classList.remove('is-hidden')
      moveThumbnailNext.classList.add('is-hidden')
   } else {
      moveThumbnailPrevious.classList.remove('is-hidden')
      moveThumbnailNext.classList.remove('is-hidden')
   }
}

//move left
moveThumbnailPrevious.addEventListener('click',(e)=>{
const currentSlide = track.querySelector('.current-slide');
const prevSlide = currentSlide.previousElementSibling;
const currentNav = thumbnailNavs.querySelector('.curent-slide')
const prevNav = currentNav.previousElementSibling;
const prevIndex = slides.findIndex(slide => slide === prevSlide)

moveToSlide(track, currentSlide, prevSlide);
updateNavs(currentNav, prevNav)
hideShowArrow(slides, moveThumbnailPrevious, moveThumbnailNext, prevIndex)

})

//move right

moveThumbnailNext.addEventListener('click',() =>{
  
const currentSlide = track.querySelector('.current-slide');
const nextSlide = currentSlide.nextElementSibling;
const currentNav = thumbnailNavs.querySelector('.curent-slide')
const nextNav = currentNav.nextElementSibling;
const nextIndex = slides.findIndex(slide => slide === nextSlide)

moveToSlide(track, currentSlide, nextSlide);
updateNavs(currentNav, nextNav)
hideShowArrow(slides, moveThumbnailPrevious, moveThumbnailNext, nextIndex)

})

thumbnailNavs.addEventListener('click', (e) =>{
   const targetNav = e.target.closest('li');

   if(!targetNav) return;

   const currentSlide = track.querySelector('.current-slide');
   const currentNav = thumbnailNavs.querySelector('.curent-slide');
   const targetIndex = thumbs.findIndex(nav => nav === targetNav);
   const targetSlide = slides[targetIndex];

   moveToSlide(track, currentSlide, targetSlide);
   updateNavs(currentNav, targetNav)
   hideShowArrow(slides, moveThumbnailPrevious, moveThumbnailNext, targetIndex)

})


thumbnail.addEventListener('click', () =>{
view.style.display = "flex";
})



close.addEventListener('click', () =>{
   view.style.display = 'none'; 
})

let plus = document.querySelector('.plus');
var count = 0
plus.addEventListener('click', () =>{
    count++
    quantity.innerHTML = count
   })
   
   let minus = document.querySelector('.minus');
   minus.addEventListener('click', () =>{
      if (count <= 0) return
      else{
         count--
         quantity.innerHTML = count
      }
      })
            
const cart = document.querySelector('.main-cart')
cart.addEventListener("click", ()=>{
   basket.style.display = "flex"
})

const clearBasket = document.querySelector('.delete')
clearBasket.addEventListener('click',() =>{
   basket.style.display = "none"
})

const cartIsEmpty = document.querySelector('.basket-content');

   //cartIsEmpty.textContent = "your cart is empty."

buyButton.addEventListener('click', () => {

if(count <= 0  || cartQuantity === undefined ){
   cartContent.textContent = "";
   cartIsEmpty.classList.remove('basket-content')
   cartIsEmpty.textContent = "your cart is empty."
   return

}else {

cartIsEmpty.classList.remove('is-empty')
cartContent.textContent = count;
const re = cartIsEmpty.textContent
const price = 125.00 ;
cartQuantity.innerHTML = count;
const total = cartQuantity.textContent * price 
cartTotal.textContent = '$' + total + '.00'

//console.log(cartIsEmpty)
//console.log(total)
//cartIsEmpty.classList.add('basket-content')

}

})

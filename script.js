const intro = document.querySelector(".intro");
const main = document.querySelector(".main");
const skill = document.querySelector(".skill");
const images = document.querySelectorAll('.image');
const lightbox = document.querySelector('.lightbox')
const lightboxItem = document.querySelector('.lightbox #item')
const cross = document.querySelector('#cross')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const webs = document.querySelectorAll('.web')
const mobile = document.querySelector('.mobile')


let currentIndex;

webs.forEach(web => web.style.opacity = 0)
mobile.style.opacity = 0;

function rise(){
    intro.classList.add("rise");
}
function expand(){
    intro.classList.add('expand');
    webs.forEach(web => web.style.opacity = 1)
    mobile.style.opacity = 1;
}
setTimeout(expand, 100);
setTimeout(rise, 1000);

function showImage(image){
    lightbox.classList.add('showImage')
    lightboxItem.innerHTML = image.innerHTML
}

images.forEach((image, index) => {
    image.onclick = () => {
        showImage(image)
        currentIndex = index
    }
})
cross.onclick = () => lightbox.classList.remove('showImage')

right.onclick = () => {
    if(currentIndex != 12){
        currentIndex += 1
        lightboxItem.innerHTML = images[currentIndex].innerHTML
    }
}

left.onclick = () => {
    if(currentIndex != 0){
        currentIndex -= 1
        lightboxItem.innerHTML = images[currentIndex].innerHTML
    }
}


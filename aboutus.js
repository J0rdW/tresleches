let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let preview = document.querySelectorAll('.preview .item')

// Parameters
let itemCount = items.length;
let itemActive = 0;

// Next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= itemCount){
        itemActive = 0;
    }
    showSlider();
}

// Previous click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = itemCount - 1;
    }
    showSlider();
}

// Automatically slide after x seconds
let slideInterval = setInterval(() => {
    next.click();
}, 10000);

function showSlider(){
    let oldActiveItem = document.querySelector('.slider .list .item.active');
    let activePreviewOld = document.querySelector('.preview .item.active')
    oldActiveItem.classList.remove('active');
    activePreviewOld.classList.remove('active');

    // The new preview
    items[itemActive].classList.add('active');
    preview[itemActive].classList.add('active');

    // Clear timer when pressed
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        next.click();
    }, 10000)
}

// Clicking the previews
preview.forEach((preview, index) => {
    preview.addEventListener('click', () => {
        itemActive = index; // User click is the new itemActive
        showSlider();
    })
})
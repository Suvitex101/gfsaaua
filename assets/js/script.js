const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

function updateSliderValue() {
  const value = slider.value;
  sliderValue.textContent = `${value}%`;

  const newPosition = (slider.clientWidth * value) / 100 - sliderValue.clientWidth / 2;
  sliderValue.style.left = `${newPosition}px`;
}

updateSliderValue();


slider.addEventListener("input", updateSliderValue);


const slider_two = document.getElementById("slider");

slider_two.addEventListener("input", function () {
  const value = this.value;
  const redPart = `${value}%`;
  const transparentPart = `${100 - value}%`;
  this.style.backgroundSize = `${redPart}, ${transparentPart}`;
});


var menuItems = document.querySelectorAll('.menu .menu-click');

function toggleSubMenu(event) {
    event.stopPropagation();
    var item = this.closest('.menu-click');
    item.classList.toggle('active');

    // Close other sub-menus
    menuItems.forEach(function (otherItem) {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    // Close sub-menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!item.contains(event.target)) {
            item.classList.remove('active');
        }
    });
}

menuItems.forEach(function (item) {
    var h3 = item.querySelector('h3');
    h3.addEventListener('click', toggleSubMenu);

    // Remove this part to keep hover effect
    // var subMenu = item.querySelector('.sub-menu');
    // subMenu.addEventListener('mouseover', function (event) {
    //     event.stopPropagation();
    // });
});


const menuIcon = document.querySelector('.menu-icon')
const menuMain = document.querySelector('.menu')

menuIcon.addEventListener('click', () => {
    menuMain.classList.toggle('active');
})


document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('#coming-soon', {
        strings: ['Coming Soon...', 'We Will Be Back Soon...'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});



function FullView(ImgLink) {
    document.querySelector("#FullImage").src = ImgLink;
    document.querySelector(".full-screen").style.display = "block";
}

function CloseFullView() {
    document.querySelector(".full-screen").style.display = "none"
}

function toggleFaq(element) {
    var faqContent = element.parentNode.querySelector('.faq_p');

    if (faqContent.style.display === 'block') {
        faqContent.style.display = 'none';
    } else {
        faqContent.style.display = 'block';
    }
}

//Переключение кнопок в навигации Header

let headerNavigationButtons = document.querySelectorAll('.header__navigation-button');

for (let headerNavigationButton of headerNavigationButtons) {
  headerNavigationButton.addEventListener('click', function () {
    headerNavigationButtons.forEach(element => element.classList.remove('header__navigation-button_active'));
    headerNavigationButton.classList.add('header__navigation-button_active')
  })
}

//Переключение картинок на слайдере Laptop
let bannerButtons = document.querySelectorAll('.banner__btn');
let bannerImages = document.querySelectorAll('.banner__image');


for (let bannerButton of bannerButtons) {
  bannerButton.addEventListener('click', function () {

    bannerButtons.forEach(element => element.classList.remove('banner__btn_active'))
    bannerButton.classList.add('banner__btn_active')

    let dataImageName = bannerButton.getAttribute('data-image-name')

    bannerImages.forEach(element => {
      if (element.classList.contains(dataImageName)) {
        element.classList.remove('banner__image_hidden')
      } else {
        element.classList.add('banner__image_hidden')
      }

    })
  });
}

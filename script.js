const popupLinks = document.querySelectorAll('.popup')
const popup = document.querySelector('.popup__wrapper')

const closer = (modal) => {
  popup.addEventListener('click', (e) => {
    if (e.target.closest('.modal__close') || !e.target.closest('.modal')) {
      modal.classList.remove('active')
      popup.classList.remove('active')
    }
  })
}

popupLinks.forEach((link, i) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.add('active')
    popup.querySelector(link.hash).classList.add('active')
  })
  closer(popup.querySelector(link.hash))
})

const slider = document.querySelector('.slider')
const btnRight = slider.querySelector('.slider__button--right')
const btnLeft = slider.querySelector('.slider__button--left')
const sliderWrap = slider.querySelector('.slider__move')
const sliderSlide = slider.querySelector('.slider__slide')

let pos = 0


const mover = (nav) => {
  if (nav == 'right') {
    pos = pos - sliderSlide.scrollWidth
  }
  if (nav == 'left') {
    pos = pos + sliderSlide.scrollWidth
  }
}

sliderWrap.style.left = pos

btnRight.addEventListener('click', () => {
  console.log(sliderWrap.style.left.substring(0,1));
  if (sliderWrap.style.left.substring(0,1) < sliderWrap.scrollWidth) {
    mover('right')
    sliderWrap.style.left = pos + 'px'
  } else {
    sliderWrap.style.left = 0
  }
})

btnLeft.addEventListener('click', () => {
  if (sliderWrap.style.left.substring(0,1) > sliderWrap.scrollWidth) {
    mover('left')
    sliderWrap.style.left = pos + 'px'
  } else {
    sliderWrap.style.left = (-sliderWrap.scrollWidth + 300) + 'px'
  }
})
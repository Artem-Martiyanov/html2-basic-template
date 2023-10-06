const slider = document.querySelector('.slider')


if (slider) {
  const sliderTrack = slider.querySelector('.slider__track')
  const sliderItems = sliderTrack.querySelectorAll('.slider__item')
  const arrows = slider.querySelector('.slider__arrow')
  const paginationItems = slider.querySelectorAll('.slider__pagination-item')




  arrows.addEventListener('click', (evt) => {
    const arrow = evt.target



    if (arrow.classlist.contains('slider__arrow--prev')) {
      console.log('prev')
    }

    if (arrow.classlist.contains('slider__arrow--next')) {
      console.log('next')
    }
  })


}

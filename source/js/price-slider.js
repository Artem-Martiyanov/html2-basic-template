const priceInputs = document.querySelectorAll('.filter-form__price-input')
const priceSliderElement = document.querySelector('.range-slider')

const priceSlider = noUiSlider.create(priceSliderElement, {
  start: [0, 900],
  connect: true,
  range: {
    'min': 0,
    'max': 1000,
  },
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => value
  }
});

priceSlider.on('update', (values, handle) => {
  priceInputs[handle].value = values[handle]
})

priceInputs.forEach(input => {
  input.addEventListener('change', () => {
    priceSlider.set([priceInputs[0].value, priceInputs[1].value])
  })
})

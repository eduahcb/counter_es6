import ValidateInput from '../helpers/ValidateInput'
import DateConverter from '../helpers/DateConverter'
import CounterDisplay from './CounterDisplay'

import '../styles/counter.css'

const CounterForm = (element) => {
  const dateConverter = new DateConverter()

  const template = () =>
    `
			<header>
        <h1>Contador</h1>
      </header>
      <main class="content">
        <div>
          <h2 class="sub-title">Informe uma data</h2>
          <div class="form-group">
            <input data-input type="text" class="date" placeholder="DD/MM/AAAA" />
          </div>
          <div class="form-group">
            <button data-start class="btn">Iniciar contagem</button>
          </div>
        </div>
      `

  const handleStartClick = () => {
    document.querySelector('[data-start]').addEventListener('click', () => {
      const value = document.querySelector('[data-input]').value
      const date = dateConverter.stringToDate(value)

      if (!ValidateInput.isValid(value) || !ValidateInput.isFutureDate(date))
        return

      const timerId = setInterval(() => {
        const timeDifference = date - new Date()
        const timerInfo = dateConverter.getAllTimer(timeDifference)

        if (
          timerInfo.days === 0 &&
          timerInfo.hours === 0 &&
          timerInfo.minutes === 0 &&
          timerInfo.seconds === 0
        )
          clearInterval(timerId)

        CounterDisplay(element, timerInfo)
      }, 1000)

      sessionStorage.setItem('timerId', timerId)
    })
  }

  const init = () => {
    const timerId = sessionStorage.getItem('timerId')
    if (timerId) {
      clearInterval(timerId)
      sessionStorage.clear()
    }

    element.innerHTML = template()
    handleStartClick()
  }

  return init()
}

export default CounterForm

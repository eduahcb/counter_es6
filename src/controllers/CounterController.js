import Counter from '../views/Counter'
import CounterDisplay from '../views/CounterDisplay'
import ValidateInput from '../models/ValidateInput'
import DateConverter from '../models/DateConverter'

class CounterController {
  constructor() {
    this._timerId = 0
    this._counterView = new Counter(document.querySelector('#root'))
    this._counterDisplayView = new CounterDisplay(
      document.querySelector('#root')
    )
  }

  buildCounterForm() {
    clearInterval(this._timerId)

    this._counterView.build()
  }

  redirectToDisplay() {
    const value = document.querySelector('[data-input]').value
    const date = this._convertStringToDate(value)

    if (!ValidateInput.isValid(value) || !ValidateInput.isFutureDate(date))
      return

    this._timerId = setInterval(() => this._updateDisplay(date), 1000)
  }

  _updateDisplay(date) {
    const dateConverter = new DateConverter(date)

    const days = dateConverter.getDay()
    const hours = dateConverter.getHours()
    const minutes = dateConverter.getMinutes()
    const seconds = dateConverter.getSeconds()

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0)
      return clearInterval(this._timerId)

    this._counterDisplayView.build({ days, hours, minutes, seconds })
  }

  _convertStringToDate(value) {
    const date = value.split('/').reverse()
    date[1] = date[1] - 1
    return new Date(...date)
  }
}

const counterController = new CounterController()

export { counterController }

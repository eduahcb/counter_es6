import Counter from '../views/Counter'
import CounterDisplay from '../views/CounterDisplay'
import ValidateInput from '../models/ValidateInput'
import DateConverter from '../models/DateConverter'

class CounterController {
  constructor() {
    this._timerId = 0
    this._dateConverter = new DateConverter()

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
    const date = this._dateConverter.stringToDate(value)

    if (!ValidateInput.isValid(value) || !ValidateInput.isFutureDate(date))
      return

    this._timerId = setInterval(() => this._updateDisplay(date), 1000)
  }

  _updateDisplay(date) {
    const timeDifference = date - new Date()

    const days = this._dateConverter.getDay(timeDifference)
    const hours = this._dateConverter.getHours(timeDifference)
    const minutes = this._dateConverter.getMinutes(timeDifference)
    const seconds = this._dateConverter.getSeconds(timeDifference)

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0)
      return clearInterval(this._timerId)

    this._counterDisplayView.build({ days, hours, minutes, seconds })
  }
}

const counterController = new CounterController()

export { counterController }

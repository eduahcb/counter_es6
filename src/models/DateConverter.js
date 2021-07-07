class DateConverter {
  constructor(futureDate) {
    this._timers = {
      day: 1000 * 60 * 60 * 24,
      hour: 1000 * 60 * 60,
      minute: 1000 * 60,
      second: 1000,
    }
    this._timeDifference = futureDate - new Date()
  }

  getDay() {
    return Math.floor(this._timeDifference / this._timers.day)
  }

  getHours() {
    return Math.floor((this._timeDifference / this._timers.hour) % 24)
  }

  getMinutes() {
    return Math.floor((this._timeDifference / this._timers.minute) % 60)
  }

  getSeconds() {
    return Math.floor((this._timeDifference / this._timers.second) % 60)
  }
}

export default DateConverter

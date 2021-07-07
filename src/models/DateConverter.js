class DateConverter {
  constructor() {
    this._timers = {
      day: 1000 * 60 * 60 * 24,
      hour: 1000 * 60 * 60,
      minute: 1000 * 60,
      second: 1000,
    }
  }

  getDay(date) {
    return Math.floor(date / this._timers.day)
  }

  getHours(date) {
    return Math.floor((date / this._timers.hour) % 24)
  }

  getMinutes(date) {
    return Math.floor((date / this._timers.minute) % 60)
  }

  getSeconds(date) {
    return Math.floor((date / this._timers.second) % 60)
  }
}

export default DateConverter

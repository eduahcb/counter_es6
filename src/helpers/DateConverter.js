class DateConverter {
  constructor() {
    this._timers = {
      day: 1000 * 60 * 60 * 24,
      hour: 1000 * 60 * 60,
      minute: 1000 * 60,
      second: 1000,
    }
  }

  getDay(milliseconds) {
    return Math.floor(milliseconds / this._timers.day)
  }

  getHours(milliseconds) {
    return Math.floor((milliseconds / this._timers.hour) % 24)
  }

  getMinutes(milliseconds) {
    return Math.floor((milliseconds / this._timers.minute) % 60)
  }

  getSeconds(milliseconds) {
    return Math.floor((milliseconds / this._timers.second) % 60)
  }

  getAllTimer(milliseconds) {
    return {
      days: this.getDay(milliseconds),
      hours: this.getHours(milliseconds),
      minutes: this.getMinutes(milliseconds),
      seconds: this.getSeconds(milliseconds),
    }
  }

  stringToDate(string) {
    const date = string.split('/').reverse()
    date[1] = date[1] - 1
    return new Date(...date)
  }
}

export default DateConverter

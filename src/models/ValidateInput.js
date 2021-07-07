class ValidateInput {
  static isValid(value) {
    const regex = /\d{2}\/\d{2}\/\d{4}/

    return regex.test(value)
  }

  static isFutureDate(futureDate) {
    const currentDate = new Date()

    return currentDate < futureDate
  }
}

export default ValidateInput

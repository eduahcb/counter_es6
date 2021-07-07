import '../styles/display.css'
import { counterController } from '../controllers/CounterController'

class CounterDisplay {
  constructor(element) {
    this._element = element
  }

  _events() {
    document.querySelector('[data-restart]').addEventListener('click', () => {
      counterController.buildCounterForm()
    })
  }

  template({ days, hours, minutes, seconds }) {
    return `
			<header class="display-header">
        <h1>Contador</h1>
        <div>
          <button data-restart class="btn">Reiniciar</button>
        <div>
      </header>
      <main class="content">
        <div class="grid">
          <div class="info">
            <h2>${days || 0}</h2>
            <span>dias</span>
          </div>
          <div class="info">
            <h2>${hours || 0}</h2>
            <span>horas</span>
          </div>
          <div class="info">
            <h2>${minutes || 0}</h2>
            <span>minutos</span>
          </div>
          <div class="info">
            <h2>${seconds || 0}</h2>
            <span>segundos</span>
          </div>
        </div>
      </main>
		`
  }

  build(date) {
    this._element.innerHTML = this.template(date)
    this._events()
  }
}

export default CounterDisplay

import '../styles/counter.css'
import { counterController } from '../controllers/CounterController'

class Counter {
  constructor(element) {
    this._element = element
  }

  _events() {
    document.querySelector('[data-start]').addEventListener('click', () => {
      counterController.redirectToDisplay()
    })
  }

  template() {
    return `
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
      </main>
		`
  }

  build() {
    this._element.innerHTML = this.template()
    this._events()
  }
}

export default Counter

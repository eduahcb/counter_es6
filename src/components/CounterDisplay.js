import '../styles/display.css'

import CounterForm from './CounterForm'

const CounterDisplay = (element, { days, hours, minutes, seconds }) => {
  const template = () =>
    `
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

  const handleRestartClick = () => {
    document.querySelector('[data-restart]').addEventListener('click', () => {
      CounterForm(element)
    })
  }

  const init = () => {
    element.innerHTML = template()
    handleRestartClick()
  }

  return init()
}

export default CounterDisplay

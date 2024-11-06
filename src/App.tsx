import EstiloGlobal, { Container } from './styles'

import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import themeOrigin from './containers/theme/theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={themeOrigin}>
        <EstiloGlobal />
        <Cabecalho />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App

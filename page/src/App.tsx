import { ProviderCook } from "./CookieProvider"
import { ProviderRutas } from "./Rutas"


function App() {

  return (
    <ProviderCook>
      <ProviderRutas />
    </ProviderCook>
  )
}

export default App

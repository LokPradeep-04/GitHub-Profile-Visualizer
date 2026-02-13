import {Route, Routes} from 'react-router'

import Home from './pages/Home'
import Repositories from './pages/Repositories'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/repositories' element={<Repositories />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './components/AppWraper/AppWrapperComponent'
import { HomePage } from './components/HomePageComponent/HomePage'
import { PageInventory } from './components/PageInventory/PageInventory'
import { carList } from './Database/carsList'
import { partsList } from './Database/partsList'
import { SinglePart } from './components/SinglePart/SinglePart'
import { partsData } from './Database/parts'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppWrapperComponent/>}>
            <Route index='/home' element={<HomePage/>}>
            </Route>
            <Route path='/home' element={<HomePage/>}></Route>
            <Route path='/cars' element={<PageInventory {...carList}/>} />
            <Route path='/parts' element={<Outlet/>}>
              <Route index element={<PageInventory {...partsList}/>}></Route>
              <Route path='/parts/:id' element={<SinglePart {...partsData}{...partsList}/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

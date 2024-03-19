import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { AppWrapperComponent } from './components/AppWraper/AppWrapperComponent'
import { HomePage } from './components/HomePageComponent/HomePage'
import { PageInventory } from './components/PageInventory/PageInventory'
import { carList } from './Database/carsList'
import { partsList } from './Database/partsList'
import { SinglePart } from './components/SinglePart/SinglePart'
import { partsData } from './Database/parts'
import { SingleCar } from './components/SingleCar/SingleCar'
import { carData } from './Database/cars'
import { useState } from 'react'
import { AppContext } from './AppContext/AppContext'


function App() {

  const [singleCarData, setSingleCarData] = useState(carData);
  const [carShop, setCarShop] = useState(carList);
  const [singlePartData, setSinglePartData] = useState(partsData);
  const [partShop, setPartShop] = useState(partsList);

  const dataStream = {singleCarData, setSingleCarData, carShop, setCarShop, singlePartData, setSinglePartData, partShop, setPartShop};

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={dataStream}>
          <Routes>
            <Route path='/' element={<AppWrapperComponent/>}>
              <Route index='/home' element={<HomePage/>}>
              </Route>
              <Route path='/home' element={<HomePage/>}></Route>
              <Route path='/cars' element={<Outlet/>}>
                <Route index element={<PageInventory/>}></Route>
                <Route path='/cars/:id' element={<SingleCar/>}/>
              </Route>
              <Route path='/parts' element={<Outlet/>}>
                <Route index element={<PageInventory/>}></Route>
                <Route path='/parts/:id' element={<SinglePart/>}></Route>
              </Route>
            </Route>
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App

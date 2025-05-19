import React from 'react'
import {routes,route} from 'react-router-dom'
import navbar from'./components/navbar'

const App
 = () => {
  return (
    <div classname='px-4 sm:px-[5vw] md:px-[7vw lg:px-[9vw]'>
      <navbar/>
      <routes>
        <route path='/' elements={<home />} />
        <route path='/collection' elements={<collection />} />
        <route path='/about' elements={<about />} />
        <route path='/contact' elements={<contacts />} />
        <route path='/product/:productID' elements={<product />} />
        <route path='/cart' elements={<cart />} />
        <route path='/login' elements={<login />} />
        <route path='/placeoder' elements={<placeoder />} />
        <route path='/oders' elements={<oders />} />
      </routes> 

    </div>
  )
}


export default App
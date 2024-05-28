import React from 'react'
import Mycard from './Mycard.jsx'
import '../CSS/slider.css'
const Slider = () => {
        let box = document.querySelector('.product-container');

const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
}

const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
}
return (
    <div className="product-carousel">
        <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
        <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


        <div className="product-container">
            <Mycard cardno='1' />
            <Mycard cardno='2' />
            <Mycard cardno='3' />
            <Mycard cardno='4' />
            <Mycard cardno='5' />

        </div>
    </div>
    
  )
}

export default Slider

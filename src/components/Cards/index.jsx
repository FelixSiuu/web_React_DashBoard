import React from 'react'
import CardItem from '../CardItem/index.jsx'
import CardsData from '../../Data/Cards.js'
import './index.css'

export default function Cards() {
  return (
    <div className='Cards'>
      {
        CardsData.map((item, index) => {
          return (
            <div className='cardContainer' key={index} >
              <CardItem argument={item} />
            </div>
          )
        })
      }
    </div>
  )
}

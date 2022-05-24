import React from 'react'
import UpdatesData from '../../Data/Updates.js'
import './index.css'

export default function Updates() {
  return (
    <div className='Updates'>
      {
        UpdatesData.map((item,index) => {
          return (
            <div className="updateItem" key={index}>
              <img src={item.img} alt="" />
              <div className="noti">
                <div style={{
                  marginBottom: '0.5rem'
                }}>
                  <span>{item.name}</span>
                  <span>{item.noti}</span>
                </div>
              </div>
              <div>
                <span>{item.time}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

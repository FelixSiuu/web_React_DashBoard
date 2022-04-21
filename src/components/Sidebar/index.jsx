import React from 'react'
import logo from '../../imgs/logo.png'
import SideBarData from '../../Data/SideBar.js'
import './index.css'
import { useState } from 'react'

export default function SideBar() {
  const [activeNum, setActiveNum] = useState(0)

  return (
    <div className="SideBar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {SideBarData.map((item, index) => {
          return (
            <div
              // compute class name
              className={
                index === activeNum
                ? 'menuItem active' 
                : 'menuItem'
              }
              // 點擊設置當前activeNum為索引號
              onClick={()=>{setActiveNum(index)}}
              key={index}
            >
              <div>{item.icon}</div>
              <span>{item.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

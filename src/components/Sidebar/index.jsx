import React,{ useState } from 'react'
import { UilBars } from '@iconscout/react-unicons'
import { motion } from 'framer-motion'
import logo from '../../imgs/logo.png'
import SideBarData from '../../Data/SideBar.js'
import './index.css'

export default function SideBar() {
  const [activeNum, setActiveNum] = useState(0)
  const [show, setShow] = useState(true)

  const sideBarVariants = {
    true:{
      left: '0'
    },
    false: {
      left: '-40%'
    }
  }

  return (
    <>
      <motion.div 
        className="SideBar" 
        variants={sideBarVariants}
        // 動畫在寬度低於768時生效
        animate={window.innerWidth <=768? `${show}` : false }
        >
        <div 
          className='bars' 
          onClick={()=>setShow(!show)} style={show? {left:'102%'} : {left: '100%'}}
          >
          <UilBars />
        </div>
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
      </motion.div>
    </>
  )
}

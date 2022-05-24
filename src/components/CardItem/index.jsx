import React,{ useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { UilTimes } from '@iconscout/react-unicons'
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from "react-apexcharts";
import 'react-circular-progressbar/dist/styles.css';
import './index.css'

export default function CardItem(props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <AnimateSharedLayout >
      { expanded 
        ? ( <ExpandedCard 
              argument={props.argument} 
              setFalse={ e => setExpanded(e)} /> )
        : ( <CompactCard 
              argument={props.argument} 
              setTrue={ e => setExpanded(e)} /> )
      }
    </AnimateSharedLayout>
  )
}

// ExpandedCard
const ExpandedCard = (props) => {
  const { series, color, title } = props.argument
  const options = {
    chart: {
      type: "area",
      height: "auto",
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },
    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  }
  return (
    <motion.div 
      className='ExpandedCard'
      style={{
        background : color.background,
        boxShadow : color.boxShadow
      }}
      layoutId='expandableCard'
    >
      {/* close button */}
      <div style={{
        alignSelf: 'flex-end',
        cursor: 'pointer',
        color: 'white'
      }}>
        <UilTimes onClick={ ()=>props.setFalse(false) }/>
      </div>
      <span>{title}</span>
      <div className="chartContainer">
      <Chart options={options} series={series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  )
}

// CompactCard
const CompactCard = (props) => {
  const { icon, value, barValue, color, title } = props.argument
  return (
    <motion.div
      // 傳給父組件參數
      onClick={()=>{ props.setTrue(true) }}
      className='CompactCard'
      style={{
        background : color.background,
        boxShadow : color.boxShadow
      }}
      layoutId='expandableCard'
    >
      <div className="radialBar">
        <CircularProgressbar value={barValue} text={`${barValue}%`}/>
        <span>{title}</span>
      </div>
      <div className="detail">
        {icon}
        <span>{value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}
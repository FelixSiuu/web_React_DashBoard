import React from 'react'
import Cards from '../Cards'
import Table from '../Table'
import './index.css'

export default function MainDash() {
  return (
    <div className='MainDash'>
      <h1>MainDash</h1>
      <Cards />
      <Table />
    </div>
  )
}

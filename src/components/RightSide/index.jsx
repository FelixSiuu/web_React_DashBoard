import React from 'react'
import Updates from '../Updates'
import CustomerReview from '../CustomerReview'
import './index.css'

export default function RightSide() {
  return (
    <div className="RightSide">
      <div>
        <h1>Updates</h1>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  )
}

import { Component, useState } from 'react'
import './App.css'
import Checkoutstepper from './components/checkoutstepper.jsx'

const CHECKOUT_STEPS = [
  {
    name: 'Customer Information',
    Component: () => <div>Please provide your contact details</div>
  },
  {
    name: 'Shipping',
    Component: () => <div>Please provide your shipping address</div>
  },
  {
    name: 'Payment',
    Component: () => <div>Please provide your payment details</div>
  },
  {
    name: 'Delivered',
    Component: () => <div>Your order has been delivered</div>
  },
  {
    name: 'Review',
    Component: () => <div>Please review your order</div>
  }
]
function App() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif'}}>
      <h1>Checkout Process</h1>
      <Checkoutstepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  )
}

export default App;
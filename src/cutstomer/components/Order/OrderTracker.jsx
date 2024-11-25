import { Stepper,Step,StepLabel } from '@mui/material'
import React from 'react'
const steps=[
    "placed",
    "Order Confirmed",
    "Shipped",
    "Out of Delivery",
    "Delivered"
]
const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel> 
            {
                steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
                    </Step>
                ))
            }
        </Stepper>
    </div>
  )
}

export default OrderTracker
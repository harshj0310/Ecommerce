import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box,Grid } from '@mui/material'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>DeliveryAddress</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className='space-y-5 'container >
            {[1,1,1,1,1,1].map((item)=><Grid className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}item container>
                    <Grid item xs={6}>
                        <div className='flex item-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top'src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta
            /l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70' alt=''></img>
                            <div className='space-y-2 ml-5 '>
                                <p className='font-semibold '>Men solid mid Kurta </p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color : pink</span> <span>size : m</span></p>
                                <p>seller:abcd</p>
                                <p>RS 500</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={{color:"black"}}>

                            <StarBorderPurple500Icon sx={{fontSize:"2rem"}}className='px-2 '/>
                            <span>Rate & Review Product</span>

                        </Box>
                    </Grid>
            </Grid>)}
            

        </Grid>
    </div>
  )
}

export default OrderDetails
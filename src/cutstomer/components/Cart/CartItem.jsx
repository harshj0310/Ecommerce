import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Button} from '@mui/material';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex item-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img  className='w-full h-full object-cover object-top'src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta
            /l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt=""></img>
        </div>

        <div className='ml-5 space-y-1'>
            <p className='font-semibold'> Men slim kurta </p>
            <p className='opacity-70'>Size :L ,White </p>
            <p className='opacity-70 mt-2'>seller: harsh </p>
            <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className='font-semibold'>
                rs 500
             
                </p>
                <p className='opacity-50 line-through '>
                211
                </p>
                <p className='text-greeen-600 font-semibold'>
                5% off
                </p>
            </div>
        </div>

       
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
                <IconButton  >
                    <RemoveCircleOutlineIcon/>
                </IconButton >
                <span className='py-1 px-7 border rounded-sm'>3 </span>
                <IconButton sx={{color:"RGB(145 85 253)"}}>
                    <AddCircleOutlineIcon/>
                </IconButton>
                    

            </div>

            <div>
                <Button sx={{color:"RGB(145 85 253)"}}> Remove</Button>
            </div>
        </div>
    </div>
  )
}

export default CartItem

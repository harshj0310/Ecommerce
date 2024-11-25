import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fletsenhance.io%2Fstatic%2F8f5e523ee6b2479e26ecc91b9c25261e%2F1015f%2FMainAfter.jpg&imgrefurl=https%3A
            %2F%2Fletsenhance.io%2F&docid=-t22bY2ix3gHaM&tbnid=tYmxDgFq4MrkJM&vet=12ah
            UKEwi0w5mYjJuJAxX3SWwGHc2dNokQM3oECB0QAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi0w5mYjJuJAxX3SWwGHc2dNokQM3oECB0QAA" alt=''>
               
            </img>

                <div className='ml-5 space-y-2'>
                    <p className=''>Men slim kurta</p>
                    <p className='opacity-50 text-xs font-semibold '>size :m</p>
                    <p className='opacity-50 text-xs font-semibold '>color:red</p>

                </div>
            </div>
        </Grid>

        <Grid item xs={2}>
            <p>Rs 1000</p>

        </Grid>

        <Grid item xs={4}>
          {true && <div>
             <p>
            <AdjustIcon xs={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                  <span>Delivered on March 03 </span>
                  

            </p> 

            <p className='text-xs'>Item has Delivered</p>
            </div>}

            {false && <p>
              <span>Excpected delivery on mar 023</span>
            </p>}


            
            
             
        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard

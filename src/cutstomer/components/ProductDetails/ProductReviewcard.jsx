

 import React from 'react'
 import { Grid, Box, Avatar, Rating } from '@mui/material';
 const ProductReviewcard = () => {
   return (
     <div>
        <div>
        <Grid container spacing={2} gap={3}>
          <Grid item>
            <Box>
              <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>
                {/* Avatar content can go here */}
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={9}>
            {/* Add content for the second Grid item here */}
            Item content

            <div className='space-y-2'>
                <div>
             <p className='font-semibold text-lg '>Raam</p>
             <p className='opacity-70'>April 5 ,2023</p>

               </div>
                </div>

                <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                
                <p>This product is very good. I would recommend it to others.</p>

                
          </Grid>
        </Grid>
        </div>
     
     </div>
   )
 }
 
 export default ProductReviewcard
 
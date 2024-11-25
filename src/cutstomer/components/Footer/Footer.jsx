import React from 'react'
import{Grid, Typography} from '@mui/material'
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <div>
    <Grid className='bg-black text-white text-center mt-10 '
    container
    sx={{bgcolor:"black",color:"white",py:3}}
    >
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6">
                company
            </Typography>

            

            <div>
            <Button Button className='pb-5' variant="h6"> Partners</Button>
            </div>
            <Button Button className='pb-5' variant="h6"> press</Button>
            <div>
            <Button Button className='pb-5' variant="h6"> jobs</Button>
            </div>
            <Button Button className='pb-5' variant="h6"> blog</Button>
            <div>
            <Button Button className='pb-5' variant="h6"> About</Button>
            </div>
           
            
           
            
           
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6">
                Solutions
            </Typography>

            

            <div>
            <Button Button className='pb-5' variant="h6"> marketing</Button>
            </div>
            <Button Button className='pb-5' variant="h6"> analytics</Button>
            <div>
            <Button Button className='pb-5' variant="h6"> support</Button>
            </div>
            <Button Button className='pb-5' variant="h6"> commerce</Button>
            <div>
            <Button Button className='pb-5' variant="h6"> insights</Button>
            </div>
           
            
           
            
           
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6" text="large">
                Documentation
            </Typography>

            

            <div text="small">
            <Button Button className='pb-5' variant="h6"> Guides</Button>
            </div>
            <Button Button className='pb-5' variant="h6"> Api Status</Button>
           
           
           
            
           
            
           
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant="h6">
                Legal
            </Typography>

            {" "}

            <div>
            <Button Button className='pb-5' variant="h6"> Claim</Button>
            </div>
            <Button Button className='pb-5' variant="h6"> Privacy</Button>
            <div>
            <Button Button className='pb-5' variant="h6"> Terms</Button>
            </div>
          
           
            
           
            
           
        </Grid>
        <Grid className="bg-gray-100 p-8 text-gray-700 flex justify-center">
    <Grid container spacing={4} className="text-center max-w-5xl">
        <Grid item xs={12} sm={4} className="flex flex-col items-center">
            <Typography variant="h6" className="font-semibold mb-2">
                &copy; 2023 Ecommerce. All rights reserved.
            </Typography>
            <Typography variant="body2">Contact us: +123 456 7890</Typography>
            <Typography variant="body2">Support: 24/7 email support</Typography>
        </Grid>
        <Grid item xs={12} sm={4} className="flex flex-col items-center">
            <Typography variant="h6" className="font-semibold mb-2">Follow us:</Typography>
            <Typography variant="body2"><a href="#" className="hover:underline">Facebook</a></Typography>
            <Typography variant="body2"><a href="#" className="hover:underline">Twitter</a></Typography>
            <Typography variant="body2"><a href="#" className="hover:underline">Instagram</a></Typography>
        </Grid>
        <Grid item xs={12} sm={4} className="flex flex-col items-center">
            <Typography variant="h6" className="font-semibold mb-2">Language:</Typography>
            <Typography variant="body2"><a href="#" className="hover:underline">English</a></Typography>
            <Typography variant="body2"><a href="#" className="hover:underline">Spanish</a></Typography>
        </Grid>
    </Grid>
</Grid>


        </Grid>  


        
    </div>
  )
}

export default Footer

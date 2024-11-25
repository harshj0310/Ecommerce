import React from 'react';
import CartItem from './CartItem';
import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate=useNavigate();
  const handlecheckout=()=>{
    navigate('/checkout?step=2');
  }
  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='cols-span-1'>
          {[1,1,1,1,1].map((item)=><CartItem />)}
        </div>

        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pd-4'>Price Details</p>
            <hr />

            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>Rs 52566</span>
              </div>

              <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>-Rs 1285</span>
              </div>

              <div className='flex justify-between pt-3 '>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>

              <div className='flex justify-between pt-3 '>
                <span>Total Amount</span>
                <span className='text-green-600 font-bold'>Rs 51566</span>
              </div>
            </div>
            <Button onClick={handlecheckout}
             variant="contained" 
            className="w-full mt-5" 
             sx={{ px: "2.5rem", py: ".7rem", backgroundColor: "#6a0dad", color: "white" }}
                >
                CheckOut
            </Button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

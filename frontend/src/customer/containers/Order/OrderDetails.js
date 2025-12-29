import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className=' px:5 lg:px-20'>
        <div>
            <h1 className=' font-semibold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>

        <div className='py-20 '>
            <OrderTracking activeStep={3}/>
        </div>
        
        <Grid className="space-y-5">
        {[1,1,1,1,1].map((item)=><Grid container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center",justifyContent:"space-between"}}>

                <Grid size={{xs:6}}>
                    <div className='flex items-center space-x-4'>
                        <img className=' w-[5rem] h-[5rem] object-cover object-top' src='' alt=''/>

                        <div className='space-y-2 ml-5'>
                            <p className=' font-semibold '>Title</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold '> <span>Color : pink</span> <span> Size: M </span></p>
                            <p>Seller: linaria</p>
                            <p>1099</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                        <span>Rate & Review Product</span>
                    </Box>

                </Grid>

            </Grid>
        )}
            
        </Grid>


    </div>
  )
}

export default OrderDetails

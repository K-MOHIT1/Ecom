import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid size={{xs:6}}>


          <div className='flex cursor-pointer' >

            <img className="w-[5rem] h-[5rem] object-cover object-top" src="" alt="" />

            <div className=' ml-5 space-y-2 '>

              <p className='mb-2'>Title</p>
              <p className=' opacity-50 text-xs font-semibold'>Size: M</p>
              <p className=' opacity-50 text-xs font-semibold'>Color: Black</p>

            </div>

          </div>

        </Grid>

        <Grid size={{xs:2}}>
          <p>1099</p>
        </Grid>

        <Grid size={{xs:4}}></Grid>
          <p>
            <span>
              Delivered on March 03
            </span>
          </p>
        
      </Grid>
    </div>
  )
}

export default OrderCard

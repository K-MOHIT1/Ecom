import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className=' w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQehnMdY9PFYWze8lBMmTOcjC6Kt8EPVk1Iem8mb36iuxob6QxiZ-caAAL_3gpcWl4uxedSOc47-vV60KMQjPu0iPVRKhmOePUksZgkHbtR8MulWDA9_XOyXg" className='w-full h-full object-cover object-top' alt=""></img>

            </div>

            <div className=' ml-5 space-y-1'>
                <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                <p className=' opacity-70'>Size:L,White </p>
                <p className=' opacity-70 mt-2'>Seller: Levi</p>
            
                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className=' font-semibold'></p>
                    <p className='opacity-50 line-through'></p>
                    <p className=' text-green-500 font-semibold'></p>
                </div>

            </div>

        </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>

                    <span className='py-1 px-7 border rounded-sm'>0</span>

                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </div>


                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                </div>
            </div>

      
    </div>
  )
}

export default CartItem

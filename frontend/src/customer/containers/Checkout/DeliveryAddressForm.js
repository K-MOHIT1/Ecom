import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddressCard from "../AddressCard/AddressCard";
import { Box, TextField } from "@mui/material";

const DeliveryAddressForm = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address={

            firstName:data.get('firstName'),
            lastName:data.get('lastName'),
            city:data.get('city'),
            streetAdress:data.get('address'),
            state:data.get('state'),
            zipCode:data.get('zip'),
            mobile:data.get('phoneNumber')
            
        }

        console.log(address);

    }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid size={{xs:12 , lg:5}} className=" border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              variant="contained"
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid size={{xs:12 , lg:7}}>
            <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid size={{xs:12 , sm:6}}>

                            <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                            />


                        </Grid>

                        <Grid size={{xs:12 , sm:6}}>

                            <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                            />


                        </Grid>

                        <Grid size={{xs:12}}>

                            <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            autoComplete="given-name"
                            multiline
                            rows={4}
                            />


                        </Grid>

                        <Grid size={{xs:12 , sm:6}}>

                            <TextField
                            required
                            id="city"
                            name="city"
                            label="city"
                            fullWidth
                            autoComplete="given-name"
                            />


                        </Grid>

                        <Grid size={{xs:12 , sm:6}}>

                            <TextField
                            required
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            autoComplete="given-name"
                            />


                        </Grid>

                        <Grid size={{xs:12 , sm:6}}>

                            <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            />


                        </Grid>

                        <Grid size={{xs:12 , sm:6}}>

                            <Button
                                variant="contained"
                                sx={{py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                                size="large"
                                type="submit"
                                >
                                Deliver Here
                            </Button>


                        </Grid>

                        <Grid size={{xs:12 , sm:6}}>

                            <TextField
                            required
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            autoComplete="given-name"
                            />


                        </Grid>

                    </Grid>
                </form>

            </Box>
        </Grid>

      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;

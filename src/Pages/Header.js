import { Button, Container, Stack } from '@mui/material';
import React from 'react';
import { Flexbox } from '../Styled/Flexbox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
    return (
        <div>
            <Container maxWidth='lg'>
                <Flexbox justifyContent='space-between' sx={{
                    padding:'1rem 0rem'
                }}>
                    <img src="https://i.ibb.co/S3yMF8v/image-removebg-preview-1.png" style={{ width: '50px' }} alt="" />
                    <Stack direction='row' spacing={2} sx={{
                        alignItems:'center'
                    }}>
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        <Button >Log In</Button>
                        <Button variant='contained' >Sign Up</Button>
                    </Stack>
                </Flexbox>

            </Container>
        </div>
    );
};

export default Header;
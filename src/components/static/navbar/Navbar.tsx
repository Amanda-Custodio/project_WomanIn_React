import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, /*Button, IconButton*/ } from "@mui/material";
/*import MenuIcon from '@mui/icons-material/Menu';*/
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import '../../../root.css';
import Logo from '../../../img/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import { post } from '../../../services/Service';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    let navigate = useNavigate();
    const [navbar, setNavbar] = useState(false)
    const [token, setToken] = useLocalStorage('token');

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        if(token === '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    }, [token])

    function goLogout (){
        setToken('')
        navigate('/login')
    }

    if (token !== '' ) {
        return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar elevation={0} className={navbar ? "nav__active" : "container__navbar"} position="fixed">
                        <Toolbar>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="div" className={navbar ? 'womanin__active' : 'womanin'}>
                                    <i>W/</i>
                                </Typography>
                            </Box>
                            <Box display='flex' sx={{ flexGrow: 1 }}>
                                <Box className='cursor'>
                                    <Link to='/home' className='no__text__decorator'>
                                        <Typography variant="h6" component="div" className={navbar ? "nav__item__active" : "nav__item"}>
                                            Início
                                        </Typography>
                                    </Link>
                                </Box>
    
                                <Box className='cursor'>
                                    <Link to='/meu-perfil' className='no__text__decorator'>
                                        <Typography variant="h6" component="div" className={navbar ? "nav__item__active" : "nav__item"}>
                                            Meu Perfil
                                        </Typography>
                                    </Link>
                                </Box>
    
                                <Box className='cursor'>
                                    <Link to='/quem-somos' className='no__text__decorator'>
                                        <Typography variant="h6" component="div" className={navbar ? "nav__item__active" : "nav__item"}>
                                            Quem somos
                                        </Typography>
                                    </Link>
                                </Box>
    
                                <Box className='cursor'>
                                    <Link to='/postagens' className='no__text__decorator'>
                                        <Typography variant="h6" component="div" className={navbar ? "nav__item__active" : "nav__item"}>
                                            Vagas
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
    
                            <Box display="flex" justifyContent="start">
                                <Link to='/login' className='no__text__decorator'>
                                    <Button onClick={goLogout} type='submit' variant='outlined' className={navbar ? 'btn__nav__active' : 'btn__nav'}>
                                        Sair
                                    </Button>
                                </Link>
                            </Box>
    
                        </Toolbar>
                    </AppBar>
                </Box>
            </>
        )
    } else {
        return (
            <>
    
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar elevation={0} className={navbar ? "nav__active" : "container__navbar"} position="fixed">
                        <Toolbar>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" component="div" className={navbar ? 'womanin__active' : 'womanin'}>
                                    <i>W/</i>
                                </Typography>
                            </Box>
                            <Box display='flex' sx={{ flexGrow: 1 }}>
                                <Box className='cursor'>
                                    <Link to='/home' className='no__text__decorator'>
                                        <Typography variant="h6" component="div" className={navbar ? "nav__item__active" : "nav__item"}>
                                            Início
                                        </Typography>
                                    </Link>
                                </Box>
    
                               
    
                                <Box className='cursor'>
                                    <Link to='/quem-somos' className='no__text__decorator'>
                                        <Typography variant="h6" component="div" className={navbar ? "nav__item__active" : "nav__item"}>
                                            Quem somos
                                        </Typography>
                                    </Link>
                                </Box>
    
                                <Box className='cursor'>
                                    <Link to='/postagens' className='no__text__decorator'>
                                        <Typography variant="h6" component="div" className={navbar ? "nav__item__active" : "nav__item"}>
                                            Vagas
                                        </Typography>
                                    </Link>
                                </Box>

                            </Box>
    
                            <Box display="flex" justifyContent="start">
                                <Link to='/login' className='no__text__decorator'>
                                    <Button type='submit' variant='outlined' className={navbar ? 'btn__nav__active' : 'btn__nav'}>
                                        Entrar
                                    </Button>
                                </Link>
                            </Box>
    
                        </Toolbar>
                    </AppBar>
                </Box>
            </>
        )
    }

    
}

export default Navbar;

{/* <Link to="/home" className="no__text__decorator">
<Box mx={1} className='cursor'>
    <Typography className='navbar__item' variant="h6" color="white">
        Home
    </Typography>
</Box>
</Link>
<Link to="/Quem-Somos" className="no__text__decorator">
<Box mx={1} className='cursor'>
    <Typography className='navbar__item' variant="h6" color="white">
        Quem Somos
    </Typography>
</Box>
</Link>
<Link to="/login" className="no__text__decorator">
<Box mx={1} className='cursor'>
    <Typography className='navbar__item' variant="h6" color="white">
        Login
    </Typography>
</Box>
</Link>
<Link to="/login" className="no__text__decorator">
<Box mx={1} className='cursor'>
    <Typography className='navbar__item' variant="h6" color="white">
        Sair
    </Typography>
</Box>
</Link> */}

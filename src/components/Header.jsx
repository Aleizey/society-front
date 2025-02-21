import { Outlet } from "react-router";
import Logo from "../resource/images/logo.png";
import Navbar from "./Navbar";
import { Avatar, Badge, Divider, IconButton, Stack } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Search } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import ModalProfile from "./ModalProfile";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {

    const [modalProfile, setModalProfile] = React.useState(false);

    const handleClick = () => {

        if (modalProfile) {
            setModalProfile(false);
        }
        else {
            setModalProfile(true);
        }
    }

    return (
        <>
            <div className="sticky min-h-min top-0 z-3">
                <div className="bg-sky-600 text-white text-xs py-1 flex justify-center items-center">
                    FREE CLUB OF ASOCIACIONES | CANARY ISLAND
                </div>
                <div className="bg-white flex flex-row justify-between items-center px-3 border-b-1 border-gray-300">
                    {/* LOGO */}
                    <div className="flex flex-row items-center space-x-5">
                        <div>
                            <img src={Logo} alt="" width={130} />
                        </div>
                        <div className="flex md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                    {/* NAVBAR  */}
                    <Navbar />
                    {/* USER Y CARRITO */}
                    <div className="flex flex-row py-2.5 justify-between items-center space-x-6">

                        <div className=" relative ">
                            <Search>
                                <SearchIcon />
                            </Search>
                        </div>
                        <div className="relative">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="primary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </div>

                        <div className="relative">
                            <Badge badgeContent={4} color="primary">
                                <MailIcon color="action" />
                            </Badge>
                        </div>

                        <div>
                            <Stack className="cursor-pointer" onClick={() => handleClick()} direction="row" spacing={2}>
                                <Avatar
                                    alt="Alex"
                                    src="/static/images/avatar/1.jpg"
                                    sx={{
                                        width: 40, height: 40, '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 100)',
                                        }
                                    }}
                                />
                            </Stack>
                            {modalProfile && (
                                <ModalProfile />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header;
import { Link, Outlet } from "react-router-dom";
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
import { useAuth } from "../hooks/auth";
import SearchPanel from "./SearchPanel";
import ModalCarrito from "./ModalCarrito";

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
    const [modalCarrito, setModalModalCarrito] = React.useState(false);
    const { user } = useAuth({ middleware: 'auth' });

    const [search, setSearch] = React.useState(false);

    const handleClick = () => {

        if (modalProfile) {
            setModalProfile(false);
        }
        else {
            setModalProfile(true);
            setModalModalCarrito(false);
        }

    }

    const handleCarrito = () => {

        if (modalCarrito) {
            setModalModalCarrito(false);
        }
        else {
            setModalModalCarrito(true);
            setModalProfile(false);
        }
    }

    return (
        <>
            {search && <SearchPanel onClose={() => setSearch(false)} />}

            <div className="sticky min-h-min top-0 z-3">
                <div className="bg-sky-400 text-white text-xs py-1 flex justify-center items-center">
                    FREE CLUB OF ASOCIACIONES | CANARY ISLAND
                </div>
                <div className="bg-white header grid md:grid-cols-5 grid-cols-2 justify-between items-center px-3">
                    {/* LOGO */}
                    <div className="flex flex-row items-center space-x-1">
                        <div>
                            <Link to="/">
                                <img src={Logo} alt="" width={55} />
                            </Link>
                        </div>
                        <div className="flex md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-8">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                    {/* NAVBAR  */}
                    <Navbar />
                    {/* USER Y CARRITO */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 ms-auto text-center py-2.5 justify-between items-center md:space-x-6">

                        <div onClick={() => setSearch(true)} className="hover:bg-gray-100 transition-all cursor-pointer py-2 rounded-full  relative m-0 md:block hidden">
                            <Search>
                                <SearchIcon />
                            </Search>
                        </div>
                        <div className="relative m-0">
                            <IconButton onClick={user ? () => handleCarrito() : undefined} aria-label="cart">
                                <StyledBadge badgeContent={4} color="primary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </div>

                        <div className="relative m-0">
                            <Badge badgeContent={4} color="primary">
                                <MailIcon color="action" />
                            </Badge>
                        </div>

                        <div>
                            <Stack className="cursor-pointer flex justify-center" onClick={user ? () => handleClick() : undefined} direction="row" spacing={2}>
                                <Avatar
                                    alt={user?.name}
                                    src="/static/images/avatar/1.jpg"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        ...(user && { '&:hover': { backgroundColor: 'rgba(0, 0, 100)', } })
                                    }}
                                />
                            </Stack>
                            {user && (
                                <>
                                    {modalProfile && (
                                        <ModalProfile user={user} />
                                    )}
                                </>
                            )}
                            {user && (
                                <>
                                    {modalCarrito && (
                                        <ModalCarrito user={user} />
                                    )}
                                </>
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
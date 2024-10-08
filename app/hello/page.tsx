// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
'use client'
import { AppBar, Avatar, Box, Button, colors, Container, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Reorder from '@mui/icons-material/Reorder';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  // const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    const [countClick, setCountClick] = useState(0);
    const [mobil, setMobil] = useState("Innova");
    const [change, setChange] = useState(false);

  const countClickHandler = () => {
      setCountClick(countClick + 1);
  };
  const navbarClick = () => {
    // navigate('mobil'); 
    alert("as")
    window.location.href = 'mobil'

  };
  useEffect(()=>{
    if(countClick>19){
        setMobil("Kijang")
    }
  },[countClick])

  const mahasiswa = {
    nama : "Enrico",
    usia : 21,
    jurusan : "Sistem Informasi Bisnis",
    matkul : ["FPW", "Data Mining", "Machine Learning"]
    }
    function Welcome(props:any) {return <h1>Hello, {props.name}</h1>;}


    const [open, setOpen] = useState(true);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };


    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {['Buku', 'Sepatu', 'Baju'].map((text, index) => (
            <ListItem key={text} onClick={() => navbarClick()} disablePadding>
              <ListItemButton>
                <ListItemText primary={text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Mobil', 'Motor', 'Truk'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
  return (
    <main>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Button onClick={toggleDrawer(true)} >
            <Reorder sx={{ display: { xs: 'flex', md: 'none' }}} style={{color:"white"}} ></Reorder>
          </Button>

          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div>
        <h1>Data Mahasiswa</h1>
        <p>Nama : {mahasiswa.nama}</p>
        <p>Usia : {mahasiswa.usia}</p>
        <p>jurusan : {mahasiswa.jurusan}</p>
        <div>{mahasiswa.usia >= 17 ? 
            <p style={{color:"green"}}>Legal</p> : 
            <p style={{color:"red"}}>Underage</p>}
        </div>
        <p>Mata Kuliah yang diambil : </p>
        <ul>{
            mahasiswa.matkul.map((m,index)=>{
                return <li key={index}>{m}</li>
            })}
        </ul>
        <h2>{countClick}</h2>
        <h2>{mobil}</h2>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Link href="./hello1" className="btn btn-primary">Pindah</Link>
        <button onClick={countClickHandler}>
            tambah
        </button>
        <form action="">
        <TextField id="filled-basic" label="Filled" variant="filled" />    </form>
        

    </div>


    </main>
  );
}
export default ResponsiveAppBar;
// const pages = ['Products', 'Pricing', 'Blog'];

// export default function Page() {
// return (
//         <AppBar>
//     <Container maxWidth="xl">
//     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//             //   onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               {/* <MenuIcon /> */}
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//             //   anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={true}
//             //   onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} 
//                 // onClick={handleCloseNavMenu}
//                 >
//                   <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//     </Container>
// </AppBar>
// );
// }

// export function Mahasiswa() {
//     const [countClick, setCountClick] = useState(0);
//     const [mobil, setMobil] = useState("Innova");
    
    
//     useEffect(()=>{
//        alert("asd"); 
//         setMobil("Kijang")
//     })
    
//     const countClickHandler = () => {
//         setCountClick(countClick + 1);
//     };



//     const mahasiswa = {
//     nama : "Enrico",
//     usia : 21,
//     jurusan : "Sistem Informasi Bisnis",
//     matkul : ["FPW", "Data Mining", "Machine Learning"]
//     }
//     return (
//         <div>
//             <h1>Data Mahasiswa</h1>
//             <p>Nama : {mahasiswa.nama}</p>
//             <p>Usia : {mahasiswa.usia}</p>
//             <p>jurusan : {mahasiswa.jurusan}</p>
//             <div>{mahasiswa.usia >= 17 ? 
//                 <p style={{color:"green"}}>Legal</p> : 
//                 <p style={{color:"red"}}>Underage</p>}
//             </div>
//             <p>Mata Kuliah yang diambil : </p>
//             <ul>{
//                 mahasiswa.matkul.map((m,index)=>{
//                     return <li key={index}>{m}</li>
//                 })}
//             </ul>
//             {/* <h2>{countClick}</h2> */}
//             {/* <h2>{mobil}</h2> */}
//             <button onClick={countClickHandler}>
//                 tambah
//             </button>
//         </div> 
//     );
// } 


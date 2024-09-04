'use client'
import { AppBar, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
// import * as React from 'react';
import Mobil from '../kayu/page';
import Kayu from '../kayu/page';
import { useEffect, useState } from 'react';
import Sepatu from '../sepatu/page';

export default function BasicTable() {
    const [open, setOpen] = useState(true);
    const [data, setData] = useState(null);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const [judul, setJudul] = useState("kayu");
    const navbarClick = (text:string) => {
        setJudul(text);
        if(text=="Kayu"){
            setTable(<Kayu></Kayu>);
        }else if(text=="Sepatu"){
            setTable(<Sepatu></Sepatu>);
        }
    };
    
    const [isiTable, setTable] = useState(<Kayu></Kayu>);

return (
    <>
        <div style={{display:"flex"}}>
            <div style={{backgroundColor:"white",color:"black",height:"100vh"}}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
                    <List>
                        {['Kayu', 'Sepatu', 'Baju'].map((text, index) => (
                        <ListItem key={text} onClick={() => navbarClick(text)} disablePadding>
                            <ListItemButton>
                            <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </div>
            <div>
                <Container>
                    <h1>{judul}</h1>
                    {isiTable}
                </Container>
            </div>
        </div> 
    </>
  );
}

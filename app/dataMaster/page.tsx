'use client'
import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Kayu from '../kayu/page';
import { useEffect, useState } from 'react';
import Sepatu from '../sepatu/page';
import Link from 'next/link';

export default function BasicTable() {
    const [open, setOpen] = useState(true);
    const [data, setData] = useState(null);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const [judul, setJudul] = useState("kayu");
    const [isiTable, setTable] = useState(<Kayu/>);
    const navbarClick = (text:string) => {
        setJudul(text);
        if(text=="Kayu"){
            setTable(<Kayu></Kayu>);
        }else if(text=="Sepatu"){
            setTable(<Sepatu></Sepatu>);
        }
    };

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
                    <div style={{display:"flex", marginBottom:"10px"}}>
                        <div style={{marginRight:"10px"}}>
                            <h1>{judul.toUpperCase()}</h1>
                        </div>
                        <div>
                            <Link href={judul.toLowerCase()+"/create"}><Button variant="contained" style={{color:"white",border:"1px solid white",backgroundColor:"black"}}>Create</Button></Link>
                        </div>
                    </div>
                    {isiTable}
                </Container>
            </div>
        </div> 
    </>
  );
}

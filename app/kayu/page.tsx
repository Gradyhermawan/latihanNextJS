'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


function createData(
  id:number,
  nama_kayu: string,
  length: string,
  diameter: string,
  kode_kayu: string,
  arrived_date: string,
  // protein: number,
) {
  return { id,nama_kayu, length, diameter,kode_kayu, arrived_date };
}

export default function Kayu() {
  // const [data, setData] = useState([]);
  const [data, setData] = useState<{ id: number; nama_kayu: string; length: string; diameter: string; kode_kayu: string; arrived_date: string; }[]>([]);
  const [first,setFirst]=useState(true);
  const [open, setOpen] = useState(false);
  const [deleteID, setDeleteID] = useState(-1);
  const handleClickOpen = (deleteID:number) => {
    setOpen(true);
    setDeleteID(deleteID);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
        if(first==true){
          try {
            const response = await fetch('http://localhost:3000/kayu');
            const textResponse = await response.text();
            var myobj = JSON.parse(textResponse);
            myobj.forEach((element:any) => {
              setData(data=>[...data,createData(element.id,element.nama_kayu,element.length,element.diameter,element.kode_kayu,element.arrived_date)]); 
            });
            setFirst(false);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      } 
    };
    fetchData();
  }, [])

  const deleteItem = () => {
      setOpen(false);
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/kayu/'+deleteID,{
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
          const textResponse = await response.text();
          // setData(data.filter((item) => item.id !== deleteID));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
      fetchData();
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={deleteItem} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nama</TableCell>
            <TableCell align="right">Panjang</TableCell>
            <TableCell align="right">Diameter</TableCell>
            <TableCell align="right">Kedatangan Kayu</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              // onClick={() => changePageEdit(row.id)}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nama_kayu}</TableCell>
              <TableCell align="right">{row.length}</TableCell>
              <TableCell align="right">{row.diameter}</TableCell>
              <TableCell align="right">{row.arrived_date}</TableCell>
              <Link href={{pathname: 'kayu/edit',query: row  }}><TableCell align="right"><EditIcon /></TableCell></Link>
              
              <TableCell align="right"  ><DeleteIcon onClick={() => handleClickOpen(row.id)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
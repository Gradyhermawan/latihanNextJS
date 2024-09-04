'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

function createData(
  id:number,
  nama: string,
  ukuran: number,
  warna: string,

) {
  return { id,nama, ukuran, warna };
}



export default function Sepatu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/sepatu');
            const textResponse = await response.text();
            var myobj = JSON.parse(textResponse);
            myobj.forEach((element:any) => {
              setData(data=>[...data,createData(element.id,element.nama,element.ukuran,element.warna)]); 
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [])

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nama</TableCell>
            <TableCell align="right">Ukuran</TableCell>
            <TableCell align="right">Warna</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nama}</TableCell>
              <TableCell align="right">{row.ukuran}</TableCell>
              <TableCell align="right">{row.warna}</TableCell>
              {/* <TableCell align="right">{row.nama_kayu}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
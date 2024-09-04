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
  nama_kayu: string,
  length: string,
  diameter: string,
  arrived_date: string,
  // protein: number,
) {
  return { id,nama_kayu, length, diameter, arrived_date };
}

// const rows = [
//   // createData('Frozen yoghurt', 159, 6.0, 24),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


export default function Kayu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/kayu');
            const textResponse = await response.text();
            var myobj = JSON.parse(textResponse);
            myobj.forEach((element:any) => {
              setData(data=>[...data,createData(element.id,element.nama_kayu,element.length,element.diameter,element.arrived_date)]); 
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
            <TableCell align="right">Panjang</TableCell>
            <TableCell align="right">Diameter</TableCell>
            <TableCell align="right">Kedatangan Kayu</TableCell>
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
              <TableCell align="right">{row.nama_kayu}</TableCell>
              <TableCell align="right">{row.length}</TableCell>
              <TableCell align="right">{row.diameter}</TableCell>
              <TableCell align="right">{row.arrived_date}</TableCell>
              {/* <TableCell align="right">{row.nama_kayu}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
'use client'

import { Button, colors, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useNavigation } from "react-router-dom";


export default function editKayu() {
    const router = useSearchParams();
    const id = router.get('id');
    const nama_kayu = router.get('nama_kayu');
    const length = router.get('length');
    const diameter = router.get('diameter');
    const kode_kayu = router.get('kode_kayu');
    useEffect(() => {
        // console.log(data);
        // formData['nama_kayu'] = nama_kayu;
    }, [])
    const [formData, setFormData] = useState({
        // nama_kayu: '',
        // length: 0,
        // diameter: 0,
        // kode_kayu: '',
        id: id,
        nama_kayu: nama_kayu,
        length: length,
        diameter: diameter,
        kode_kayu: kode_kayu,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
              try {
                const response = await fetch('http://localhost:3000/kayu/'+id,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:  JSON.stringify(formData),
                });
                const textResponse = await response.text();
                console.log(textResponse);
                
                // var myobj = JSON.parse(textResponse);
                // myobj.forEach((element:any) => {
                //   setData(data=>[...data,createData(element.id,element.nama_kayu,element.length,element.diameter,element.arrived_date)]); 
                // });
                
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
          
        };
        fetchData();
    };
    return (
        <>
            <Container>
                <h1>Create Kayu</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <TextField
                            type="text"
                            defaultValue={nama_kayu}
                            id="nama"
                            name="nama_kayu"
                            onChange={handleChange}
                            variant="standard"
                            label="Nama"
                            
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>

                        <TextField
                            type="number"
                            id="length"
                            name="length"
                            defaultValue={length}

                            onChange={handleChange}
                            variant="standard"
                            label="Length"
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <TextField
                            type="number"
                            id="diameter"
                            name="diameter"
                            defaultValue={diameter}
                            onChange={handleChange}
                            variant="standard"
                            label="diameter"
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <TextField
                            type="text"
                            id="kode_kayu"
                            name="kode_kayu"
                            defaultValue={kode_kayu}
                            onChange={handleChange}
                            variant="standard"
                            label="kode_kayu"
                        />
                    </div>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Container>
        </>

    );
}
'use client'

import { Button, colors, Container, TextField } from "@mui/material";
import { useState } from "react";

export default function createKayu() {
    const [formData, setFormData] = useState({
        nama_kayu: '',
        length: 0,
        diameter: 0,
        kode_kayu: '',
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
                // console.log( JSON.stringify({ formData }));
                
                const response = await fetch('http://localhost:3000/kayu',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:  JSON.stringify(formData),
                });
                const textResponse = await response.text();
                var myobj = JSON.parse(textResponse);
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
                        {/* <label htmlFor="nama">Nama:</label> */}
                        {/* <input
                        type="text"
                        id="nama"
                        name="nama_kayu"
                        onChange={handleChange}
                    /> */}
                        <TextField
                            type="text"
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
                            onChange={handleChange}
                            variant="standard"
                            label="Length"
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>

                        {/* <label htmlFor="diameter">Diameter:</label>
                    <input
                        type="number"
                        id="diameter"
                        name="diameter"
                        onChange={handleChange}
                    /> */}
                        <TextField
                            type="number"
                            id="diameter"
                            name="diameter"
                            onChange={handleChange}
                            variant="standard"
                            label="diameter"
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>

                        {/* <label htmlFor="name">Kode Kayu:</label>
                    <input
                        type="text"
                        id="kode"
                        name="kode"
                        onChange={handleChange}
                    /> */}
                        <TextField
                            type="text"
                            id="kode_kayu"
                            name="kode_kayu"
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
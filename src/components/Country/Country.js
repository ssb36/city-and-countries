import { Button, Input } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { CountryList } from './CountryList';

export const Country = () => {




    const [data, setData] = useState({
        countryname: "",
        population: "",
    });

    const handleChange = (e) => {

        const { id, value } = e.target;

        setData({
            ...data,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        axios.post("http://localhost:3004/country", data)
    }


    return (

        <div>
            <Input type="text" id='countryname' placeholder='country name' onChange={handleChange} />
            <br />
            <br />
            <Input type="text" id='population' placeholder='country population' onChange={handleChange} />
            <br />
            <br />
            <Button onClick={handleSubmit} variant='contained' onChange={handleChange} >Add Country</Button>

        </div>
    )
}

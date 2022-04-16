import { Button, Input } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { CityList } from './CityList'

export const City = () => {


    const [data, setData] = useState({
        cityname: "",
        citycountry: "",
        citypopulation: "",
    });

    const handleChange = (e) => {

        const { id, value } = e.target;

        setData({
            ...data,
            [id]: value
        })
    }

    const handleSubmit = (e) => {
        axios.post("http://localhost:3004/city", data)
    }


    return (
        <>

            <h3 style={{ fontFamily: "Serif", color: "#8F7FD2" }}>Add City</h3>
            <div>
                <Input type="text" id='cityname' placeholder='city name' onChange={handleChange} />
                <br />
                <br />
                <Input type='text' id='country' placeholder='country' onChange={handleChange} ></Input>
                <br />
                <br />
                <Input type="text" id='citypopulation' placeholder='city population' onChange={handleChange} />
                <br />
                <br />
                <Button onClick={handleSubmit} variant='contained'>Add City</Button>
            </div>


        </>
    )
}

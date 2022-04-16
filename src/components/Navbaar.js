import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Button } from '@mui/material';

export const Navbaar = () => {

    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1em" }}>
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button onClick={() => navigate("/add-city")}>Add City</Button>
            <Button onClick={() => navigate("/add-country")}>Add Country</Button>

            <Button onClick={() => navigate("/cities")}>View Cities</Button>
            <Button onClick={() => navigate("/countries")}>View Countries</Button>
        </div>
    )
}

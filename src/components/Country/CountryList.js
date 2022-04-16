import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navbaar } from '../Navbaar';
import { Button } from '@mui/material';


export const CountryList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios("http://localhost:3004/country")
            setData(response.data)
        };
        fetchPost();
    }, []);


    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Country</TableCell>
                        <TableCell align="left">Population</TableCell>
                        <TableCell align="left">Edit</TableCell>
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}</TableCell>
                            <TableCell align="left">{row.countryname}</TableCell>
                            <TableCell align="left">{row.population}</TableCell>

                            <TableCell align="left"><Button variant='contained' >Edit</Button></TableCell>
                            <TableCell align="left"><Button variant='contained' >Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>


    )
}

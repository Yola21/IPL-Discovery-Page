import React from 'react'
import './Players.css'
import { Player_Details } from './json/player_details'
import {TeamwiseRuns } from './json/teamwise_runs'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@material-ui/core';


function Players() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const options = Player_Details.map((option) => {
        const firstletter = option.batsman[0].toUpperCase();
        return{
            firstletter: firstletter,
            ...option,
        };
    });

    const Country = [
        {country: "India"},
        {country: "Sri Lanka"},
        {country: "Australia"},
        {country: "New Zealand"},
        {country: "England"},
        {country: "South Africa"},
        {country: "Afghanistan"},
        {country: "West Indies"},
        {country: "Bangladesh"},
        {country: "Zimbabwe"},
    ]

    const countries = Country.map((country) => {
        const firstletter = country.country[0].toUpperCase();
        return{
            firstletter: firstletter,
            ...country,
        };
    });

    const Seasons = [
        {season: "2007"},
        {season: "2008"},
        {season: "2009"},
        {season: "2010"},
        {season: "2011"},
        {season: "2012"},
        {season: "2013"},
        {season: "2014"},
        {season: "2015"},
        {season: "2016"},
        {season: "2017"},
        {season: "2018"},
        {season: "2019"},
        {season: "2020"},
    ]

    const columns = [
        { 
            id: 'batsman', 
            label: 'Name', 
            minWidth: 170,
        },
        { 
            id: 'total_runs', 
            label: 'Total Runs', 
            minWidth: 100,
        },
        {
          id: 'out',
          label: 'Out',
          minWidth: 170,
        },
        {
          id: 'numberofballs',
          label: 'Total Balls',
          minWidth: 170,
        },
        {
          id: 'average',
          label: 'Average',
          minWidth: 170,
        },
        {
          id: 'strikerate',
          label: 'Strike Rate',
          minWidth: 170,
        },
      ];

    return (
        <div className="players">
            <div className="players_filter">
                <Autocomplete
                    className="players_autocomplete" 
                    id="grouped-country"
                    options={countries.sort((a, b) => -b.firstletter.localeCompare(a.firstletter))}
                    groupBy={(option) => option.firstletter}
                    getOptionLabel={(option) => option.country}
                    renderInput={(params) => <TextField {...params} label="Filter by Country" variant="outlined" />}
                />

                <Autocomplete
                    className="players_autocomplete" 
                    id="grouped-player"
                    options={options.sort((a, b) => -b.firstletter.localeCompare(a.firstletter))}
                    groupBy={(option) => option.firstletter}
                    getOptionLabel={(option) => option.batsman}
                    renderInput={(params) => <TextField {...params} label="Filter by Player" variant="outlined" />}
                />

                <Autocomplete
                    className="players_autocomplete"
                    id="combo-box-teams"
                    options={TeamwiseRuns}
                    getOptionLabel={(option) => option.team}
                    renderInput={(params) => <TextField {...params} label="Filter by Team" variant="outlined" />}
                />

                <Autocomplete
                    className="players_autocomplete"
                    id="combo-box-seasons"
                    options={Seasons}
                    getOptionLabel={(option) => option.season}
                    renderInput={(params) => <TextField {...params} label="Filter by Season" variant="outlined" />}
                />
            </div>
            <div className="players_table">
                <Paper className="players_table_paper">
                    <TableContainer className="players_table_container">
                        <Table stickyHeader aria-label="players-table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell   
                                            key={column.id}
                                            style={{ minWidth: column.minWidth, backgroundColor: "#311b92", color: "white"}}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Player_Details.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((detail) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} >
                                            {columns.map((column) => {
                                                const value = detail[column.id];
                                                return (
                                                <TableCell key={column.id}>
                                                    {typeof value === 'number' ? Math.round(value) : value}
                                                </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        component="div"
                        count={Player_Details.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    )
}

export default Players

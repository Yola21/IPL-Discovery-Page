import React from 'react';
import './Teams.css';
import PropTypes from 'prop-types';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TeamwiseRuns } from './json/teamwise_runs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, CardContent } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

function Teams() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} id="teams">
            <AppBar position="static" className="team_appbar">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                  {
                    TeamwiseRuns.map((team, key) => {
                      return(
                        <Tab
                          label={ team.team }
                          {...a11yProps(key)}
                          className="team_tab_label"
                        />
                      );
                    })
                  }
                </Tabs>
            </AppBar>

              {
                TeamwiseRuns.map((data, key) => {
                    return(
                      <TabPanel value={value} index={key} className="team_stats">
                        <div className="team_body">
                          <div className="team_title">
                            <Card className="team_card" style={{borderTop: data.borderTop}}>
                              <CardContent>
                                <img
                                  className="team_logo" 
                                  src={data.src} 
                                  alt={data.team}
                                />
                                <br/>
                                <div className="team_card_overlay" style={{backgroundColor: data.backgroundcolor}}>
                                  <div className="team_card_text">
                                    {data.team}
                                  </div> 
                                </div>
                              </CardContent>
                            </Card>  
                          </div>
          
                          <div className="team_info">
                            <div className="team_info-1"> 
                              <TableContainer component={Paper}>
                                <Table className="team_table" aria-label="simple table">
                                  <TableHead className="team_tableHead" style={{backgroundColor: data.backgroundcolor}}>
                                    <TableRow>
                                      <TableCell align="right">Home Wins</TableCell>
                                      <TableCell align="right">Away Wins</TableCell>
                                      <TableCell align="right">Home Matches</TableCell>
                                      <TableCell align="right">Away Matches</TableCell>
                                      <TableCell align="right">Home Win Percentage</TableCell>
                                      <TableCell align="right">Away Win Percentage</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell align="center">{ data.home_wins } </TableCell>
                                      <TableCell align="center">{ data.away_matches } </TableCell>
                                      <TableCell align="center">{ data.home_matches } </TableCell>
                                      <TableCell align="center">{ data.away_matches } </TableCell>
                                      <TableCell align="center">{ Math.round(data.home_win_percentage) }% </TableCell>
                                      <TableCell align="center">{ Math.round(data.away_win_percentage) }% </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </div>
                          
                            <div className="team_info-2">
                              <div className="team_info_p">
                                <p>Owner: <span>{ data.owner }</span></p> 
                              </div>
                              <div className="team_info_p">
                                <p>Coach: <span>{ data.coach }</span></p>
                              </div>
                            </div>

                            <div className="team_info-2">
                              <div className="team_info_p">
                                <p>Home Ground: <span>{ data.venue }</span></p>
                              </div>
                              <div className="team_info_p">
                                <p>Captain: <span>{ data.Captain }</span></p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </TabPanel>
                    );    
                })
              }
        </div>
    );
}

export default Teams
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../User/UserData.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function UserData(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
            <h1 align="center" className="spacing textTransform">User</h1>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" className="paraSpacing textTransform">Id</TableCell>
                <TableCell  align="center" className="paraSpacing textTransform">Name</TableCell>
                <TableCell  align="center" className="paraSpacing textTransform">UserName</TableCell>
                <TableCell  align="center" className="paraSpacing textTransform">Email</TableCell>
                <TableCell  align="center" className="paraSpacing textTransform">Website</TableCell>
                <TableCell  align="center" className="paraSpacing textTransform">Company Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.allUsers?.map((item,index) => (
                <TableRow key={index} align="center">
                  <TableCell component="th" className="tableHead" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell component="th" className="tableHead" scope="row" align="center">
                    {item.name}
                  </TableCell>
                  <TableCell component="th" className="tableHead" scope="row" align="center">
                    {item.username}
                  </TableCell>
                  <TableCell component="th" className="tableHead" scope="row" align="center">
                    {item.email}
                  </TableCell>
                  <TableCell component="th" className="tableHead" scope="row" align="center">
                    {item.website}
                  </TableCell>
                  <TableCell component="th" className="tableHead" scope="row" align="center">
                    {item.company.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
  );
}
import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});


export default function UserPost() {
  const classes = useStyles();
  const url ="https://jsonplaceholder.typicode.com/posts";
    const [data, setData]=useState();
    const getpost = () =>
      fetch(url)
        .then((res) => res.json())
  
    useEffect(() => {
      getpost().then((data) => setData(data))
    }, [])
  function deleteUser(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        getpost();
      })
    });
  }
  return (
    <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {console.log(data)}
                <TableCell align="center">UserName</TableCell>
                <TableCell align="center">Post Id</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Body</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item,index) => (
                <TableRow key={index} align="center">
                   <TableCell component="th" scope="row">
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  {/*<TableCell component="th" scope="row" align="center">
                    {item.username}
                  </TableCell>*/}
                  <TableCell component="th" scope="row" align="center">
                    {item.title}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {item.body}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                  <Button variant="contained" color="primary" onClick={()=>deleteUser(item.id)}>Delete</Button>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
  );
}
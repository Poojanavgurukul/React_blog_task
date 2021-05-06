import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import '../Post/Post.css';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}));


export default function AddPostForm(){
    const classes = useStyles();
    const [state, setState] = useState({
        userId:"",
        title:"",
        body:""
    });
    const [msg, setMsg] = useState()

    function changeHandler(evt){
        const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
    }
 //post api 
    function submitHandler(e){
       e.preventDefault()
       const url ="https://jsonplaceholder.typicode.com/posts";
       fetch(url,{
           method:'POST',
           body:JSON.stringify({state}),
           headers:{
               'Content-type':'application/json; charset=UTF-8'
           },
       })
       .then((response)=>response.json())
       .then((json) =>{
           console.log('sucess')
           setMsg('sucess')
           return 'sucess'
        })
       .catch((error)=>{
           console.log('fail')
           setMsg('fail')
           return 'fail'
       })
     }
    
    return (
        <div>
            <h1 align="center" className="spacing textTransform">Add Your Post</h1>
            <form onSubmit={submitHandler}>
            <div className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment" className="paraSpacing tableHead">userId</InputLabel>
                <Input
                id="input-with-icon-adornment"
                type="text"
                name="userId"
                value={state.userId}
                onChange={changeHandler}
                startAdornment={
                    <InputAdornment position="start">
                    </InputAdornment>
                }
                />
            </div>
            <div className={classes.margin}>
             <InputLabel htmlFor="input-with-icon-adornment" className="paraSpacing tableHead">Title</InputLabel>
                <Input
                id="input-with-icon-adornment"
                type="text"
                name="title"
                value={state.title}
                onChange={changeHandler}
                startAdornment={
                    <InputAdornment position="start">
                    </InputAdornment>
                }
                />
                </div>
                <div className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment" className="paraSpacing tableHead">Body</InputLabel>
                <Input
                id="input-with-icon-adornment"
                type="text"
                name="body"
                value={state.body}
                onChange={changeHandler}
                startAdornment={
                    <InputAdornment position="start">
                    </InputAdornment>
                }
                />
                </div>
            <div>
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
            </div>
            </form>
            {msg==='sucess'?<Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert
      </Alert>:''}
      {msg==='fail'?<Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is a Failure alert
      </Alert>:''}
    </div>
    )
}
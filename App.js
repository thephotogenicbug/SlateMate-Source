import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography, CardMedia} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  grid:{
    width:'100%',
    marginTop:'2%',
   
    
  },
  paper:{
    padding:theme.spacing(2),
    textAlign:'center',
  },
  media:{
    height:'400px',
    margin:'auto',
    width:'400px',

  },
 

}));



function App() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.grid} >
      <Grid item xs={12} md={6} >
        <Paper className={classes.paper} style={{background:'#181357' ,  }}>
        <Typography variant="h4" style={{color:'#eb59ae', fontWeight: 'bold', fontSize:'60px',textAlign:'justify', margin:'5%', backgroundSize:'100%' }}>
        One-to-one online<br/> tuitions from home
        </Typography>
        <Typography variant="h5" style={{color:'#ffff', fontWeight: 'bold', fontSize:'30px', textAlign:'justify', margin:'5%'}}>
        Keep your child’s studies on track with <br/> interactive online tuition
        </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} >
          <CardMedia className={classes.media} image="student.png" />
      </Grid>
      <Grid item xs={6} md={4}   container  justify="center" alignItems="flex-start">
         <Typography  variant={'subtitle1'}  style={{fontWeight:'bold',   margin:'auto'}}>
         40000+ Tutoring hours   
         </Typography>
      </Grid>
      <Grid item xs={6} md={4}  container  justify="center" alignItems="flex-start" >
         <Typography  variant={'subtitle1'} style={{fontWeight:'bold',  margin:'auto'}}>
         5-Star G o o g l e  Reviews
  
         </Typography>
      </Grid>
      <Grid item xs={6} md={4}  container justify="center" alignItems="flex-start"  >
         <Typography  variant={'subtitle1'} alignItems="flex-start"  style={{fontWeight:'bold',  margin:'auto'}}>
         Trusted by 3000+ Students  
         </Typography>
      </Grid>
    </Grid>
  );
}

export default App;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography, CardMedia, Hidden} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({

  grid:{
    width:'100%',
    marginTop:'2%',
     
  },
  paper:{
    padding:theme.spacing(2),
    textAlign:'center',
    background:'#181357',
    [theme.breakpoints.down("sm")]:{
      
    }

  },
  media:{
    height:'350px',
    margin:'auto',
    width:'350px',
    [theme.breakpoints.down("sm")]:{
      width:'250px',
      height:'250px',
      
    }

  },
  heading:{
    color:'#eb59ae',
     fontWeight: 'bold', 
     fontSize:'60px',
     textAlign:'justify', 
     margin:'5%', 
     backgroundSize:'100%',
     [theme.breakpoints.down("xs")]:{
       textAlign:"center",
       fontSize:'45px',
       margin:'3%', 
     },
 
  },
  heading:{
    color:'#eb59ae',
    fontWeight: 'bold', 
    fontSize:'60px',
    textAlign:'justify', 
    margin:'5%', 
    backgroundSize:'100%',
     [theme.breakpoints.down("sm")]:{
       textAlign:"center",
       fontSize:'40px',
       margin:'3%', 
     },
 
  },
  paragraph:{
    color:'#ffff', 
    fontWeight: 'bold', 
    fontSize:'30px', 
    textAlign:'justify', 
    margin:'5%',
    [theme.breakpoints.down("sm")]:{
      fontSize:'20px',
      margin:'1%',
      textAlign:'center',
  

    }
    
  },
  threegrid:{
    fontWeight:'bold',  
     margin:'auto',
     fontSize:'25px',
     marginTop:'5%',
     [theme.breakpoints.down("sm")]:{
      fontWeight:'bold',  
      marginTop:'5%',
      fontSize:'15px',
     }
  }
 

}));



function App() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.grid} >
      <Grid item xs={12} md={6}   >
        
        <Paper className={classes.paper} >
        <Typography className={classes.heading}  variant="h4" >
        One-to-one online<br/> tuitions from home
       
        </Typography>
        <Typography  className={classes.paragraph}  variant="h5" >
        Keep your child’s studies on track with <br/> interactive online tuition
        </Typography>
       
        </Paper>
        
      </Grid>
      <Grid item xs={12} md={6}  >
          <CardMedia className={classes.media} image="student.png" />
      </Grid>
      <Grid item xs={6} md={4}   container  justify="center" alignItems="flex-start">
         <Typography   className={classes.threegrid}  variant={'subtitle1'} >
         40000+ Tutoring hours   
         </Typography>
      </Grid>
      <Grid item xs={6} md={4}  container  justify="center" alignItems="flex-start" >
         <Typography className={classes.threegrid} variant={'subtitle1'} >
         5-Star G o o g l e  Reviews
  
         </Typography>
      </Grid>
      <Hidden xsDown>
      <Grid item xs={6} md={4}  container justify="center" alignItems="flex-start"  >
         <Typography   className={classes.threegrid}  variant={'subtitle1'} alignItems="flex-start">
         Trusted by 3000+ Students  
         </Typography>
      </Grid>
      </Hidden>
    </Grid>
  );
}

export default App;

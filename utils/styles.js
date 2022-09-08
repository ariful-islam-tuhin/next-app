import { makeStyles } from "@material-ui/core";




const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#296609',
        '& a': {       
            marginLeft: 10,
        },
    },

    backgroundColor:{
        backgroundColor:'#FFFBF4'
    },
  
    // header:{
    //     fontWeight:'bold',
    //     fontSize: '2.4rem',

    // },
    
    header:{
        position: 'sticky',
        top: '0px',
        zIndex: '1',

    } ,

   
  

});

export default useStyles
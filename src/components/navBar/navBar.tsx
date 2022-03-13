import './navBar.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import eye from '../../assets/eye.png'
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

const navBar = () => {

  const frowBetween = {
    display: 'flex',
    flexDirection: 'row' as any,
    justifyContent: 'space-between',
  }

  const frowCenter = {
    display: 'flex',
    flexDirection: 'row' as any,
    justifyContent: 'center',
    paddingTop: '50px',
  }


  return (
    <div style={frowCenter}>
      <div style={{...frowBetween, width: '70%'}}>
        <div>
          <a href=''>
            <img src={eye} style={{width: '30px'}}/>
          </a>  
        </div>
        <div style={{...frowBetween, width: '25%'}}>
          <Button style={{color: 'white'}} href='https://discord.com/'>Discord</Button>
          <Button style={{background: '#6163ff', color: 'white'}} href='https://twitter.com/'>Twitter</Button>
          <Link to="/new" className='newPageBtn'>New Page</Link>
        </div>

      </div>
    </div>
  )
}

export default navBar;
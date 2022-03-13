import './index.css';
import logo from '../../assets/topbar/logo.png';
import discrodIcon from '../../assets/topbar/discrodIcon.png';
import twitterIcon from '../../assets/topbar/twitterIcon.png';

const topBar = () => {
  
    return (
      <div className='topBar'>
          <div className='logoMain'>
                <img className='logo' src={logo} alt=''/>
                <span className='logoTitle'> TV PUNKS </span>
          </div>
          <div>
            <span className='topMenu topMR'>Minting</span>
            <span className='topMenu topMR'>Roadmap</span>
            <span className='topMenu topMR'>Story</span>
            <span className='topMenu'>FAQ</span>
          </div>
          <div className='topSocial'>
            <a href='https://discord.com/'><img src={discrodIcon} alt=''/></a>
            <a href='https://twitter.com/'><img src={twitterIcon} alt=''/></a>
          </div>
      </div>
    )
  }
  
  export default topBar;
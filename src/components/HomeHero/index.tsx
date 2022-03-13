import React, { useEffect, useState } from 'react'
import './styles.css'
import WebFont from "webfontloader";

export const HomeHero = () => {
  const [timer, setTimer] = useState({
    day: '00',
    hour: '00',
    minute: '00',
    second: '00'
  })
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Butcherman",
          "Fuzzy Bubbles",
          "Slackey",
          "Lobster",
          "Secular One",
          "VT323",
          "Press Start 2P",
        ],
      },
    });
  }, []);

  useEffect(() => {
    const myfunc = setInterval(function() {
      const now = new Date().getTime();
      const downDate = new Date("Nov 15, 2021 16:37:52").getTime()
      var timeleft = downDate - now;
          
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      setTimer({
        day: days > 9 ? `${days}` : `0${days}`,
        hour: hours > 9 ? `${hours}` : `0${hours}`,
        minute: minutes > 9 ? `${minutes}` : `0${minutes}`,
        second: seconds > 9 ? `${seconds}` : `0${seconds}`
      })
    }, 1000)
  }, [])


  return (
    <div className='home-hero' style={{fontFamily: 'VT323'}}>
      <div className='top-section'>
        <div className='welcome'>
          Welcome to
        </div>
        <div className='welcome-title' style={{fontFamily: 'VT323'}}>
          TV PUNKS
        </div>
        <div className='welcome-desc'>
          With some intro text or something, that will take some space 
        </div>
          
      </div>
      <div className='bottom-section'>
      <div className='sale'>
          <div className='sale-title' style={{fontFamily: 'VT323'}}>NFT SALE</div>
          <div className='sale-collection'>The 1st drop of the TV PUNKS Collection</div>
          <div className='sale-time'>
            <div>
              {timer.day}
              <div className='time-unit'>days</div>
            </div>
            <div> : </div>
            <div>
              {timer.hour} 
              <div className='time-unit'>hrs</div>
            </div>
            <div> : </div>
            <div>
              {timer.minute}
              <div className='time-unit'>min</div>
            </div>
            <div> : </div>
            <div>
              {timer.second} 
              <div className='time-unit'>sec</div>
            </div>
          </div>
          <div className='sale-desc'>
            TV PUNKS is a revolutionary community-oriented
            NFT project on Solana with unique Sharikng Royalty
            Ecomony for Community.   &nbsp;&nbsp;
            <span className='sale-desc-link'>Check more details.</span>
          </div>
          <a href='https://discord.com/' className='join-discord'>
            <span className='join-discord-icon'></span>
            <span>Join our DISCORD SERVER</span>
          </a>
        </div>  
        {/* <div className='sale-image'>
          <div className='sale-image-wrapper'>
            <img src='assets/part1/SolKittie_0096.png' className='nft-top-section-img sale-image1' alt='image1' />
            <img src='assets/part1/SolKittie_0097.png' className='nft-top-section-img sale-image2' alt='image2' />
            <img src='assets/part1/SolKittie_0094.png' className='nft-top-section-img sale-image3' alt='image3'/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

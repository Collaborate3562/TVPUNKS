import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/topbar/logo.png'
import discrodIcon from '../../assets/topbar/discrodIcon.png'
import twitterIcon from '../../assets/topbar/twitterIcon.png'
import './styles.css'
import WebFont from "webfontloader";

export const MyNavBar = () => {
  const history = useHistory()
  const [isMenu, setIsMenu] = useState(false)

  const handleGoSection = (index: string) => {
    const element: any = document.getElementById(index)
    const topPos = element.offsetTop
    let navBarHeight: any = document.getElementById('navBar')?.offsetHeight
    if (navBarHeight === 0) navBarHeight = 70
    window.scrollTo({
      top: topPos - navBarHeight,
      left: 100,
      behavior: 'smooth'
    })
    setIsMenu(false)
  }

  const handleChangePage = (index: string) => {
    history.push(index)
    setIsMenu(false)
  }
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
  return (
    <>
      <div className='top-bar' id='navBar' style={{fontFamily: 'VT323'}}>
        <div className='logo-main' >
          <img className='logo' src={logo} alt='logo'/>
          <span className='logo-title'>TV PUNKS</span>
        </div>
        <div>
          <span className='top-menu top-mr' onClick={() => handleChangePage('/minting')}>Minting</span>
          <span className='top-menu top-mr' onClick={() => handleGoSection('roadmap')}>Roadmap</span>
          <span className='top-menu top-mr' onClick={() => handleGoSection('story')}>Story</span>
          <span className='top-menu' onClick={() => handleGoSection('faq')}>FAQ</span>
        </div>
        <div className='top-social'>
          <a href='https://twitter.com/'>
            <img src={twitterIcon} alt='twitter'/>
          </a>
          <a href='https://discord.com/'>
            <img src={discrodIcon} alt='discord'/>
          </a>
        </div>
      </div>
      <div className='mobile-nav' id='mobileNav'>
        <div className='menu-list' onClick={() => setIsMenu(true)}>
          <MenuIcon />
        </div>
        <div className='logo-main'>
          <img className='logo' src={logo} alt='logo'/>
          <span className='logo-title'>TV PUNKS</span>
        </div>
        <div className='top-social'>
          <a href='https://twitter.com/'>
            <img src={twitterIcon} alt='twitter'/>
          </a>
          <a href='https://discord.com/'>
            <img src={discrodIcon} alt='discord'/>
          </a>
        </div>
        <div className='sub-menu' style={{ width: isMenu ? '70%' : '0px'}}>
          <div>
            <div className='logo-main'>
              <img className='logo' src={logo} alt='logo'/>
              <span className='logo-title'>TV PUNKS</span>
            </div>
            <div className="mobile-item"  onClick={() => handleChangePage('/minting')}><span>Minting</span></div>
            <div className="mobile-item" onClick={() => handleGoSection('roadmap')}><span>Roadmap</span></div>
            <div className="mobile-item" onClick={() => handleGoSection('story')}><span>Story</span></div>
            <div className="mobile-item" onClick={() => handleGoSection('faq')}><span>Faq</span></div>
          </div>
        </div>
        {isMenu && (
          <div className='overlay' onClick={() => setIsMenu(false)} />
        )}
      </div>
    </>
  )
}

const MenuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#FFD029" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
    </svg>
  )
}

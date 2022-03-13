import React, { useState, useEffect } from 'react'
import WebFont from "webfontloader";
import {
  FooterContainer,
  SocialIconWrapper,
  ArrowIconWrapper
} from './styles'

export const Footer = () => {
  const [isArrow, setIsArrow] = useState(false)

  const handleGoTop = () => {
    window.scrollTo(0, 0)
  }

  const redirectSite = (url: string) => {
    window.open(url, '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsArrow(true)
      } else {
        setIsArrow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isArrow])
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
      <FooterContainer style={{fontFamily: 'VT323'}}>
        <SocialIconWrapper>
          <img src='assets/images/twitter.png' alt='twitter' onClick={() => redirectSite('https://twitter.com/')} />
          <img src='assets/images/discord.png' alt='discord' onClick={() => redirectSite('https://discord.com/')} />
        </SocialIconWrapper>
        <p>TV PUNKS. All right reserved 2021</p>
      </FooterContainer>
      {isArrow && (
        <ArrowIconWrapper onClick={handleGoTop}>
          <ArrowIcon />
        </ArrowIconWrapper>
      )}
    </>
  )
}

const ArrowIcon = () => {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-up" className="svg-inline--fa fa-chevron-circle-up fa-w-16 fa-2x footer-module--navigation--2nELV" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"></path></svg>
  )
}
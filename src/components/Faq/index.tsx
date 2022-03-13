import React, { useEffect } from 'react'
import WebFont from "webfontloader";
import {
  FaqContainer,
  TextBox,
  ImageWrapper
} from './styles'

export const Faq = () => {
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
    <FaqContainer id='faq'style={{fontFamily: 'VT323'}}>
      <h1>Faq</h1>
      <TextBox>
        <p><span>Q:</span> How many will be available to mint?  </p>
        <p><span>A:</span> 5000, and the first 500 will be free.</p>
      </TextBox>
      <TextBox>
        <p><span>Q:</span> How do we mint?  </p>
        <p><span>A:</span> Connect your wallet, press the mint button on the navigation bar; then select how many you want and click mint. Sign the transaction in metamask and you are good to go!</p>
      </TextBox>
      <TextBox>
        <p><span>Q:</span> What inspired you to create this collection?</p>
        <p><span>A:</span> My friend is an artist and we were joking around at the idea of creating a derivative of Crypto Punks! We came up with Tv Punkz, a way to express yourself digitally through artwork!</p>
      </TextBox>
      <TextBox>
        <p><span>Q:</span> What can we expect for the future if we mint a Tv Punk? </p>
        <p><span>A:</span> Our plan is to use this project as a genesis for many more projects to come! Our artist is amazing and we are going to be working on many projects this year together. If you own an original 'Tv Punk' You will be granted whitelist/or a cheaper mint price in future projects! 
</p>
      </TextBox>
      <ImageWrapper>
        <img src='assets/images/faq.png' alt='faq' />
      </ImageWrapper>
    </FaqContainer>
  )
}

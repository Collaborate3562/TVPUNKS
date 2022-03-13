import React from 'react'
import styled from 'styled-components'

export const ContainerStyled = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  padding: 50px 20px;

  @media (min-width: 1500px) {
    padding: 100px 40px;
  }

  @media (min-width: 1500px) {
    padding: 100px 80px;
  }
`

export const Container = (props: any) => {
  const style: any = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(189, 8, 8, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <ContainerStyled {...props} style={style}>
      {props.children}
    </ContainerStyled>
  )
}

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
      color: #7B9AD6;
      font-weight: 700;
      font-size: 20px;
      margin-top: 15px;
      margin-bottom: 0px;
      text-align: center;
    }

    h2 {
      margin-top: 20px;
      margin-bottom: 0px;
      color: #FFD74A;
      font-size: 40px;
      span {
        font-size: 32px;
      }
    }
  }

  @media (min-width: 768px) {
    > div:first-child {
      width: initial;
      p {
        color: #7B9AD6;
        text-align: initial;
      }
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    align-items: initial;
  }

  @media (min-width: 1500px) {
    > div:first-child {
      padding-right: 100px;
    }
  }
`

export const MintButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    > img {
      height: fit-content;
      position: absolute;
      transform: scale(0.6);

      &:first-child {
        left: -216px;
      }
      &:nth-child(2) {
        left: -106px;
        z-index: 10;
      }
      &:nth-child(3) {
        right: -91px;
        z-index: 10;
      }
      &:nth-child(4) {
        right: -209px;
      }
    }
    > div {
      z-index: 100;
      background-color: #5EC285;
      border-radius: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 200px;
      position: relative;
      border-bottom: 10px solid #087984;
 
      img {
        &:first-child {
          width: 74%;
          height: 74%;
          object-fit: cover;
          border-radius: 35px;
          box-shadow: 1px 1px 10px 10px #22fd22;        
        }
        &:last-child {
          position: absolute;
          width: fit-content;
          transform: scale(0.6);
          margin-top: 15px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    div.image-container {
      width: 560px;

      > img {
        transform: scale(0.7);
        height: fit-content;
        position: absolute;

        &:first-child {
          left: 0px;
        }
        &:nth-child(2) {
          left: 70px;
          z-index: 10;
        }
        &:nth-child(3) {
          right: 0px;
          z-index: 10;
        }
        &:nth-child(4) {
          right: -50px;
        }
      }

      > div {
        width: 230px;
        height: 230px;
        img {
          &:last-child {
            transform: scale(0.7);
            margin-top: 20px;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    div.image-container {
      width: 720px;
      > img {
        transform: scale(0.75);
      }

      > div {
        width: 270px;
        height: 270px;
      }
    }
  }
`

export const Button = styled.button`
  width: 200px;
  cursor: pointer;
  background-color: #5EC285;
  border-radius: 27px;
  font-size: 42px;
  color: #161131;
  font-weight: bold;
  padding-top: 13px;
  padding-bottom: 13px;
  outline: none;
  border: none;
  transition: all 0.3s;
  margin-top: 30px;
  z-index:1111;

  &:hover {
    background-color: #087984;
  }

  @media (min-width: 1200px) {
    width: 230px;
    font-size: 50px;
  }

  @media (min-width: 1200px) {
    width: 270px;
  }
`

export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: 60px;

  > div {
    &:first-child {
      margin-bottom: 20px;
    }
    h2 {
      font-size: 32px;
      color: #FFD74A;
      margin: 5px 0;
      font-weight: bold;
    }
    div {
      background-color: #B8EEFF;
      border-radius: 16px;
      display: flex;
      align-items: center;
      padding: 5px 10px;
      span {
        font-size: 18px;
        color: #7CBACE;
        margin-right: 8px;
        &:first-child {
          font-size: 32px;
          color: #161131;
          font-weight: bold;
        }
      }
    }
  }

  @media (min-width: 992px) {
    > div {
      div {
        h2 {
          font-size: 40px;
        }
        span {
          font-size: 20px;
          &:first-child {
            font-size: 40px;
          }
        }
      }
    }
  }
`

export const MainContentContainer = styled.div`
  margin-top: 80px;
  padding: 0 20px;
  h1 {
    color: #FFD74A;
    font-size: 42px;
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 52px;
    }
  }

  @media (min-width: 992px) {
    h1 {
      text-align: initial;
      font-size: 72px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 96.2558px;
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    &:first-child {
      > div {
        display: flex;
        margin-bottom: 20px;

        img {
          width: 26px;
          height: 26px;          
          border-radius: 44px;
          box-shadow: 1px 1px 10px 10px #22fd22;
          object-fit: cover;
        }
        p {
          color: white;
          margin: 0 0 0 20px;
          font-size: 20px;
        }
      }
    }
    &:last-child {
      display: flex;
      justify-content: center;
      > img {
        margin-top: 80px;
        width: 100%;
        max-width: 500px;
        border-radius: 44px;
          box-shadow: 1px 1px 10px 10px #22fd22;
      }
    }
  }

  @media (min-width: 768px) {
    > div {
      &:first-child {
        > div {
          margin-bottom: 25px;

          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            object-fit: cover;
            border-radius: 44px;
            box-shadow: 1px 1px 5px 5px #22fd22;
          }
          p {
            color: white;
            font-size: 24px;
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    justify-content: space-between;
    flex-direction: row;
    > div {
      &:first-child {
        width: calc(60% - 60px);
        > div {
          p {
            margin: 0 25px;
          }
        }
      }
      &:last-child {
        width: 40%;
        display: initial;
        > img {
          max-width: initial;
          border-radius: 44px;
          box-shadow: 1px 1px 10px 10px #22fd22;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    > div {
      &:first-child {
        > div {
          p {
            font-size: 28px;
          }
        }
      }
    }
  }

  @media (min-width: 1500px) {
    > div {
      &:first-child {
        > div {
          p {
            font-size: 38px;
          }
        }
      }
    }
  }
`
export const BottomTextContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0px;
    max-width: 1400px;
    color: #5EC285;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 80px 40px 0 40px;
  }

  @media (min-width: 992px) {
    p {
      font-size: 32px;
    }
  }

  @media (min-width: 1500px) {
    p {
      font-size: 42px;
    }
  }
`

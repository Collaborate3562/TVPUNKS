import styled from 'styled-components'

export const RoadMapContainer = styled.div`
  position: relative;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
 background-blend-mode: multiply;
  padding-top: 50px;

  @media (min-width: 576px) {
    padding-top: 156px;
  }
`

export const VerticalLineWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;

  @media (min-width: 993px) {
    display: flex;
  }
`

export const Line = styled.div`
  width: 8px;
  background: white;
`

export const TopBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 190px;
 
`

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: -180px;

  @media (min-width: 576px) {
    margin-top: 0;
    margin-bottom: 145px;
  }
`

export const BannerContent = styled.div`
  position: relative;
  background-image: url('assets/images/road-map-banner.png');
  height: 83px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 60px;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    width: 1095px;
  }
  @media (min-width: 1440px) {
    width: 1462px;
    height: 111px;
    padding: 0 90px;
  }

  > p {
    margin: 0;
    font-size: 36px;
    font-weight: 800;
    color: #FFFFFF;

    &:first-child {
      display: none;
    }

    @media (min-width: 576px) {
      &:first-child {
        display: block;
      }
    }

    @media (min-width: 993px) {
      font-size: 52px;
    }
    @media (min-width: 1440px) {
      font-size: 65px;
    }
  }
`

export const RoadMapHeadWrapper = styled.div`
  
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  top: -112px;    
  z-index: 2;

  @media (min-width: 576px) {
    display: flex;
  }

  > img {
    width: 257px;
    height: 256px;
    border-radius: 50px;
    box-shadow: 1px 1px 10px 10px #22fd22;
  }
`

export const MobileHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
  flex-direction: column;  
  

  @media (min-width: 576px) {
    display: none;
  }

  > img {
    width: 200px;

    &:first-child {
      z-index: 1;
    }

    &:last-child {
      width: 240px;
    }
  }
`
export const MonthDescription = styled.div`
  display: flex;
  padding: 0 15px;
  position: relative;
  min-height: 60px;
  padding-top: 30px;
  padding-bottom: 15px;
  flex-direction: column;

  @media (min-width: 576px) {
    padding-top: 65px;
  }

  @media (min-width: 993px) {
    padding: 0 55px;
    flex-direction: row;
    padding-top: 40px;
  }
`

export const LeftMonthWrapper = styled.div`
  padding-left: 0px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (min-width: 993px) {
    width: 50%;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    padding-left: 46px;
  }
`

export const RightMonthWrapper = styled.div`
  padding-left: 0px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (min-width: 993px) {
    width: 50%;
    padding-left: 133px;
    justify-content: flex-start;
  }
`

export const MonthBoxWrapper = styled.div`
  width: fit-content;

  > p {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    color: #2F4858;
    margin: 0;
    text-align: center;

    @media (min-width: 1200px) {
      font-size: 20px;
    }

    @media (min-width: 1440px) {
      font-size: 22.0803px;
    }
  }
`

export const MonthBox = styled.div`
  height: 26px;
  background: #256071;
  border-radius: 64px;
  padding: 18px 158px;
  display: flex;
  align-items: center;

  > p {
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    margin: 0;
    align-items: center;

    @media (min-width: 1200px) {
      font-size: 33px;
      align-items: center;
    }

    @media (min-width: 1440px) {
      font-size: 38px;
      align-items: center;
    }
  }
`

export const RightTextWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (min-width: 993px) {
    margin-top: 0;
    padding-left: 117px;
    width: 50%;
    justify-content: flex-start;
  }
`

export const LeftTextWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 0px;
  display: flex;
  justify-content: center;

  @media (min-width: 993px) {
    margin-top: 0;
    padding-right: 38px;
    width: 50%;
    justify-content: flex-start;
  }
`

export const TextWrappper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 13px;

  > img {
    width: 46.5px;
    height: 46.5px;
    min-width: 46.5px;
    margin-right: 15px;
    border-radius: 44px;
    box-shadow: 1px 1px 3px 3px #22fd22;
}


  }

  p {
    font-weight: bold;
    font-size: 23px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;

    @media (min-width: 1440px) {
      font-size: 24px;
      padding-top:13px;
    }
  }
`

export const LineImageWrapper = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  width: 100%;
  left: 0;
  top: -200px;
  z-index: 1;

  img {
    width: 502px;
  }

  @media (min-width: 576px) {
    display: flex;
  }
`

export const CenterImageWrapper = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 3;

  img {
    width: 138px;
  }

  @media (min-width: 576px) {
    display: flex;
  }
`

export const FooterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 5;

  img {
    width: 100%;
    border-radius: 50px;
    box-shadow: 1px 1px 10px 10px #22fd22;
    @media (min-width: 576px) {
      width: 70%;
    }

    @media (min-width: 1200px) {
      width: 1080px;
    }
  }
`

export const FooterBannerWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: -33px;
`

export const FooterBanner = styled.div`
  width: 90%;
  height: 127px;
  background-image: url('assets/images/road-footer-banner.png');
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  padding: 0px 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  @media (min-width: 993px) {
    width: 930px;
  }

  > p {
    margin: 0;
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0px 130px;

    @media (min-width: 993px) {
      font-size: 28px;
    }

    @media (min-width: 1440px) {
      font-size: 40px;
      align-items: center;
    }
  }
`

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  > img {
    width: 100%;

    @media (min-width: 576px) {
      width: 33.33%;
    }

    @media (min-width: 993px) {
      width: 20%;
    }
  }
`
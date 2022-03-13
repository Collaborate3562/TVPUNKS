import styled from 'styled-components'

export const StoryContainer = styled.div`
  background-image: url('assets/images/story-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 25px 10px 25px;

  @media (min-width: 993px) {
    padding: 25px;
  }

  > h1 {
    font-weight: bold;
    font-size: 40px;
    color: #FFD029;
    margin-top: 0;
    margin-bottom: 32px;
    margin-left: 0px;

    @media (min-width: 993px) {
      font-size: 60px;
      margin-left: 23px;
      margin-left: 100px;
    }

    @media (min-width: 1440px) {
      font-size: 86.154px;
      line-height: 135px;
      margin-left: 120px;
    }
  }

  p {
    font-weight: 600;
    font-size: 32px;
    color: #A7D5FF;
    padding: 0 15px;
    margin-bottom: 37px;
    margin-top: 0;

    @media (min-width: 993px) {
      padding: 0 57px;
    }
    @media (min-width: 1440px) {
      font-size: 33.5653px;
      padding: 0 154px 0 120px;
    }
  }
`

export const UserListWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-wrap: wrap;

  > div {
    margin: 15px;
    width: calc(100% - 30px);

    @media (min-width: 768px) {
      margin: 15px;
      width: calc(50% - 30px);
    }

    @media (min-width: 993px) {
      margin: 15px;
      width: calc(33% - 30px);
    }

    @media (min-width: 1200px) {
      margin: 23px;
      width: calc(25% - 46px);
    }
  }
`

export const UserProfileWrapper = styled.div``

export const UserPhotoWrapper = styled.div`
  border-radius: 50px;
  background: #272E64;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const ColorSection = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    color: #FFFFFF;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }
`

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 20px;
    width: 66%;
    min-width: 272px;
    background: #58B4F6;
    border-radius: 20px;
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    color: #15193B;
    text-transform: capitalize;

    @media (min-width: 768px) {
      font-size: 41px;
    }
  }
`

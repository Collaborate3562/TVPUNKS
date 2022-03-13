import styled from 'styled-components'

export const FaqContainer = styled.div`
  background: linear-gradient(180deg, #6BCFFF 0%, #9CDFFF 100%);
  padding: 25px 25px 0 25px;

  > h1 {
    font-weight: bold;
    font-size: 35px;
    color: #000000;
    margin: 0;
    text-transform: uppercase;

    @media (min-width: 993px) {
      font-size: 52px;
    }

    @media (min-width: 1440px) {
      font-size: 66.2558px;
      padding: 30px 45px 0 85px;
    }
  }

  @media (min-width: 993px) {
    padding: 30px 45px 0 85px;
  }
`

export const TextBox = styled.div`
  background: #FFFDEB;
  border-radius: 51px;
  padding: 53px 57px;
  margin: 25px 0;

  > p {
    font-size: 25px;
    color: #000000;
    margin: 0;

    @media (min-width: 993px) {
      font-size: 27px;
    }
    @media (min-width: 1440px) {      
      font-size: 33.5653px;
    }

    &:first-child {
      margin-bottom: 20px;
    }

    span {
      font-weight: bold;
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 162px;
    min-width: 162px;
    border-radius: 50px;
    box-shadow: 1px 1px 5px 5px #22fd22;
  }
`
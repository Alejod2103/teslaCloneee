import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ tittle, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
          <Fade bottom>
            <ItemText>
                <h1>{ tittle }</h1>
                <p>{ description }</p>
            </ItemText>
            </Fade>
            <Buttons>
              <Fade bottom>
              <ButtonGroup>
                <LeftButton>{ leftBtnText }</LeftButton>
                <RightButton>{ rightBtnText }</RightButton>
              </ButtonGroup>
              </Fade>
            <DownArrow src="./images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(./images/solar-panel.jpg) ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-weight: bold;
  z-index: -1;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
      flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  cursor: pointer;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #030101;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
  
`

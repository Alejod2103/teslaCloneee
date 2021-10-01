import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
          <Section
            tittle="Modelo S"
            description="Compra en linea para Entrega Sin Contacto"
            backgroundImg="model-s.jpg"
            leftBtnText="Compra Personalizada"
            rightBtnText="Inventario Existente"
          />

          <Section
            tittle="Modelo X"
            description="Compra en linea para Entrega Sin Contacto"
            backgroundImg="model-x.jpg"
            leftBtnText="Compra Personalizada"
            rightBtnText="Inventario Existente"
          />

          <Section
            tittle="Modelo 3"
            description="Compra en linea para Entrega Sin Contacto"
            backgroundImg="model-3.jpg"
            leftBtnText="Compra Personalizada"
            rightBtnText="Inventario Existente"
          />

          <Section
            tittle="Modelo Y"
            description="Compra en linea para Entrega Sin Contacto"
            backgroundImg="model-y.jpg"
            leftBtnText="Compra Personalizada"
            rightBtnText="Inventario Existente"
          />

          <Section
            tittle="Modelo S"
            description="Compra en linea para Entrega Sin Contacto"
            backgroundImg="model-s.jpg"
            leftBtnText="Compra Personalizada"
            rightBtnText="Inventario Existente"
          />

      
          
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

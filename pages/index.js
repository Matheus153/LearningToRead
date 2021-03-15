import { delBasePath } from 'next/dist/next-server/lib/router/router'
import { motion } from 'framer-motion'
import Background from '../src/components/Background'
import db from '../db.json'
import styled from 'styled-components'
import Widget from '../src/components/Widget'

const StyledContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding-top: 45px;
  margin: auto 35%; 
  min-height: 100vh; 
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 10px;
    min-height: 90vh;
  }
`

export default function Home() {
  return (
    <Background backgroundImage={db.bg}>

     <img src="logo.jpg" alt="logo" style={{
          width: '230px'
        }}/>

      <StyledContainer as={motion.section}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
      variants={{
        show: {opacity: 1, x:'0'},
        hidden: {opacity: 0, x:'-55%'}
      }}
      initial="hidden"
      animate="show">
        <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>

        <img alt="image" 
        src={db.image}/>

        <Widget.Content>
          <p>{db.description}</p>
        </Widget.Content>

        <Widget.Header style={{
          borderRadius: '0'
        }}><h4>Regra do primeiro passo</h4></Widget.Header>

        <img src={db.imageCat} alt="cat"/>

        <Widget.Content>
          <p>{db.conteudo.pass1}</p>
          <p>Obs: não recomendo que comece lendo livros curtos.</p>
        </Widget.Content>

        <Widget.Header style={{
          borderRadius: '0'
        }}><h4>A dose certa</h4></Widget.Header>

        <Widget.Content>
          <p>{db.conteudo.pass2}</p>
          <p>{db.conteudo.pass2a}</p>
        </Widget.Content>    
        

        <Widget.Header style={{
          borderRadius: '0'
        }}><h4>Repetição gera perfeição</h4></Widget.Header>
        
        <img alt="image" 
        src={db.imageIcarly}/>

        <Widget.Content>
          <p>{db.conteudo.pass3}</p>
          <p>{db.conteudo.pass3a}</p>
          <p>{db.conteudo.pass3b}</p>
        </Widget.Content>
        
        </Widget> 

        <footer style={{
          marginBottom: '25px',
          textShadow: '-2px 2px 1px rgba(10, 10, 10, .8)'
        }}>Tenha uma boa leitura!</footer>  

       
      </StyledContainer>
      
    </Background>
    
      

     
    
  )
}

import { delBasePath } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import Background from '../src/components/Background'
import db from '../db.json'
import styled from 'styled-components'
import Widget from '../src/components/Widget'

const StyledContainer = styled.div`
  max-width: 350px;
  padding-top: 45px;
  margin: auto 38%; 
  min-height: 100vh; 
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 10px;
    min-height: 80vh;
  }
`

export default function Home() {
  return (
    <Background backgroundImage={db.bg}>
      <Head>
        <title>Apredendo a gostar de ler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledContainer>
        <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>

        <img alt="image" style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          marginTop: '20px'
        }}
        src={db.image}/>

        <Widget.Content>
          <p>{db.description}</p>
        </Widget.Content>

        <Widget.Header style={{
          borderRadius: '0'
        }}><h4>Regra do primeiro passo</h4></Widget.Header>

        <Widget.Content>
          <p>{db.conteudo.pass1}</p>
          <p>Obs: não recomendo que comece lendo livros curtos.</p>
        </Widget.Content>
        
        
        </Widget>   
      </StyledContainer>

    </Background>
    
      

     
    
  )
}

import { delBasePath } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import Background from '../src/components/Background'
import db from '../db.json'
import styled from 'styled-components'
import Widget from '../src/components/Widget'

const StyledContainer = styled.div`
  max-width: 500px;
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
    min-height: 70vh;
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

        <Widget.Content>
          <p>{db.description}</p>
        </Widget.Content>
        </Widget>
        
        
      </StyledContainer>

    </Background>
    
      

     
    
  )
}

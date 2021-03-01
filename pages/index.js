import { delBasePath } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import Background from '../src/components/Background'
import db from '../db.json'
import styled from 'styled-components'
import Widget from '../src/components/Widget'

const StyledContainer = styled.div`
  max-width: 3050px;
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
    padding: 15px;
    min-height: 92vh;
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
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        
      </StyledContainer>

    </Background>
    
      

     
    
  )
}

import styled from 'styled-components';

export const AppWrapper = styled.div`
  margin: auto;
  padding: 25px;
  width: 100%;
  font-size: 1.25em;
  font-family: 'Roboto', sans-serif;
`

export const ContainerWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%; 
`

export const Time = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: .75em;
  width: 225px;
`

export const Icon = styled.div`
  width: 50px;
`

export const Header = styled.h2`
  margin: 0px;
  font-size: 1em;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%; 
`

export const Message = styled.div`
  width: 100%;
`

// remove
export const Wrapper = styled.div`
  padding: 4em;
  text-align: left;
`
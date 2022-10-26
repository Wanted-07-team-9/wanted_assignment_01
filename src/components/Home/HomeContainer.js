import styled from "styled-components"

const HomeContainer = ({children}) => {
  return (
    <Container>
    {children}
</Container>
  )
}
const Container  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-color: #fbfbff;
`

export default HomeContainer
import styled from "styled-components"

const Layout = ({children}) => {
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

export default Layout
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  
    
   return (
        <Container>
          <a>
              <img src="/images/logo.svg" alt=""/>
          </a>
          <a  className="logoInac" href="https://www.facebook.com/pages/category/Social-Service/INSTITUTO-NACIONAL-DE-ANTIGUO-CUSCATLAN-INAC--180928148606096/">
              <img src="/images/logoInacSinFondo.png" alt=""/>
          </a>
          <Menu>
            <a href="#">Modelo S</a>
            <a href="#">Modelo 3</a>
            <a href="#">Modelo X</a>
            <a href="#">Modelo Y</a>
          </Menu>
          <RightMenu>
              <a href="#">Shop</a>
              <a href="#">Tesla</a>
              <a className="ae" href="#">Mi Cuenta</a>
              <CustomMenu onClick={() => setBurguerStatus(true)}/>
          </RightMenu>
          <BurguerNav Show={burguerStatus}>
              <CloseWrapper>
              <CustomClose />
              </CloseWrapper>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Used Inventory</a></li>
              <li><a href="#">Trade-in</a></li>
              <li><a href="#">Cybertruck</a></li>
              <li><a href="#">Roadaster</a></li>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Existing Inventory</a></li>
          </BurguerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   padding: 0 20px;
   top: 0;
   justify-content: space-between;
   left: 0;
   right: 0;
   z-index: 1;

  .logoInac {
    display: flex;
    height: 130px;
    margin-left: 18px;
    cursor: pointer;
  }

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  p {
      font-weight: 600;
      text-decoration: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }

  a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10;
      flex-wrap: nowrap;
      margin: 5px;
  }

  

  @media (max-width: 768px) {
      display: none;
  }

`
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10;
      flex-wrap: nowrap;
      margin: 5px;
  }

  .ae {
     font-weight: 600;
      text-transform: uppercase;
      padding: 0 10;
      flex-wrap: nowrap;
      margin: 1px;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin: 3px;
`
const BurguerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      a {
          font-weight: 600;
      }
  }
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

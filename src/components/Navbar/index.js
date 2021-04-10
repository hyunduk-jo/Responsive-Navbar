import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

export default function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/about'> About</NavLink>
          <NavLink to='/service'> Service</NavLink>
          <NavLink to='/contact'> Contact Us</NavLink>
          <NavLink to='/signup'> Sign Up</NavLink>
          <NavBtnLink to='/signin'>Sign in</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign in</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  )
}
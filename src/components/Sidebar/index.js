import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='/contact' onClick={toggle}>Contact</SidebarLink>
          <SidebarLink to='/service' onClick={toggle}>Service</SidebarLink>
          <SidebarLink to='/signup' onClick={toggle}>Signup</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin' onClick={toggle}>Signin</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
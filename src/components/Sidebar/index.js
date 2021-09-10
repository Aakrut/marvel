import React from 'react'
import {SidebarContainer,Icon,SideWrapper,SidebarMenu,SidebarLink} from './SidebarElements'


const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
              <i class='bx bx-x'></i>  
            </Icon>

            <SideWrapper>
                <SidebarMenu>
                    <SidebarLink to='/characters'>
                        Characters
                    </SidebarLink>
                    <SidebarLink to='/comics'>
                        Comics
                    </SidebarLink>
                    
                    <SidebarLink to='/series'>
                        Series
                    </SidebarLink>
                    <SidebarLink to='/stories'>
                        Stories
                    </SidebarLink>
                </SidebarMenu>
            </SideWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar

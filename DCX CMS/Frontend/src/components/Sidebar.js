import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='col-md-3'
            style={{ display: 'flex', height: '130vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
            
                <CDBSidebarHeader prefix={<i className="fa fa-bars"/>}>MY CMS</CDBSidebarHeader>
              
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/Dashboard"  activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Page" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Pages</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/User" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/Category" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">
                               Categories
                            </CDBSidebarMenuItem>
                        </NavLink>
                       
                    </CDBSidebarMenu>
                </CDBSidebarContent>
               
            </CDBSidebar>
        </div>
    );
}

export default Sidebar; 
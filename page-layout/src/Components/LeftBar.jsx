import { Button } from 'bootstrap';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const LeftBar = () => {
  return (
    <div>
      <Sidebar>
            <Menu >
                <MenuItem>Home</MenuItem>
            </Menu>
            <Menu 
                menuItemStyles={
                    Button
                }>
                <SubMenu label="SQL Server">
                    <MenuItem>MS SQL</MenuItem>
                    <MenuItem>MySQL</MenuItem>
                    <MenuItem>Oracle</MenuItem>
                    <MenuItem>Etc</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default LeftBar;

import React, { useState } from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import IconButton from '@material-ui/core/IconButton';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useStyles, SidebarNav, SidebarWrap, SideUl, SideLi, SideHeading, SideIcon, SideTitle, Cross } from './SidebarStyle';
import Navbar from './Navbar';


const Sidebar = () => {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const timeNow = (new Date()).getHours();

  return (
    <div>
      <IconContext.Provider value={{ color: '#d0d2d6' }}>
        <Navbar showSidebar={showSidebar} />

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <SideUl>
              <SideLi style={{ justifyContent: "center" }} >
              <SideHeading>Dashboard</SideHeading>
              <SideTitle>{timeNow > 12 ? "Good Morning" : "Good Night"}</SideTitle>
              </SideLi>

              <Cross>
                <SideIcon>
                <IconButton onClick={() => showSidebar()}>
                  <ArrowBackIosRoundedIcon className={classes.samll}/>
                </IconButton>
                </SideIcon>
              </Cross>
            </SideUl>


            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;

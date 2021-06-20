import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    samll: {
        width: theme.spacing(5),
        height: theme.spacing(5),

    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
}));


export const AppBar = styled.div`
margin: 0 0.5rem;
color: #d0d2d6;
background-color: #283046;
box-shadow: 0 4px 24px 0 rgba(255, 255, 235, 0.1);
border-radius: 5rem;
`;
export const Toolbar = styled.div`
display: flex;
align-items: center;
margin: 0.5rem 0.5rem;
padding: 0 0.5rem;
`;
export const SidebarNav = styled.nav`
  background: #283046;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #2f4050;
    border-left: 5px solid #7367f0;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #d0d2d6;
  font-size: 18px;

  &:hover {
    background: #7367f0;
    cursor: pointer;
  }
`;
export const SideUl = styled.ul`
padding: 1rem 0;
list-style: none;
display: flex;
align-items: center;
color: #d0d2d6;
`;
export const SideLi = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;
export const SideIcon = styled.div`
.MuiIconButton-root {
    color: #d0d2d6;
    margin-left: 2.5rem;
}
`;
export const SideHeading = styled.div`
font-family: 'Aladin', cursive;
letter-spacing: 5px;
font-size: 2.2rem;
margin-left: 0.5rem;
filter: drop-shadow(0.1rem 0.1rem 0rem #7367f0);
`;
export const SideTitle = styled.div`
font-size: 1.4rem; 
margin-left: 0.5rem;
`;
export const Cross = styled.div`
position: absolute;
right: 0;
`;
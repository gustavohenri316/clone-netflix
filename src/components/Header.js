import react from "react";
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from "@material-ui/core";



export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <div className="menu">
                <Box sx={{ flexGrow: 0 }}>
                        <Toolbar>
                        <IconButton
                            fontSize="32px"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1}}
                        >
                            <MenuIcon />
                        </IconButton>
                        </Toolbar>
                </Box>
                </div>
            <div className="header--logo--edite">
                <a href="/"> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
                </a>
                </div>
                <div className="header--items">
                    <label className="header--items--edite">Inicio</label>
                    <label className="header--items--edite">Series</label>
                    <label className="header--items--edite">Filmes</label>
                    <label className="header--items--edite">Bombando</label>
                    <label className="header--items--edite">Minha Lista</label>
                </div>
               
            </div>
            <div className="header--user">

            <SearchIcon 
            className="Icons"
            style={{
                marginRight: 15,
                fontSize: '32px',
                fontWeight: 'bold',
                cursor: 'pointer'
            }}/>
            <NotificationsIcon 
            className="Icons"
            style={{
                marginRight: 15,
                fontSize: '32px',
                fontWeight: 'bold',
                cursor: 'pointer'
            }}/>
             <div className="header--user-1">
             <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                    
                </a>
                <p className="header--user-para">	▼</p>
             </div>
               
            </div>
        </header>
    )
}
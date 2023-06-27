import { AppBar, Toolbar, Typography } from '@mui/material';
import Logoimg from '../images/logo.png'
const Navbar = () => {

    const appBarStyle = {
        flexGrow: 1,
        backgroundColor: '#353535',
    };

    const logoTextStyle = {
        textDecoration: 'none',
        color: 'white',
        fontFamily: 'Maven Pro, sans-serif',
        fontSize: '26px',
        marginLeft: '26px',
        flexGrow: 1
    };

    return (
        <AppBar position="fixed" style={appBarStyle}>
            <Toolbar>
                <img src={Logoimg} height={'35px'} alt="LOGO" />
                <Typography variant="h6" style={logoTextStyle}>
                    shorturl
                </Typography>
            </Toolbar>
        </AppBar>            
    
    );
};

export default Navbar;

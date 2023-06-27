import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="footer">
            <div className="getintouch">GET IN TOUCH</div>
            <div className="share">
                <LinkedInIcon sx={{color: 'white', fontSize: '30px' , margin: '20px 10px'}}/>
                <GitHubIcon sx={{color: 'white', fontSize: '30px' , margin: '20px 10px'}}/>
                <EmailIcon sx={{color: 'white', fontSize: '30px' , margin: '20px 10px'}}/>
            </div>
            <div className="design">Designed and built by Shobhit Chauhan</div>
            <div className="developer"><a href="https://shobhitcs.github.io/portfolio/">[ @ Contact Developer ]</a></div>
        </div>
    );
}

export default Footer;
import { qrCodeImage } from "../../constants/data";
import { Dialog, Box, Typography,styled ,List,ListItem} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";


const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: "60%",
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Component = styled(Box)`
    display:flex;
`

const Container = styled(Box)`
    padding:56px 0 56px 56px;
`
const QRCode = styled('img')(
    {
        height:264,
        width:264,
        margin:'50px 0 0 50px',
    }
);

const Title = styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px;
`
const StyledList = styled(List)`
    & > li {
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:26px;
        color:#4a4a4a;
    }
`


const LoginDialog =  () => {

    const {setAccount} = useContext(AccountContext)
    const onLoginSuccess = async(res)=>{
        const decode = jwt_decode(res.credential)
        console.log(decode);
        setAccount(decode);
        await addUser(decode)
    }
    const onLoginFailure = (res)=>{
        console.log("Error from Login ",res)
    }

    return (
        <Dialog
            open={true}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To use WhatsApp on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QRCode src={qrCodeImage} alt="QR Code" /> 
                    {/*above is image*/}
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)' }}>
                        
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog;
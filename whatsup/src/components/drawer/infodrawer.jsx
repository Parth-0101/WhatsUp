
import { ArrowBack } from "@mui/icons-material";
import { Drawer, Typography,Box,styled } from "@mui/material";
import Profile from "./Profile";

const Header = styled(Box)`
    background-color:#008069;
    height:107px;
    color:#FFFFFF;
    display:flex;
    & > svg,& > p{
        margin-top:auto;
        padding:14px;
        font-weight:600px;

    }
`;


const Component = styled(Box)`
    background: #adadad;
    height:85%;

`



const drawerStyle = {
    left:20,
    top:17,
    height:'95%',
    width:'70%',
    boxShadow:'none'
}


const InfoDrawer = ({open,setOpen})=>{// Object destructuring 


    function handleClose(){
        setOpen(false);
    }

    return (
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={drawerStyle}
        style={{zIndex:1500}}
        >
        <Header>
            <ArrowBack onClick={()=>setOpen(false)}/>
            <Typography>Profile</Typography>
        </Header>
        <Component>
            <Profile/>
        </Component>
        </Drawer>
    )
}
export default InfoDrawer;
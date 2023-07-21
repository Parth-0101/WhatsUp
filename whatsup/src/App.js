// import './App.css';
import { GoogleOAuthProvider } from "@react-oauth/google";


//components 
import Messenger from "./components/messenger";
import AccountProvider from './context/AccountProvider';



function App() {
  // console.log("hello")
  const clientId = "306297306431-fcs0mgaocprud7io7je61fsjr98jf5bk.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        < Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

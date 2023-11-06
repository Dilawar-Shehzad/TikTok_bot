import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../src/components/sign-up'
import CreateAccount from '../src/components/create-account'
import Home from '../src/components/home'
import Profile from '../src/components/profile'
import MyAssets from '../src/components/my-assets'
import Notification from '../src/components/notification'
import ContactInfo from '../src/components/contact-info'
import Bank from '../src/components/bank'
import Tracking from '../src/components/tracking'
import NoPage from '../src/components/404'
import Video from '../src/components/video'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/404" element={<NoPage/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/my-assets" element={<MyAssets />} />
          <Route path="/video" element={<Video />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;


 // *30286:* => *Technical Term:* use clipBoard function form javascript on button that is  *navigator.clipboard.writeText(text)* in function where *text* is the copied or existing text and the whole funtions is wrapped in *try{}Catch((e)=>alert('e'))*, here try keyword contain the data and cath function call the alert if error exist. make an *useState* const [copiedText,setCopiedText] = useState(""), *SetCopiedText* is calling inside the try keywords when we have text,finally make conditions on  any html tag {copiedText ? 'Split' : 'any other Text'}, this whole funtions is being called on any button or any User Actions 
 // *30281:* => *Technical Term:* On desired Screen we have built in props wich is  *autoFocus* in TextInput from react-native, It's an built props in textInput that opens a keyborad auto or cath the current user's behaviour on curent screen.
 // *30274:* => *Technical Term:* check the api response first after removing current user, If the user is not exist so ask backend Developer to make new conditions for not to delete all user data form api which helps the frontend developer to show all users information on invite page, let suppose api response give all user which are the part of room or remove from room chat both data. check the api response first while removing current user, If the user is not exist so ask backend Developer to make new conditions for api.
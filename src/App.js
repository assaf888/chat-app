import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="b56709ee-8b27-4dc3-9fe8-7ae9dff39b90"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={ (chatAppProps) =>  <ChatFeed { ...chatAppProps } />}
        />
    )
}

export default App;
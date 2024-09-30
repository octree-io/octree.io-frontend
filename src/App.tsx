import './App.css'
import "allotment/dist/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameRoom from './views/GameRoom/GameRoom';
import Lobby from './views/Lobby/Lobby';
import Landing from './views/Landing/Landing';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Settings from './views/Settings/Settings';
import RoomNotFound from './views/RoomNotFound/RoomNotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Lobby />} />
        <Route path="/room/:roomId" element={<GameRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/room-not-found" element={<RoomNotFound />} />
      </Routes>
    </Router>
  )
};

export default App;

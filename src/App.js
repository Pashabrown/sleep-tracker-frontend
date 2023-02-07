import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import UserState from "./components/UserState"

function App() {
  return (
    <div className="App">
      <Header/>
      <UserState/>
      <Main/>
    </div>
  );
}

export default App;
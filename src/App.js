import logo from './logo.svg';
import './App.css';

/* Components */
import TopMenu from './Components/TopMenu';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Main></Main>
    </div>
  );
}

export default App;

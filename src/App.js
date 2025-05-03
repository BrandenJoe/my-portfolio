import Nav from './components/nav'
import Landing from './components/Landing';
import Languages from './components/languages';
import Challenges from './components/challenges';
import Projects from './components/projects';
import DarkmodeToggle from './components/DarkModeToggle';
function App() {
  return (
    <div className="App">
    <Nav/>
    <DarkmodeToggle/>
    <Landing/>
    <Languages/>
    <Challenges/>
    <Projects/>
    </div>
  );
}

export default App;

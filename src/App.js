import './App.css';
import Navbar from './components/Navbar';
import Properties from './components/Properties';

function App() {
  return (
    <div className="App">
    <div className="container">
      <Navbar />
      <div className="text-intro">
        <h1>Say Hello to REACT JS</h1>
        <p>You will learn how to use the most popular frontend library, ansd become a super ninja developer.</p>
      </div>
      
      </div>
      <Properties />
    </div>
  );
}

export default App;

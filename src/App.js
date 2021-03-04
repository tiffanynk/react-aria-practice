import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <Button onPress={() => alert('button pressed')}/>
    </div>
  );
}

export default App;

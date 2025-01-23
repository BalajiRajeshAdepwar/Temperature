import './App.css';
import {Count} from './Tasks/count/count';
import Javascript from './Tasks/ES6';
import Temp from './Tasks/temperature/temp';
import Timecounter from './Tasks/timecounter/timecounter';


function App() {
  return (
    <div className="App">
      <Javascript/>
      <Temp/>
      <Count/>
      <Timecounter/>
    </div>
  );
}

export default App;




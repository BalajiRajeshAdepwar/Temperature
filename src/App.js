import './App.css';
import {Count} from './Tasks/count/count';
import Temp from './Tasks/temperature/temp';
import Timecounter from './Tasks/timecounter/timecounter';


function App() {
  return (
    <div className="App">
      <Temp/>
      <Count/>
      <Timecounter/>
    </div>
  );
}

export default App;




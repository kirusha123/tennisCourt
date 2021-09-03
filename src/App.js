import './App.css';
import {CourtList} from './components/CourtList'

function App() {
  return (
    <div className="App">
       <CourtList init_hours="5" init_min="00" duration="30" end_time="23:00" date="23.08.2021" c_num={5} />
    </div>
  );
}

export default App;

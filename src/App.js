import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DestructuringPropsAndState from './components/DestructuringPropsAndState';
import FunctionalProps from './components/FunctionalProps';
import EventHandling from './components/EventHandling';
function App() {
  return (
    <div className="App">
      {/* <DestructuringPropsAndState name="hridoy" id={6276} />
      <Counter/>
      <FunctionalProps name="hridoy" id={6276}/> */}
      <EventHandling/>
    </div>
  );
}

export default App;

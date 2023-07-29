import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import DestructuringPropsAndState from './components/DestructuringPropsAndState';

function App() {
  return (
    <div className="App">
      <DestructuringPropsAndState name="hridoy" id={6276} />
      <Counter/>

    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import NameList from "./components/NameList";
import UserGreeting from "./components/UserGreeting";
import Counter from "./components/Counter";
import DestructuringPropsAndState from "./components/DestructuringPropsAndState";
import FunctionalProps from "./components/FunctionalProps";
import EventHandling from "./components/EventHandling";
import ClassEvent from "./components/ClassEvent";
import EventBind from "./components/EventBind";
import ParentComponents from "./components/ParentComponents";
function App() {
  return (
    <div className="App">
      {/* <DestructuringPropsAndState name="hridoy" id={6276} />
      <Counter/>
      <FunctionalProps name="hridoy" id={6276}/> */}
      {/* <EventHandling/>
      <ClassEvent/> */}
      {/* <EventBind /> */}
      {/* <ParentComponents /> */}
      {/* <UserGreeting/> */}
      <NameList />
    </div>
  );
}

export default App;

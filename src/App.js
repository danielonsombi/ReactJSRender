import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/Immutable State/ObjectUseState';
import ArrayUseSatte from './components/Immutable State/ArrayUseSatte';
import Parent from './components/Parent Child/Parent';
import { ParentOne } from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';
import { ParentTwo } from './components/Optimization/ParentTwo';

function App() {
  return (
    <div className="App">
      <ParentTwo/>
      {/* <GrandParent/> */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}
      {/* <Parent/> */}
      {/* <ArrayUseSatte/> */}
      {/* <ObjectUseState/> */}
      {/* <UseReducer/> */}
      {/* <UseState/> */}
    </div>
  );
}

export default App;

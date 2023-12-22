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
import { ParentThree } from './components/Incorrect Optimizations/ParentThree';
import { ParentFour } from './components/Incorrect Optimizations/ParentFour';
import ContextParent from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';
import { ContextParentTwo } from './components/Context/ContextParentTwo';

function App() {
  return (
    <div className="App">
      <ContextParentTwo>
        <ChildA/>
      </ContextParentTwo> 
      {/* <ContextParent/>   */}
      {/* <ParentFour/> */}
      {/* <ParentThree/> */}
      {/* <ParentTwo/> */}
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

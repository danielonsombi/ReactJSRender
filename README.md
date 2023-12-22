# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

How RTe-render works: Scenario:
Divided into the Render phase and Commit Phase

Render Phase:
1. Find all elements flagged for update.
2. For each flagged component, convert JSX to React element using the createElement() method and store the result
3. Perform reconcilliation - Diff old and new tree od the react elelements (a.k.a Virtual DOM).
4. Handover to changes to the next phase

Commit Phase 
1. Apply changes to the DOM.


React by default logs one log statement twice. This is because of the strict mode encouraged by react. In the index.js, the <App /> is wrapped within the <React.StrictMode> which intentionally double invokes the functional component only in developer mode, but logs one in production mode. The solution is to comment the restrict mode out.

UseState:
Render Phase - React will go thorugh the component tree and flag the changed components and finds only use state needs an update. React then uses the createElement() method to convert the JSX to a React Element. It will then diff the element created from the previous render to the new render, identify the changes and handover to the commit phase then have them applied to the DOM.
1. After the intial render - if you call a set of functions and set the state to the same value the component will not re-render
2. After the component has been rerendered, if you set the state to the same value the component will rerender but only one more time.

React flags the components that have been changed. React requires that useState updates must pass in or return a new reference as the state value. If the state is a primitive type, it has to be a new string, number or boolean. If not the case React will bail out. The bailing out can be a result of two cases:
1. If the initial render is completed and the value passed in is the same as before it bails out.
2. If the component has been re-rendered already, it will proceed and renders once then bails out without going to the commit since the value is the same.

Summary on UseState:
The setter function from a useState hook will cause the component to re-render.
The exception is when you update a state Hook to the same value as the current state.
Same value after the initial render? The component will not rerender.
Same value after re-renders? React will render that specific component one more time and then bail out from any subsequenct renders.

UseReducer:
Behaves similar to the UseState hook with regards flagging and the render and commit phases.
If you reload the page, the component does its intial render. If you click on the reset button which passes the same intial value, However, in the recent versions of react the bail out has been removed.


State Immutability:
React does not rerender a component when the new state is the same as the old state. However, the earlier examples were for primitive types. How does this work with objects and arrays, is the question to answer.
We'll deal with state as an object. To achieve this we declare a state variable with two properties. Consider:

import React, {useState} from 'react'

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}


const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState)

    const changeName = () => {
        person.fname = 'Daniel'
        person.lname = 'Onsombi'
        setPerson(person)
    }

    console.log('ObjectUseState Render')
    
    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}

export default ObjectUseState

On clicking the button, the object does not re-render and so there is no change on the value.
When we use object as state, the reference to the object must change for the component to queue the changes. You cannot directly change the component and expect the component to re-render.

To re-render, create a copy of the earlier state using the spread operator and modify the new copy for the component to be properly re-rendered.

The change function should instead look as below:
 const changeName = () => {
        const newPerson = {...person}
        newPerson.fname = 'Daniel'
        newPerson.lname = 'Onsombi'
        setPerson(newPerson)
    }

This is also the case when working with arrays. When you push elements into an array, the array itself changes but the reference does not change. So, React does not rerender the component. The example also holds for useReducer.

Summary:
1. On the component tree the ObjectUseState is flagged, React expects that a new reference should be returned. If not be the case react will bail out if no new reference is returned and no log statement on the component.
2. Mutating an object or an array as state will not cause a rerender when used with the useState or reduce hook.
3. To re-render, make a copy of the existing state, modify as necessary and then pass the new state to the setter function or while returning from the reducer function.
4. Directly mutating the state is an easy way to create bugs in an application. Make sure you don't do that.

Rendering in Parent and Child components:
In such cases, the parent component will render which in turn makes the child component to render.
Re-renders: In the parent component the counter file can easily be implemented. How does this affect the child components?
1. When the new state is different from the old state, the component re-renders.
2. New state is same as the old state:
   1. Right after the initial render - The component is not re-rendered.If parent does not re-render the child will not re-render
   2. After re-renders - since the new state is different from the old, the component re-renders.If the new state is similar to the old, the component re-renders one more time. However, the child component does not re-render. Will re-render one more time to ensure whether it is safe to bail out from future renders.
   3. The same applies to the useReduce hook.

The child does not re-render when the same state is submitted after re-renders because, when react goes through the component tree, only the parent component is flagged to have been changed.
Everytime the state of the parent component changes, the child component is rerendered but the commit phase of the child is not reached (DOM represented by child component is never updated - Child went through the render phase but not the commit phase). This is called "Unnecessary render".
Unnecessary renders affect perfomance and need to be optimized.

Unnecessary Renders:
When a parent component renders, React will recursively render all of its child components. This is how React knows whether it needs to actually make any changes to the DOM.
Unnecessary renders - Where the child component goes through the render phase but not the commit phase.

Consider:
import React, {useState}  from 'react'
import { ChildOne } from './ChildOne';

export const ParentOne = () => {
    const [count, setCount] = useState(0);

    console.log('ParentOne Render')
    return (
        <div>
            <button onClick={() => setCount(PrevCount => PrevCount + 1)}>Count - {count}</button>
            <ChildOne/>
        </div>
    )
}

On clicking the button, both the parent and child component re-renders. However, only the parent components goes to the commit phase. To optimize the above code, instad of calling the child component in the parent component, this is achieved by passing childOne as children to the ParentOne component in the App.js component. In ParentOne, destructure Children from props and add them to the JSX. This way, it will only be re-rendered if its value changes. 

Reformated as:
import React, {useState}  from 'react'

export const ParentOne = ( { children } ) => {
    const [count, setCount] = useState(0);

    console.log('ParentOne Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            {children}
        </div>
    )
}


The above only rerenders the children if the content changes. Note that children should be all small letters.

Same Element reference:
Component can change its state but not props.
With the optimization, React goes through the App.js component tree and finds the ParentOne component which has Children as a PROP.
React automatically provides the optimization by looking the OptParentOne Component. Convert button & Children prop.

A component has no means of directly changing the props and hence children would not have changed. Therefore make use of the React element that was previously created.

React Memo:
By default, both the child and parent component rerenders when the state of the parent component is changed. To optimize this, we use react.memo. Used to wrap the components if they render the same results given the same props. This gives a performance boost in some cases.

The syntax is as: export const MemoizedChildTwo = React.memo(ChildTwo) then on the parent component, instead of calling ChildTwo, call MemoizedChildTwo. With this the ChildTwo, can only render if its state changes.

Questions on Optimization
When to use the same element reference technique and when to use React.Memo?
1. Same Element Reference: 
   1. When your parent component re-renders because of state change in the parent component.
   2. This technique does not work if the parent component re-renders because of changes in its props.

2. React.Memo:
   1. When your child component is being asked to re-render due to changes in the parent's state which do not affect the child component props in anyway.
   
It is always better to go with the same element reference since you don't have to use react.memo all over your code.

Why not wrap every single component with React.Memo?
Why doesn't react just internally memoize every component and not expose React.memo to the developers:
1. Shallow comparisons aren't free. They're O(prop count) time complexity. And they only buy something if it bails out.
2. If a normal component renders in 10ms and React.Memo takes 2ms then if no props changes then the component takes 2ms. If the component takes new props it takes 12 ms. By wrapping everything with React.Memo, can be detrimental to your applcation. Better optimize only the expensive components.
3. When you optimize the rendering of one component, react will also skip rendering that component's entire subtree because it's effectively stopping the default "render children recursively" behaviour of React.


Incorrect ways of using React.Memo
1. Incorrect Memo with Children - No need to memoize a child component that has children.
Children components are not always plain text but more often Html elements or custom components.
e.g:

import React, {useState}  from 'react'
import { MemoizedChildThree } from './ChildThree';
//import { ChildThree } from './ChildThree';


export const ParentThree = ( ) => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Daniel')

    console.log('ParentThree Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Onsombi')}>Change Name</button>
            {/* <ChildThree name = {name}/> */}
            <MemoizedChildThree name = {name}>
                <strong>Hello</strong>
            </MemoizedChildThree>
        </div>
    )
}

When the child component is set to html code, opposed to plain text, the child component is still re-rendered when the count button is clicked in spite of the component being memoized. There is therefore no need to wrap a child component with the React.Memo if the child component itselt has children. The Memoization will have no effect, for the reference to the children props will always make the component to re-render.


2. Incorrect Memo with Impure Component:
Say we have another ChildFour component which shows the name and the current time. And we also want it to be optimized and therefore have it wrapped within React.Memo. Consider:

import React, {useState}  from 'react'
import { MemoizedChildThree } from './ChildThree';
import { MemoizedChildFour } from './ChildFour';
//import { ChildThree } from './ChildThree';


export const ParentThree = ( ) => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Daniel')

    console.log('ParentThree Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Onsombi')}>Change Name</button>
            {/* <ChildThree name = {name}/> */}
            {/* <MemoizedChildThree name = {name}>
                <strong>Hello</strong>
            </MemoizedChildThree> */}
            <MemoizedChildFour name = {name}/>
        </div>
    )
}

The memoized child component in this case will re-render because the name prop changed.
If the count button is clicked, only the parent component will re-render. The child component did not re-render becuase its props did not change.
This is incorrect because the expectation would be that every rerender should also change the time on the child component.

So when dealing with impure components (where the JSX might change even though the props and state remain the same) be aware of the consequences of memoization e.g when using date and math.random might not need the React.memo.

3. Incorrect memo with props Reference
   If an object were to be passed as a prop to the child component, memoizing that component might not be necessary. The child component will still rerender in spite wrapping it around the React.memo. Every time the parent component renders aperson object is recreated resulting to the re-rendering of the child component. The behaviour is the same if a function was passed down to the child component.

   This is because the parent component creates a new reference of the function handleClick or the object person and then passess the new reference as props to the child component and it won't therefore optimize.
   This makes it an incorrect usage of memoization.

Something needs to be done to ensure that even when we have objects and functions, memoization works:
This can be resolved using the useMemo and useCallback hooks.
The two hooks can resolve the optimization problem by:
1. Create the memoizePerson using the useMemo component. The component below will be transformed as the later:
import React, {useState}  from 'react'
import { MemoizedChildFive } from './ChildFive';


export const ParentFour = ( ) => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Daniel')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const handleClick = () => {}

    console.log('ParentFour Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Onsombi')}>Change Name</button>
            <MemoizedChildFive name = {name} /*person = {person}*/ handleClick = {handleClick}/>
        </div>
    )
}


Will be transformed to:

import React, {useState, useMemo}  from 'react'
import { MemoizedChildFive } from './ChildFive';


export const ParentFour = ( ) => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Daniel')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }


    //For better optimization, use the UseMemo hook as below. And since we have no dependencies, then pass an empty array as below:
    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    console.log('ParentFour Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Onsombi')}>Change Name</button>
            <MemoizedChildFive name = {name} person = {memoizedPerson}/>
        </div>
    )
}

This sorts the optimization issue when working with objects and arrays as props to a child component.

To fix use of function references, we use the useCallback hook - The memoizedHandle click is then passed as a prop and with this the child component will only be re-rendered when there is a change in its props.


Context:
Ways to cause a re-render
1. If it calls useState setter function or useReducer dispatch function.
2. If the parent component re-renders
3. Also if the API React context is called

Ifa component has App -> Parent -> Child A -> Child B -> Child C, with the context api we will use the count context provider with the count state at the parent which can then be passed down the tree to the child components and used using the useContext hook.

If initial render is done, then if the count value is changed on the parent, the parent component will be flagged for rerendering. It also create the context provider and checks if the provider has a new value. React checks any other component that consumes the provided context value. The component will also be flagged for re-rendering.
When using useContext, by default all the children in the component tree will be re-rendered. Including ones that having nothing to do with the context value.
Context helps solve the problem of having to pass props through each component.
There are a few ways of optimizing context code to avoid unnecessary re-rendering of components. To improve the rendering behaviour, you can use:

1. Context and memo:
By exporting memoized children from the child components and use it a child of the context provider. The rendering of the parent component causes the child components to re-render. But since the child component is wrapped with React.memo, React checks if the props have changed and since the props did not change, then child A and B will not render.
React then gets to Child C and sees it consumes the countcontext whose value has changed and continues to re-render ChildC component. If child c has child components, they will still re-render due to the parent child rendering.

2. Context and Same Element Reference:
Review later on why not passing the count to the child component. See ContextParentTwo.js under context.









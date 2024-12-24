import { SplitScreen } from "./components/split-screen"

const LeftSideComp = () => {
  return (
    <h2 style={{backgroundColor: 'crimson'}}>I am Left</h2>
  )

}

const RightSideComp = () => {
  return (
    <h2 style={{backgroundColor: 'blue'}}>I am Right</h2>
  )

}

function App() {


  return (
    <SplitScreen Left={LeftSideComp } Right={ RightSideComp } />
  )
}

export default App

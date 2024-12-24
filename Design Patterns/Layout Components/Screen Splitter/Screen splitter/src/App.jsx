import { SplitScreen } from "./components/split-screen"

const LeftSideComp = ({title}) => {
  return (
    <h2 style={{backgroundColor: 'crimson'}}>{title}</h2>
  )

}

const RightSideComp = ({title}) => {
  return (
    <h2 style={{backgroundColor: 'blue'}}>{title}</h2>
  )

}

function App() {


  return (
    <SplitScreen  leftWidth={1} rightWidth={3} >
      <LeftSideComp title={"I'm right"}/>
      <RightSideComp title={"I'm left"} />
    </SplitScreen>
  )
}

export default App

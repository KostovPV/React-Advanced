import { LargeAuthorListItems } from "./components/authors/LargeListItems";
import { SmallAuthorListItems } from "./components/authors/SmalListItems";
import { Regular } from "./components/lists/Regular";
import { authors } from "./data/authors";


function App() {


  return (
    <>
      <Regular items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItems}/>
      <Regular items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItems}/>
    </>
  )
}

export default App

import { LargeAuthorListItems } from "./components/authors/LargeListItems";
import { SmallAuthorListItems } from "./components/authors/SmalListItems";
import { LargeBookListItems } from "./components/Books/LalgeListItems";
import { SmallBookListItems } from "./components/Books/SmalListItems";
import { NumberedList } from "./components/lists/Numbered";
import { Regular } from "./components/lists/Regular";
import { authors } from "./data/authors";
import { books } from "./data/books";


function App() {


  return (
    <>
      <Regular
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItems}
      />

      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItems}
      />

      <Regular
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItems}
      />

      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeBookListItems}
      />
    </>
  )
}

export default App

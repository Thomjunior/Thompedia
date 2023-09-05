import React from "react";
import Entry from "./Entry";
import emojipedea from "./emojipedea";

function createCard(emojiTerm){
 return(<Entry
     key= {emojiTerm.id}
      emoji={emojiTerm.emoji}
      name ={emojiTerm.name}
      meaning={emojiTerm.meaning}
 />
 );
}


function App() {
  return (
    <div>
      <h1>
        <span>THOMPEDIA</span>
      </h1>

      <dl className="dictionary">
        {emojipedea.map(createCard)}

      </dl>
    </div>
  );
}

export default App;

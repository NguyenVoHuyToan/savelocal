import React, { useState } from "react";
import AllPage from "./AllPage";
import "./Component.css";
import Header from "./Header";
import ActivePage from "./ActivePage";
import CompletePage from "./CompletePage";

function Todo() {
  const [pageAll, setPageAll] = useState(false)
  const [pageActive, setPageActive] = useState(false)
  const [pageComplete, setPageComplete] = useState(false);

  return (
   <>
   <h1 className="h1-todo">#todo</h1>
   <div className="header">
        <Header 
        method={{
            all: setPageAll,
            active: setPageActive,
            complete: setPageComplete,
          }}
          />
    </div>
    {pageAll && <AllPage />}
    {pageActive && <ActivePage/>}
    {pageComplete && <CompletePage/>}
    </>
        
  );
}

export default Todo;

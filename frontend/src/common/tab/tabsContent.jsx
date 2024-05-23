import React from "react";

const TabsContent = (props) => {
  return(
    <ul className="nav nav-tabs">
      {props.children}
    </ul>
  )
}

export { TabsContent } 

import React from "react";

const TabsHeader = (props) => {
  return(
    <ul className="tab-content">
      {props.children}
    </ul>
  )
}

export { TabsHeader } 

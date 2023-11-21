import React from "react";

const MenuItem = (props) => {
  return(
    <li>
      <a href={props.path}>
        <i className={`fa fa-${props.icon}`}> {props.label}</i>
      </a>
    </li>
  )
}

export { MenuItem } 
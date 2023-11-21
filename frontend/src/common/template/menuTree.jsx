import React from "react";

const MenuTree = (props) => {
  return(
    <li className="treeview">
      <a href>
        <i className={`fa fa-${props.icon}`}> {props.label}</i>
        <i className="fa fa-angle-left pull-right"></i>
      </a>
      <ul className="treeview-menu">
        {props.children}
      </ul>
    </li>
  )
}

export { MenuTree } 
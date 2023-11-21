import React from "react";
import { Menu } from './menu'

const SiderBar = () => {
  return(
    <aside className="main-sidebar">
      <section className="sidebar">
        <Menu />
      </section>
    </aside>
  )
}

export { SiderBar }
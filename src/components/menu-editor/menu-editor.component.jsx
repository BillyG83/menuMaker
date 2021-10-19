import React from 'react'
import './menu-editor.styles.scss'

const MenuEditor = ({ businessMenu, setBusinessMenu }) => {

  const renderMenuSections = () => {
    businessMenu.map(category => category.catName)
  }

  return (
    <section className="menu-editor">
      <h2>Edit menu items</h2>
      {
        businessMenu.length > 0 ?
          renderMenuSections()
        : 'This menu has no sections yet'
      }
    </section>
  )
}

export default MenuEditor
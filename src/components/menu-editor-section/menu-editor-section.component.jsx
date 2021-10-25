import React, { useState } from 'react'
import Button from '../button/button.component'
import './menu-editor-section.styles.scss'

const MenuEditorSection = ({section, setSections}) => {
  const { isActive, catName, catItems}  = section

  const newItemInitial = {
    name: '',
    id: '',
    detail: '',
    price: 1,
    subCat: '',
    isActive: true,
    moreInfo: '',
    icons: [],
    ingredients: [],
    variants: [],
  }
  const [newItem, setNewItem] = useState(newItemInitial)

  return (
    <div className="menu-editor-section">
        <h3>{catName}</h3>
        <p>{catItems.length} items</p>
        <Button color={isActive ? 'green' : 'gray'}>{isActive ? 'active' : 'hidden'}</Button>
    </div>
  )
}

export default MenuEditorSection
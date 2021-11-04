import React, { useState } from 'react'
import Button from '../button/button.component'
import './menu-editor-section.styles.scss'

const MenuEditorSection = ({section, setSections}) => {
  const { isActive, catName, catItems, catID}  = section

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
  const [confirmDelete, setConfirmDelete] = useState(false)

  const deleteClicked = () => {
    if (confirmDelete) {
      console.log('delete ' + catID);
      console.log('section', section);
      setConfirmDelete(false)
    } else {
      setConfirmDelete(true)
    }
  }

  return (
    <div className="menu-editor-section">
        <h3>{catName}</h3>
        <p>{catItems.length} items</p>

        <div className="menu-editor-section__buttons">
          <Button 
            Id="section-add-item"
            icon="add" 
            color='blue'
          >Add section item</Button>
          
          <Button 
            Id="section-active-toggle"
            width="fit-content" 
            color={isActive ? 'green' : 'gray'}
          >{isActive ? 'active' : 'hidden'}</Button>
          
          <Button 
            Id="section-delete"
            icon={confirmDelete ? '' : 'trash'} 
            color={confirmDelete ? 'red' : 'greyDark'}
            clickEvent={deleteClicked}
            width={confirmDelete ? 'fit-content' : ''}
          >
              delete {catName}?
          </Button>
        </div>
    </div>
  )
}

export default MenuEditorSection
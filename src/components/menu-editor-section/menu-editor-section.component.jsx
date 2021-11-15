import React, { useState } from 'react'
import NewItemForm from '../new-item-form/new-item-form'
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
  const [showNewItemForm, setShowNewItemForm] = useState(false)

  const deleteClicked = () => {
    if (confirmDelete) {
      setConfirmDelete(false)
      setSections((prevState) => {
        const stateCopy = [...prevState]
        const newState = stateCopy.filter(section => section.catID !== catID)
        return [...newState]
      })
    } else {
      setConfirmDelete(true)
      setTimeout(() => setConfirmDelete(false), 3000)
    }
  }

  const addNewItemClicked = () => {
    if (showNewItemForm) {
      setShowNewItemForm(false)
    } else {
      setShowNewItemForm(true)
    }
  }

  const addItemToSection = () => {
    setSections((prevState) => {
      const stateCopy = [...prevState]
      stateCopy.find(x => x.catID === catID).catItems.push(newItem)
      return(stateCopy)
    })
  }

  return (
    <div className="menu-editor-section">
        <h3>{catName}</h3>
        <p>{catItems.length} items</p>

        {/* might be empty */}
        <ul className="menu-editor-section__items">
          {
            catItems.map((item) => (
              <li key={`${catID}-item-${item.name}`}>{item.name}</li>
            ))
          }
        </ul>

        <div className="menu-editor-section__buttons">
          <Button 
            Id="section-add-item"
            icon={showNewItemForm ? 'times' : 'add'}
            color={showNewItemForm ? 'greyDark' : 'blue'}
            clickEvent={addNewItemClicked}
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
        
        {
          showNewItemForm ? 
            <NewItemForm 
              newItem={newItem} 
              setNewItem={setNewItem}
              addItemToSection={addItemToSection}
            />
          : ''
        }
    </div>
  )
}

export default MenuEditorSection
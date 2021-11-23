import React, { useState } from 'react'
import NewItemForm from '../new-item-form/new-item-form'
import Button from '../button/button.component'
import './menu-editor-section.styles.scss'

const MenuEditorSection = ({businessCurrency, section, setSections}) => {
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

  const makeItemID = () => {
    const nameString = newItem.name.replace(/\s/g, "-")
    return `${nameString}_${catID}_${Date.now()}`
  }

  const addItemToSection = () => {
    const newItemCopy = { ...newItem }
    newItemCopy.id = `${makeItemID()}`
    setSections((prevState) => {
      const stateCopy = [...prevState]
      stateCopy.find(x => x.catID === catID).catItems.push(newItemCopy)
      return stateCopy
    })
    setNewItem(newItemInitial)
    setShowNewItemForm(false)
  }

  const deleteItemFromSection = (itemToDelete) => {
    console.log(itemToDelete.id)
    setSections((prevState) => {
      const stateCopy = [...prevState]
      const filtered = stateCopy.find(x => 
        x.catID === catID).catItems.filter(item => 
          item.id !== itemToDelete.id
      )
      stateCopy.find(x => x.catID === catID).catItems = filtered
      return stateCopy
    })
  }

  return (
    <div className="menu-editor-section">
        <h3>{catName}</h3>
        <p>{catItems.length} items</p>

        <div className="menu-editor-section__buttons">
          <Button 
            Id="section-add-item"
            icon={showNewItemForm ? 'times' : 'add'}
            color={showNewItemForm ? 'greyDark' : 'blue'}
            clickEvent={addNewItemClicked}
          >
            Add section item
          </Button>
          
          <Button 
            Id="section-active-toggle"
            width="fit-content" 
            color={isActive ? 'green' : 'gray'}
          >
            {isActive ? 'active' : 'hidden'}
          </Button>
          
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

        <ul className="menu-editor-section__items">
          {
            catItems.map((item, i) => (
              <li key={`${catID}-item-${item.name}-${i}`}>
                <span className="title">
                  {item.name}
                </span>
                
                <span className={`price ${businessCurrency}`}>
                  {item.price && item.price + ' ' + businessCurrency}
                </span>

                <span className="buttons">
                  <Button
                    Id="edit-menu-item"
                    icon="edit"
                    color="greyDark"
                    size="small"
                  >edit</Button>

                  <Button
                    Id="delete-menu-item"
                    icon="trash"
                    color="greyDark"
                    size="small"
                    clickEvent={() => deleteItemFromSection(item)}
                  >delete</Button>

                </span>
              </li>
            ))
          }
        </ul>
        
        {
          showNewItemForm ? 
            <NewItemForm 
              addItemToSection={addItemToSection}
              businessCurrency={businessCurrency}
              newItem={newItem} 
              setNewItem={setNewItem}
            />
          : ''
        }
    </div>
  )
}

export default MenuEditorSection
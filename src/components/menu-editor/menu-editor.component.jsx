import React, { useState, useEffect } from 'react'
import Button from '../button/button.component'
import MenuEditorSection from '../menu-editor-section/menu-editor-section.component'
import './menu-editor.styles.scss'

const MenuEditor = ({ businessMenu, setBusinessMenu }) => {
  const [sections, setSections] = useState(businessMenu)
  const [newSection, setNewSection] = useState({
    isOpen: false,
    value: '',
  })

  useEffect(() => {
    setBusinessMenu(sections)
  }, [sections])
  
  const toggleAddInput = () => {
    setNewSection(prevState => ({
      ...prevState,
      isOpen: !newSection.isOpen
    }))
  }

  const inputChanged = (event) => {
    const newValue = event?.target?.value
    newValue && setNewSection(prevState => ({
      ...prevState,
      value: newValue
    }))
  }

  const handleClick = () => {
    if (newSection.isOpen) {
      const sectionData = {
        catName: newSection.value,
        catID: `cat_${newSection.value.replace(/\s+/g, '-').toLowerCase()}`,
        catIcon: '',
        catOrder: 0,
        isActive: true,
        catItems: [],
      }
      setSections(prevState => ([
        ...prevState,
        sectionData
      ]))
      setNewSection(prevState => ({
        ...prevState,
        value: ''
      }))
      toggleAddInput()
    } else {
      toggleAddInput()
    }
  }

  const renderMenuSections = () => (
    sections?.map((section) => (
      <MenuEditorSection 
        key={`${section.catID}`}
        section={section}
        setSections={setSections}
      />
    ))
  )

  const renderNewSectionInput = () => (
    <input 
      type="text"
      className="input menu-editor__input"
      placeholder="starter, main, drinks..."
      onChange={inputChanged}
      value={newSection.value}
    />
  )

  return (
    <section className="menu-editor">
      <h2>Menu items</h2>

        <div className="menu-editor__sections">
          {
            sections?.length > 0 ?
              renderMenuSections()
            : 'This menu has no sections yet'
          }
        </div>

        <div className="menu-editor__add-section">
          {
            newSection.isOpen ? 
            renderNewSectionInput()
            : ''
          }
          <Button 
            icon="add" 
            color={newSection.isOpen ? 'green' : 'blue'}
            clickEvent={handleClick}
          >Add menu section</Button>
        </div>

    </section>
  )
}

export default MenuEditor
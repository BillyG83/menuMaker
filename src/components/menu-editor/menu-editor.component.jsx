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

  useEffect(() => {
    newSection.isOpen && document.querySelector('#new-section-input').focus()
  }, [newSection.isOpen])
  
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

  const makeNewSection = () => {
    const newCatID = `cat_${newSection.value.replace(/\s+/g, '-').toLowerCase()}`
    
    if (sections.some(section => section.catID === newCatID)) {
      alert('that category already exists')
      return
    }
    
    const sectionData = {
      catName: newSection.value,
      catID: newCatID,
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
    <>
      <input 
        className="input menu-editor__input"
        id="new-section-input"
        onChange={inputChanged}
        placeholder="starter, main, drinks..."
        type="text"
        value={newSection.value}
      />
      <Button 
        Id="add-new-section"
        clickEvent={makeNewSection}
        color={'green'}
        icon="add" 
      >Add menu section</Button>
    </>
  )

  return (
    <section className="menu-editor">
      <div className="menu-editor__header">
        <h2>Menu items</h2>
        <Button 
          Id="open-new-section-input"
          icon={newSection.isOpen ? 'times' : 'add'}
          color={newSection.isOpen ? 'greyDark' : 'blue'}
          clickEvent={toggleAddInput}
        >Add menu section</Button>
      </div>

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
        </div>

    </section>
  )
}

export default MenuEditor
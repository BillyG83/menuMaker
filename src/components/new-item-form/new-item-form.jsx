import React from 'react'
import Button from '../button/button.component'
import './new-item-form.scss'

const NewItemForm = ({
  addItemToSection,
  businessCurrency,
  newItem,
  setNewItem,
}) => {
  const submit = (event) => {
    event.preventDefault()
    addItemToSection()
    event.target.reset()
  }

  const inputUpdated = (event) => {
    const propName = event?.target?.dataset?.name
    const propValue = event?.target?.value

    if (!propName) return

    setNewItem((prevState) => ({
      ...prevState,
      [propName]: propValue
    }))
  }

  return (
    <form id="JSnewItemForm" className="new-item-form" onSubmit={submit}>
      <h3>Add new menu item</h3>

      <div className="new-item-form__inner">
        <label>
          Name
          <input 
            data-name={'name'}
            onChange={inputUpdated}
            placeholder="menu item name"
            required 
            value={newItem.name}
            type="text"
          />
        </label>

        <label>
          Details
          <textarea
            data-name={'detail'}
            onChange={inputUpdated}
            placeholder="come on, sell it to me"
            rows="4"
            value={newItem.detail}
          />
        </label>

        <label>
          Price ({businessCurrency})
          <input 
            data-name={'price'}
            onChange={inputUpdated}
            min="1"
            placeholder="10.99"
            step="any"
            type="number"
            value={newItem.price}
          />
        </label>

        <label>
          Sub Category
          <input 
            data-name={'subCat'}
            onChange={inputUpdated}
            placeholder="group by sub category name"
            type="text"
            value={newItem.subCat}
          />
        </label>

        <label>
          More Info
          <textarea
            data-name={'moreInfo'}
            onChange={inputUpdated}
            rows="4"
            placeholder="anything else we should know?"
            value={newItem.moreInfo}
          />
        </label>
      </div>

      <div className="new-item-form__buttons">
        <Button 
          Id="cancel-new-item"
          color="grey"
          text="Cancel"
        />
        <Button 
          Id="add-new-item"
          color="green"
          text="Done"
          type="submit"
        />
      </div>
    </form>
  )
}

export default NewItemForm
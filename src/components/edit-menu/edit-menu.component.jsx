import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectMenuToEdit } from '../../redux/accounts/accounts.selectors'
import Button from '../button/button.component'
import MenuEditor from '../menu-editor/menu-editor.component'
import EditMenuSocial from '../edit-menu-social/edit-menu-social.component'
import './edit-menu.styles.scss'

const EditMenu = ({ menuData }) => {
    const [ businessCurrency, setBusinessCurrency ] = useState(menuData.businessCurrency)
    const [ businessName, setBusinessName ] = useState(menuData.businessName)
    const [ businessPostCode, setBusinessPostCode ] = useState(menuData.businessPostCode)
    const [ published, setPublished ] = useState(menuData.published)
    const [ businessInfo, setBusinessInfo ] = useState(menuData.businessInfo)
    const [ businessMenu, setBusinessMenu ] = useState(menuData.businessMenu)
    const [ businessSocial, setBusinessSocial ] = useState(menuData.businessSocial)
    const [ isDataUpdated, setIsDataUpdated ] = useState(false)

    useEffect( () => {
        console.log('businessSocial changed');
    }, [ businessSocial ])

    const updatesSaved = () => {
        setIsDataUpdated(false)
    }

    const handleClick = (event) => {
        console.log('businessSocial = ', businessSocial);
    }

    return(
        <section className="edit-menu">
            <h3>{ businessName }</h3>
            <p>{ businessPostCode }</p>
            <p>{ businessCurrency }</p>
            <p>{ 
                published ? 'Published'
                : 'not yet published'
            }</p>

            <MenuEditor 
                businessMenu={businessMenu}
                setBusinessMenu={setBusinessMenu}
            />

            <EditMenuSocial 
                businessSocial={businessSocial}
                setBusinessSocial={setBusinessSocial}
            />

            <div className="edit-menu__buttons">
                <Button 
                    clickEvent={updatesSaved}
                    disabled={isDataUpdated}
                >
                    Save Changes
                </Button>

                <Button 
                    clickEvent={handleClick}
                    color="green"
                    disabled={published}
                >
                    { published ? 'Update'
                    : 'Publish'
                    }
                </Button>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    menuData: selectMenuToEdit(state)
})

export default connect(mapStateToProps)(EditMenu)
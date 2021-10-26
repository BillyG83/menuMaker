import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Button from '../button/button.component'
import MenuEditor from '../menu-editor/menu-editor.component'
import EditMenuSocial from '../edit-menu-social/edit-menu-social.component'
import { accountUpdateMenu, accountUpdateSocial } from '../../redux/accounts/accounts.actions'
import { selectAccountToEdit } from '../../redux/accounts/accounts.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'
import { saveMenuChanges } from '../../firebase/firebase'
import './edit-menu.styles.scss'

const EditMenu = ({ 
    currentUser,
    menuData,
    updateAccountsMenu,
    updateAccountsSocial,
}) => {
    const [ businessCurrency, setBusinessCurrency ] = useState(menuData.businessCurrency)
    const [ businessName, setBusinessName ] = useState(menuData.businessName)
    const [ businessPostCode, setBusinessPostCode ] = useState(menuData.businessPostCode)
    const [ published, setPublished ] = useState(menuData.published)
    const [ businessInfo, setBusinessInfo ] = useState(menuData.businessInfo)
    const [ businessMenu, setBusinessMenu ] = useState(menuData.businessMenu)
    const [ businessSocial, setBusinessSocial ] = useState(menuData.businessSocial)
    const [ isDataUpdated, setIsDataUpdated ] = useState(false)

    useEffect( () => {
        setIsDataUpdated(true)
    }, [ businessMenu, businessSocial ])

    const updatesSaved = () => {
        setIsDataUpdated(false)
        updateAccountsMenu(businessMenu)
        updateAccountsSocial(businessSocial)

        const updatedMenuData = {
            businessCurrency: businessCurrency,
            businessId: menuData.businessId,
            businessInfo: businessInfo,
            businessJoinDate: menuData.businessJoinDate,
            businessMenu: businessMenu,
            businessName: businessName,
            businessPostCode: businessPostCode,
            businessSocial: businessSocial,
            published: published,
        }
        
        saveMenuChanges(currentUser.id, updatedMenuData)
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
                    disabled={!isDataUpdated}
                    Id="save-button"
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
    currentUser: selectCurrentUser(state),
    menuData: selectAccountToEdit(state),
})

const mapDispatchToProps = dispatch => ({
    updateAccountsMenu: (data) => dispatch(accountUpdateMenu(data)),
    updateAccountsSocial: (data) => dispatch(accountUpdateSocial(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditMenu)
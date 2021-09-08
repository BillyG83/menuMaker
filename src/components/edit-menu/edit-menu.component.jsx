import React, { useState } from 'react'
import { connect } from 'react-redux'
import { selectMenuToEdit } from '../../redux/accounts/accounts.selectors'
import Button from '../button/button.component'
import EditMenuSocial from '../edit-menu-social/edit-menu-social.component'

const EditMenu = ({ menuData }) => {
    const [ businessCurrency, setBusinessCurrency ] = useState(menuData.businessCurrency)
    const [ businessName, setBusinessName ] = useState(menuData.businessName)
    const [ businessPostCode, setBusinessPostCode ] = useState(menuData.businessPostCode)
    const [ published, setPublished ] = useState(menuData.published)
    const [ businessInfo, setBusinessInfo ]= useState(menuData.businessInfo)
    const [ businessMenu, setBusinessMenu ]= useState(menuData.businessMenu)
    const [ businessSocial, setBusinessSocial ]= useState(menuData.businessSocial)

    const handleClick = (event) => {
        console.log('businessSocial = ', businessSocial);
    }

    return(
        <section>
            <h3>{ businessName }</h3>
            <p>{ businessPostCode }</p>
            <p>{ businessCurrency }</p>
            <p>{ 
                published ? 'Published'
                : 'not yet published'
            }</p>

            {
                businessSocial ?
                <EditMenuSocial 
                    businessSocial={businessSocial}
                    setBusinessSocial={setBusinessSocial}
                />
                : null
            }

            <Button 
                clickEvent={handleClick}
                color="green"
            >
                { published ? 'Update'
                : 'Publish'
                }
            </Button>
        </section>
    )
}

const mapStateToProps = state => ({
    menuData: selectMenuToEdit(state)
})

export default connect(mapStateToProps)(EditMenu)
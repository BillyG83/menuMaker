import React from 'react'
import { connect } from 'react-redux'
import { addNewMenu } from '../../firebase/firebase.js'
import NewMenuForm from '../new-menu-form/new-menu-form.jsx'
import { addNewUsersAccounts } from '../../redux/accounts/accounts.actions'
import './add-menu.styles.scss'

class AddMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false,
        }
    }

    toggleForm() {
        this.setState({ showForm: !this.state.showForm })
    }

    formSubmitted(newMenuData) {
        const Id1 = this.props.userId.slice(-8)
        const Id2 = newMenuData.createdAt.replace(/-/gi, '')
        const Id3 = newMenuData.businessPostCode.replace(/ /gi, '').toLowerCase()
        const Id4 = newMenuData.businessName.replace(/[^A-Z0-9]+/ig, '').toLowerCase()
        newMenuData.businessId = Id1 + Id2 + Id3 + Id4
        this.updateState(newMenuData)
        this.props.addNewAccountToStore(newMenuData)
    }

    updateState(newMenuData) {
        addNewMenu(this.props.userId, newMenuData)
    }

    render() {
        return(
            <div className="add-menu">
                <button onClick={this.toggleForm.bind(this)}>
                    {
                        this.state.showForm ?
                        'forget it'
                        :
                        'add menu'
                    }
                </button>
                {
                    this.state.showForm ?
                    <NewMenuForm 
                        formSubmitted={this.formSubmitted.bind(this)}
                    />
                    :
                    null
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addNewAccountToStore: (data) => dispatch(addNewUsersAccounts(data))
})

export default connect(null, mapDispatchToProps)(AddMenu)
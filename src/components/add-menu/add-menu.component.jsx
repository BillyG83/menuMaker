import React from 'react'
import NewMenuForm from '../new-menu-form/new-menu-form.jsx'

class AddMenu extends React.Component {
    constructor(props) {
        super()

        this.state = {
            showForm: false,
            userId: props.userId,
            accountInfo: {
                businessCurrency: "Euro",
                businessId: "",
                businessJoinDate: "",
                businessLogo: "/img/logo.jpg",
                businessName: "",
                businessPostCode: "",
                businessInfo: {
                    businessAddress: "San Marco 12, Chueca",
                    businessCity: "Madrid",
                    businessCountry: "Spain",
                    businessEmail: "bill@thebar.com",
                    businessPhone: "07712345678",
                    businessWebUrl: "https://www.google.com/",
                },
                businessSocial: {
                    facebook: 'https://www.facebook.com/',
                    twitter: 'https://twitter.com/',
                    instagram: 'https://instagram.com/',
                },
                businessMenu: [],
            }
        }
    }

    toggleForm() {
        this.setState({ showForm: !this.state.showForm })
    }

    formSubmitted(businessName, businessPostCode, createdAt) {
        const Id1 = this.props.userId.slice(-8)
        const Id2 = createdAt.replace(/-/gi, '')
        const Id3 = businessPostCode.replace(/ /gi, '').toLowerCase()
        const Id4 = businessName.replace(/[^A-Z0-9]+/ig, '').toLowerCase()
        const businessId = Id1 + Id2 + Id3 + Id4
        this.updateState(businessId, businessName, businessPostCode, createdAt)
    }

    updateState(businessId, businessName, businessPostCode, createdAt) {
        this.setState(prevState => ({ 
            ...prevState,
            accountInfo: {
                ...prevState.accountInfo,
                businessId: businessId,
                businessJoinDate: createdAt,
                businessName: businessName,
                businessPostCode: businessPostCode,
            }
        }))
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
                    <NewMenuForm formSubmitted={this.formSubmitted.bind(this)} />
                    :
                    null
                }
            </div>
        )
    }
}

export default AddMenu
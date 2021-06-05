import React , { memo } from 'react'
import './page-title.styles.scss'

const PageTitle = React.memo(({ text }) => (
    <h1 className="page-title">{ text }</h1>
))

export default PageTitle
import { memo } from 'react'
import './page-title.styles.scss'

const PageTitle = memo(({ text }) => (
    PageTitle.displayName = 'PageTitle'
    (<h1 className="page-title">{ text }</h1>)
))

export default PageTitle
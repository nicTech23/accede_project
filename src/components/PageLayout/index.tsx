import React, { ReactNode } from 'react'
import Header from '../ Header'
import Footer from '../ Footer'

interface PageLayoutProps {
    children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default PageLayout
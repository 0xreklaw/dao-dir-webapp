import React from 'react'
import Header from './Header'

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
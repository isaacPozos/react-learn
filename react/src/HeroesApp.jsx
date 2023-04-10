import React from 'react'
import { Navbar } from './ui'  
import { Helmet } from 'react-helmet'

export const HeroesApp = () => {
  return (
    <>
        <Helmet>
          <title>Home HeroesApp</title>
        </Helmet>
        <Navbar />
    </>
  )
}

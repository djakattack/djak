import React from 'react'
import TitleContainer from './components/Title'
import NavContainer from './components/Nav'
import BodyContainer from './components/Body'

const App = ({ props }) => (
    <div>
        <TitleContainer />
        <NavContainer />
        <BodyContainer />
    </div>
)

export default App
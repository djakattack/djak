import React from 'react'
// import TitleContainer from './components/Title'
// import NavContainer from './components/Nav'
import BodyContainer from './components/Body'

const App = ({ props }) => (
    <div>
        {/* <TitleContainer /> */}
        <BodyContainer />
        {/* <NavContainer /> */}
    </div>
)

// Because of the styling that I'm using for the Nav container, the Body container MUST be placed above the nav container here.  I need to find a way to fix that.  Or do I?

export default App
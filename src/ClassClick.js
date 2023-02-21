import React from 'react'

import './ClassClick.css'

class ClassClick extends React.Component {
    render(){
        return (
            <div className="afterclickclass">
            <h3>This is created by class component</h3>
            <p>This is done using external css</p>
            <p>This is done using inline css</p>
        </div>
          )

    }
 
}

export default ClassClick
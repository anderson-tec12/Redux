import React from 'react'

export default (props) => {
  return (
    <div className="card">
      <div className="card-header">
        {props.header}
      </div>
      <div className="card-body">
        
        { props.children } {/* corpo do componente ao chamar o componente vai ser possivel passar um corpo */}
      </div>      
    </div>
  )
}
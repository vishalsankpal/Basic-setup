import React from 'react';
const Rainbow = (WrappedComponent) => {
  const colours = ['red','orange','blue','pink','green','yellow']
  const randomColors = colours[Math.floor(Math.random() * 5)]
  const className = randomColors + '-text';

  return(props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>

    )
  }
}
export default Rainbow;
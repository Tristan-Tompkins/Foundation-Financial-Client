import React from 'react'

const HomePage = (props) => {
  return (
    <div>
      <h1 className='homePage'>B.O.A.B<br />{'(Ballin\' On a Budget)'}</h1>
      <img src ="https://i.imgur.com/LUIY2A4.png" className='photo'/>
      <h4 className='homePage'>B.O.A.B is a one stop shop for organizing all your budgeting needs. This application is is designed to help you visualize your spending, and get a better understanding of where your dollar is going.<br /> {'"Imma teach you to spend them dollas and to also pick them up"'} </h4>
      <h5 className='homePage'>Sign up for free to start your budget today!</h5>
    </div>
  )
}

export default HomePage
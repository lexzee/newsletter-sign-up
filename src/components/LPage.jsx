import React from 'react'
import imgMobile from '../images/illustration-sign-up-mobile.svg'
import listIcon from '../images/icon-list.svg'

const LPage = () => {
  const data = [
    {
      id: 1,
      text: "Product discovery and building what matters",
    },
    {
      id: 2,
      text: "Measuring to ensure updates are a success"
    },
    {
      id: 3,
      text: "And much more!"
    }
  ]

  const body = data.map((dat, key) => {
    return (
      <tr key={key} >
        <td><img src={listIcon} alt="" /></td>
        <td style={{textAlign: 'left'}}><p>{dat.text}</p></td>
      </tr>
    )
  })

  return (
    <>
      <div className="success">
        <div className='smain'>
          <img src={listIcon} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription
          </p>
        </div>
        <div className="button">
          <button className="dismiss">Dismiss message</button>
        </div>
      </div>
      <div className="main">
        <div className="section1">
          <img src={imgMobile} alt="Header Image" className="headerImg" />
        </div>
        <div className="section2">
          <h1 className="title">
            Stay updated!
          </h1>
          <p className="desc">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="more">
            <table>
              <tbody>
                {body}
              </tbody>
            </table>
          </div>
          <form action="#" method="post" className='newsletter'>
            <legend>Email address</legend>
            <input type="email" name="email" id="email" className='email' placeholder='email@company.com' />
            <button className='submit'>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LPage
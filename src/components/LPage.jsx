import React from 'react'
import imgMobile from '../images/illustration-sign-up-mobile.svg'
import imgDesktop from '../images/illustration-sign-up-desktop.svg'
import listIcon from '../images/icon-list.svg'
import { useState } from 'react'
import { useEffect } from 'react'

const LPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [alert, setAlert] = useState({
    isTrue: false,
    value: ""
  })
  const validEmail = new RegExp(`^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$`)

  useEffect(() => {
    const handleView = () => {
      setIsMobile(window.innerWidth < 780);
    };
    handleView();

    window.addEventListener("resize", handleView);
    return () => {
      window.removeEventListener("resize", handleView);
    }
  }, [])
  const handleChange = (e) => {
    setValue(e.target.value);
    value && setAlert(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(value === ''){
      setAlert(state => {
        return ({
          ...state,
          isTrue: !state.isTrue,
          value: "field can not be empty!"
        })
      })
    } else if(!validEmail.test(value)){
      setAlert(state => {
        return({
          ...state,
          isTrue: !state.isTrue,
          value: 'enter valid email address!',
        })
      })
    } else {
      setSubmitted(true)
    }
  }
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
      <div className={`success ${!submitted && 'hidden'}`}>
        <div className='smain'>
          <img src={listIcon} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription
          </p>
        </div>
        <div className="button">
          <button
            className="dismiss"
            onClick={()=> {
              setSubmitted(false)
              setValue('')
            }}
          >Dismiss message</button>
        </div>
      </div>
      <div className={`main ${submitted && 'hidden'}`}>
        <div className="section1">
          <img src={isMobile ? imgMobile : imgDesktop} alt="Header Image" className="headerImg" />
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
            <input
              type="email"
              name="email"
              id="email"
              className='email'
              placeholder='email@company.com'
              value={value}
              onChange={handleChange}
            />
              <p className={`alert ${!alert.isTrue && 'hidden'}`}>
                {alert.value}
              </p>
            <button
              className='submit'
              onClick={handleSubmit}
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LPage
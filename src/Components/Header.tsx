import React from 'react'
import '../style/Header.css'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <div id='header-container'>
        <div id='header-grid'>
          <NavLink to='/'>Home/로고</NavLink>
          <a href='#'>Safety</a>
          <NavLink to='/Pages/TravelSubmissionScreen'>여행자</NavLink>
          <a href='#'>쭈니</a>
          <a href='#'>채팅방</a>
          <NavLink to='/Pages/LoginScreen'>로그인</NavLink>
          <NavLink to='/Pages/SignupScreen'>회원가입</NavLink>
          {/* <a href="#">프로필</a> */}
        </div>
      </div>
    </header>
  )
}

export default Header

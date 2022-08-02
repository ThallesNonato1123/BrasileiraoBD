import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { Sports, Scoreboard, Shield } from '@mui/icons-material';

export default function Sidemenu() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to='/home' className="nav-link">
            <span className="link-text logo-text">Brasileirão</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g className="fa-group"></g>
              <path fill="currentColor"
                d="M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM416.6 360.9l-85.4-1.297l-25.15 81.59C290.1 445.5 273.4 448 256 448s-34.09-2.523-50.09-6.859L180.8 359.6l-85.4 1.297c-18.12-27.66-29.15-60.27-30.88-95.31L134.3 216.4L106.6 135.6c21.16-26.21 49.09-46.61 81.06-58.84L256 128l68.29-51.22c31.98 12.23 59.9 32.64 81.06 58.84L377.7 216.4l69.78 49.1C445.8 300.6 434.8 333.2 416.6 360.9z"
                className="fa-secondary"></path>
              <path fill="currentColor" className="fa-primary"> </path>
            </svg>
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/clubes' className="nav-link">
            <Shield className="fa-secondary" fontSize='large' />
            <span className="link-text">Clubes</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/gols' className="nav-link">
            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="fa-hand" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
              className="svg-inline--fa fa-solid fa-hand fa-9x">
              <g className="fa-group">
                <path fill="currentColor"
                  d="M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM416.6 360.9l-85.4-1.297l-25.15 81.59C290.1 445.5 273.4 448 256 448s-34.09-2.523-50.09-6.859L180.8 359.6l-85.4 1.297c-18.12-27.66-29.15-60.27-30.88-95.31L134.3 216.4L106.6 135.6c21.16-26.21 49.09-46.61 81.06-58.84L256 128l68.29-51.22c31.98 12.23 59.9 32.64 81.06 58.84L377.7 216.4l69.78 49.1C445.8 300.6 434.8 333.2 416.6 360.9z"
                  className="fa-secondary">

                </path>
              </g>
            </svg>
            <span className="link-text">Gols</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/partidas' className="nav-link">
            <Scoreboard className="fa-secondary" fontSize='large' />
            <span className="link-text">Partidas</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to='/cartoes' className="nav-link">
            <Sports className="fa-secondary" fontSize='large' />
            <span className="link-text">Cartões</span>
          </Link>
        </li>
        <li className="nav-item" id="themeButton"></li>
      </ul>
    </nav>
  )
}


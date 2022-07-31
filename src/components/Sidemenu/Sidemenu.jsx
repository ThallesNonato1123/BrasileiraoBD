import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Sidemenu() {
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
                <Link to= '/classificacoes' className="nav-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cat" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                        className="svg-inline--fa fa-cat fa-w-16 fa-9x">
                        <g className="fa-group">
                            <path fill="currentColor"
                                d="M223.7 130.8L149.1 7.77C147.1 2.949 141.9 0 136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l111.3 158.9C143.9 156.4 181.7 137.3 223.7 130.8zM256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.5-18.25-2.75-16.63-12l8.875-52.25l-37.88-37C156.6 310.6 160.5 299 169.9 297.6l52.38-7.625L245.7 242.5c2-4.25 6.125-6.375 10.25-6.375S264.2 238.3 266.2 242.5l23.5 47.5l52.38 7.625C351.6 299 355.4 310.6 348.5 317.3zM495.1 0H375.7c-5.621 0-10.83 2.949-13.72 7.77l-73.76 122.1c42 6.5 79.88 25.62 109.5 53.38l111.3-158.9C516.5 14.58 508.9 0 495.1 0z"
                                className="fa-secondary"></path>
                        </g>
                    </svg>
                    <span className="link-text">Classificações</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to='/gols' className="nav-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="alien-monster" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                        className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
                        <g className="fa-group">
                            <path fill="currentColor"
                                d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                                className="fa-secondary"></path>
                            <path fill="currentColor" d="M160,320h64V224H160Zm192-96v96h64V224Z" className="fa-primary">
                            </path>
                        </g>
                    </svg>
                    <span className="link-text">Gols</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to='/rodadas' className="nav-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-station-moon-alt"
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                        className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x">
                        <g className="fa-group">
                            <path fill="currentColor"
                                d="M32 32C49.67 32 64 46.33 64 64V400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32zM160 224C177.7 224 192 238.3 192 256V320C192 337.7 177.7 352 160 352C142.3 352 128 337.7 128 320V256C128 238.3 142.3 224 160 224zM288 320C288 337.7 273.7 352 256 352C238.3 352 224 337.7 224 320V160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160V320zM352 192C369.7 192 384 206.3 384 224V320C384 337.7 369.7 352 352 352C334.3 352 320 337.7 320 320V224C320 206.3 334.3 192 352 192zM480 320C480 337.7 465.7 352 448 352C430.3 352 416 337.7 416 320V96C416 78.33 430.3 64 448 64C465.7 64 480 78.33 480 96V320z"
                                className="fa-secondary"></path>
                        </g>
                    </svg>
                    <span className="link-text">Rodadas</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link to='/outros' className="nav-link">
                    <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-shuttle" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                        className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x">
                        <g className="fa-group">
                            <path fill="currentColor"
                                d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                                className="fa-secondary"></path>
                            <path fill="currentColor"
                                d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                                className="fa-primary"></path>
                        </g>
                    </svg>
                    <span className="link-text">Partidas</span>
                </Link>
            </li>
            <li className="nav-item" id="themeButton"></li>
            </ul>
        </nav>
    )
}

export default Sidemenu



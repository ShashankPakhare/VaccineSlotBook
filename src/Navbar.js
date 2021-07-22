import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nevbar = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark pos ">
  <NavLink className="navbar-brand" to="/">Covid-19</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav me-auto mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Vaccine Finder <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/covid">Covid Tracker</NavLink>
      </li>

    </ul>
  </div>
</nav>
        </>
    )
}

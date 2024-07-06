import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-style">
        <div className="container-fluid">
          <h1>
            <a className="navbar-brand" href="/">
              <img
                src="https://i.pinimg.com/originals/7a/a2/0e/7aa20e3daafa8c9ca5e88399e961b154.jpg"
                height="150"
                width="150"
              />
            </a>
          </h1>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/products/BV"
                >
                  Beverages
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/products/VG"
                >
                  Vegetables
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/products/SN"
                >
                  Snacks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/products/FR"
                >
                  Fruits
                </a>
              </li>
            </ul>
          </div>
          <h2>
            <a
              class="bi bi-cart3"
              href="/cart"
              style={{ color: "black", marginRight: "30px" }}
            ></a>
          </h2>
          <h2>
            <a
              class="bi bi-person"
              href="/login"
              style={{ color: "black" }}
            ></a>
          </h2>
        </div>
      </nav>
    );
  }
}

export default NavBar;

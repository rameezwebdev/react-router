import { NavLink } from "react-router-dom"

export const Header = () => {
    return <header class="section-navbar">
      <section class="top_txt">
        <div class="head container">
          <div class="head_txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div class="sing_in_up">
            <NavLink to="# ">SIGN IN</NavLink>
            <NavLink to="# ">SIGN UP</NavLink>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="navbar-brand">
          <NavLink to="index.html">
            <img
              src="/images/log.png"
              alt="thapa eCommerce logo"
              class="logo"
              width="80%"
              height="auto"
            />
          </NavLink>
        </div>

        <nav class="navbar">
          <ul>
            <li class="nav-item">
              <NavLink to="/" class="nav-link">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="about" class="nav-link">About</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="movies" class="nav-link">Movie</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="contact" class="nav-link">Contact</NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="addToCart.html"
                class="nav-link add-to-cart-button"
                id="cartValue"
              >
                <i class="fa-solid fa-cart-shopping"> 0 </i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

}
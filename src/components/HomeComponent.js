import React from "react";
import {Link} from "react-router-dom";

const HomeComponent = () =>
  <div>
    <h5>Designed by Group 17</h5>
    <br/>
    <div className="list-group">
      <Link className="list-group-item" to='/search'>
        Search products on Amazon/Google
      </Link>
      <Link className="list-group-item" to='/grid/products'>
        Product List
      </Link>
      <Link className="list-group-item" to='/login'>
        Login
      </Link>
      <Link className="list-group-item" to='/register'>
        Registration
      </Link>
      <Link className="list-group-item" to='/profile'>
        Profile
      </Link>
    </div>
  </div>

export default HomeComponent

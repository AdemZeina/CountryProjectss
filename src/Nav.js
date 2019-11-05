import React from "react";
import { Link } from "react-router-dom";


 const Navbar = props => {
  const { auth, profile } = props;
  console.log("auth" + auth);
//   const links = auth.uid ? (
//     <SignedInLinks profile={profile} />
//   ) : (
//     <SignedOutLinks />
//   );

  return (
    <nav className="nav-wrapper">
      {/*grey darken-3*/}
      <div className="container">
        <Link to="/" className="brand-logo">
          Adem App
        </Link>
        {/* {links} */}
      </div>
    </nav>
  );
};

export default Navbar;
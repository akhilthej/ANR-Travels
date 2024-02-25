import Navbar from "./navbar";
import Footer from "./footer";

import UnderConstruction from './csd/UnderConstruction'

import Meta from "./meta";
export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <UnderConstruction />
      <Navbar />
      <div>
      
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;

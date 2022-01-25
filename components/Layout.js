import React, { Fragment, useState } from "react";
// import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "./Loader";
import { useDarkMode } from '../themes/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme} from '../themes/theme'
import {ThemeProvider} from 'styled-components'

const Layout = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
   const [theme, toggleTheme] = useDarkMode();
   const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Navbar
          isShowLogIn={setIsShow}
          isShow={isShow}
          loading={loading}
          setLoading={setLoading}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        {children}
        
        {/* <Footer /> */}
      </ThemeProvider>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.users,
});
export default Layout;

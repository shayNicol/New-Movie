import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Color";
import "./Color";
import './Dark.css'




const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function DarkMode(){
    const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="darkm">
        <button onClick={() => themeToggler()}>DarkMode</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default DarkMode;
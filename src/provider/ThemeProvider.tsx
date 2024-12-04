import React, { createContext, useContext, useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
 mode: ThemeMode;
 toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeMode = (): ThemeContextProps => {
 const context = useContext(ThemeContext);
 if (!context) {
  throw new Error("useThemeMode must be used within a ThemeProvider");
 }
 return context;
};

const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
 children,
}) => {
 const [mode, setMode] = useState<ThemeMode>("light");

 const toggleTheme = () => {
  setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
 };

 const theme = useMemo(
  () =>
   createTheme({
    palette: {
     mode,
    },
   }),
  [mode]
 );

 return (
  <ThemeContext.Provider value={{ mode, toggleTheme }}>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
   </ThemeProvider>
  </ThemeContext.Provider>
 );
};

export default ThemeModeProvider;

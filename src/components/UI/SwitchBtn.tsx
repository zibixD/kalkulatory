import { Switch, FormControlLabel } from "@mui/material";
import { useThemeMode } from "@/provider/ThemeProvider";

const SwitchButton = () => {
 const { mode, toggleTheme } = useThemeMode();

 return (
  <FormControlLabel
   control={
    <Switch
     checked={mode === "dark"}
     onChange={toggleTheme}
     name="theme-switch"
    />
   }
   label={mode === "dark" ? "Tryb nocny" : "Tryb dzienny"}
  />
 );
};

export default SwitchButton;

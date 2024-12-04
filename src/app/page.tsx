"use client";

import Navigation from "@/components/Navigation";
import SwitchButton from "@/components/UI/SwitchBtn";
import VatForm from "@/components/VatForm";
import ThemeModeProvider from "@/provider/ThemeProvider";
import { Box, Typography } from "@mui/material";

export default function Home() {
 return (
  <ThemeModeProvider>
   <Box>
    <Navigation />

    <VatForm />
    <Typography
     sx={{
      fontSize: "20px",
      textAlign: "center",
      position: "relative",
      bottom: 0,
     }}
    >
     Wykonał Adrian Pląsek
    </Typography>
    <SwitchButton></SwitchButton>
   </Box>
  </ThemeModeProvider>
 );
}

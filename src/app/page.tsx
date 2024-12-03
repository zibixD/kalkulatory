"use client";

import Navigation from "@/components/Navigation";
import VatForm from "@/components/VatForm";
import { Box, Typography } from "@mui/material";

export default function Home() {
 return (
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
  </Box>
 );
}

import { AppBar } from "@mui/material";
import Link from "next/link";

const Navigation = () => {
 return (
  <AppBar>
   <Link href="/">Strona główna</Link>
   <Link href="/kalkulatorVat">Kalkulator VAT</Link>
   {/* <Link>Kalkulator Płacowy</Link> */}
  </AppBar>
 );
};

export default Navigation;

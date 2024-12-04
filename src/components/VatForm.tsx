"use client";

import {
 FormControl,
 FormControlLabel,
 Radio,
 RadioGroup,
 TextField,
 Select,
 MenuItem,
 Button,
 Typography,
 Box,
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import "../app/globals.css";

enum NettoEnum {
 brutto = "brutto",
 netto = "netto",
}

interface PercentAmount {
 23: number;
 8: number;
 5: number;
}

type FormData = {
 amount: number;
 radio: NettoEnum;
 percentage: number;
};

const VatForm = () => {
 const percentages: PercentAmount = {
  23: 23,
  8: 8,
  5: 5,
 };

 const { register, handleSubmit } = useForm<FormData>({
  defaultValues: {
   amount: 0,
   percentage: percentages[23],
  },
 });

 const [result, setResult] = useState<number | null>(null);

 const onSubmit: SubmitHandler<FormData> = (data) => {
  const { amount, percentage, radio } = data;
  //   const calculatedResult = amount * (percentage / 100);
  if (radio === "netto") {
   const divisor = 1 + percentage / 100;
   const calculatedNettoResult = amount / divisor;
   setResult(calculatedNettoResult);
  } else {
   const divisor = 1 + percentage / 100;
   const calculatedBruttoResult = amount * divisor;
   setResult(calculatedBruttoResult);
  }
 };

 return (
  <>
   <Typography className="title">Kalkulator VAT (netto-brutto)</Typography>
   <Box className="mainBox">
    <Box className="info">
     <Typography sx={{ fontSize: "30px" }}>
      W jaki sposób jest to liczone?
     </Typography>
     <Typography>
      Aby przeliczyć cenę brutto na netto, należy podzielić cenę brutto przez
      odpowiednią stawkę VAT. Na przykład, jeśli cena brutto wynosi 123 zł, a
      stawka VAT wynosi 23%, obliczenie wygląda tak: 123 zł / 1,23 = 100 zł
      (cena netto).
     </Typography>
     <Typography>
      W przypadku przeliczanie ceny z netto na brutto. Aby obliczyć kwotę brutto
      bez obliczania kwoty VAT, wystarczy kwotę netto przemnożyć przez 1,XX,
      gdzie XX oznacza odpowiednią stawkę VAT. Przykład Kwota netto: 54 zł,
      stawka VAT 23%, kwota podatku: 54x 23/100 = 54 x 0,23 = 12,42 zł
     </Typography>
    </Box>
    <Box className="vatForm">
     <Typography sx={{ fontSize: "30px" }}>Oblicz</Typography>
     <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
       label="Kwota"
       type="number"
       {...register("amount")}
       sx={{ width: "200px" }}
      />
      <FormControl>
       <RadioGroup>
        <FormControlLabel
         {...register("radio")}
         value="brutto"
         label="Brutto na netto"
         control={<Radio />}
        ></FormControlLabel>
        <FormControlLabel
         {...register("radio")}
         value="netto"
         label="Netto na brutto"
         control={<Radio />}
        ></FormControlLabel>
       </RadioGroup>
       <Select
        label="Procent"
        {...register("percentage")}
        sx={{ width: "200px" }}
       >
        {Object.entries(percentages).map(([key, value]) => (
         <MenuItem key={key} value={value}>
          {key}%
         </MenuItem>
        ))}
       </Select>
      </FormControl>
      <Button
       type="submit"
       sx={{ backgroundColor: "wheat", color: "black", marginTop: "20px" }}
      >
       Przelicz
      </Button>
     </form>
     <Typography>{result !== null ? `${result.toFixed(2)}zł ` : ""}</Typography>
    </Box>
   </Box>
  </>
 );
};

export default VatForm;

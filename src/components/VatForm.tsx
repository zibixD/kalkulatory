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
   <form onSubmit={handleSubmit(onSubmit)}>
    <TextField label="Kwota" type="number" {...register("amount")} />
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
     <Select label="Procent" {...register("percentage")}>
      {Object.entries(percentages).map(([key, value]) => (
       <MenuItem key={key} value={value}>
        {key}%
       </MenuItem>
      ))}
     </Select>
    </FormControl>
    <Button type="submit">Przelicz</Button>
   </form>
   <Typography>{result !== null ? `${result.toFixed(2)}zł ` : ""}</Typography>
  </>
 );
};

export default VatForm;

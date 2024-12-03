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
} from "@mui/material";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const { amount, percentage } = data;
  const calculatedResult = amount * (percentage / 100);
  setResult(calculatedResult);
  console.log(result);
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <TextField label="Kwota" type="number" {...register("amount")} />
   <FormControl>
    <RadioGroup>
     <FormControlLabel
      {...register("radio")}
      value="brutto"
      label="Brutto"
      control={<Radio />}
     ></FormControlLabel>
     <FormControlLabel
      {...register("radio")}
      value="netto"
      label="Netto"
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
 );
};

export default VatForm;

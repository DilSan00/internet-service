import clsx from "clsx";
import { Input } from "../../Input/Input";
import s from "./Price.module.scss";
import { useState } from "react";

export const Price = ({onChange}) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handleChange = (type, value) => {
    const numericValue = value === "" ? "" : Number(value);
    const newState = {
      from: type === "from" ? numericValue : min,
      to: type === "to" ? numericValue : max,
    }

    if (type === "from") setMin(numericValue);
    if (type === "to") setMax(numericValue);
  }

  return (
    <div className={s.price}>
      <div className={s.inputContainer}>
        <Input className={clsx(s.input, s.fromInput)} value={min} onChange={(e) => handleChange("from", e.target.value)} type="number" placeholder="0" />
        <p className={s.dollar}>$</p>
      </div>

      <div className={clsx(s.inputContainer, s.toContainer)}>
        <Input className={clsx(s.input, s.toInput)} value={max} onChange={(e) => handleChange("to", e.target.value)} type="number" placeholder="250" />
        <p className={clsx(s.dollar, s.toDollar)}>$</p>
      </div>
    </div>
  );
};

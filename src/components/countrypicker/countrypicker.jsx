import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./countrypicker.module.css";
import { fetchcountriesData } from "../../api";
export const Countrypicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await fetchcountriesData());
    };
    fetchCountries();
  }, []);
  console.log(countries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        dafault=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {countries.map((country, i) => {
          return (
            <option key={i} value={country}>
              {" "}
              {country}{" "}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};
export default Countrypicker;

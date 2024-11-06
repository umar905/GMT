import React from "react";
import "./InputHeader.css";
import SearchImage from "../../../images/HeaderImages/search.png";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const InputHeader = () => {
  const ITEM_HEIGHT = 0;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
       
      },
    },
  };
  const names = [
    "Реанимация",
    "Хирургия",
    "Офтальмология",
    "Лабораторная диагностика",
    "Акушерство",
    "Гинекология",
    "Гистология",
    "Косметология",
    "Оториноларингология",
    "Рентгенология и томография",
    "Стерилизация",
    "Физиотерапия и реабилитация",
    "Функциональная диагностика",
    "Новинки",
    "Распродажи",
    "Кабинеты под ключ",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
      <div class="search-container">
      <FormControl className="form">
        <Select
        className="category-select"
          displayEmpty
          value={personName}
          onChange={handleChange}
          // input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <b>Все категории</b>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <b>Все категории</b>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        <input type="text" class="search-input" placeholder="Поиск" />
        <button class="search-button">
          <img src={SearchImage} alt="Search" />
        </button>
      </div>
    </>
  );
};

export default InputHeader;

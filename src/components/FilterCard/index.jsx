import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Box,
  Chip,
  Paper,
  Typography,
  IconButton,
  List,
  ListItemText,
  ListItemButton,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModalWrapper from "../../layout/ModalWrapper";
import CancelIcon from "@mui/icons-material/Cancel";

const handleDelete = () => {};
const handleClick = () => {};

const FilterCard = () => {
  useEffect(() => {
    setRightSideData(filterItemData[0]);
  }, []);
  let filterData = [
    { id: 1, title: "Fast Delivery", onClick: handleClick },
    { id: 2, title: "Rating 4+", onClick: handleClick },
    { id: 3, title: "Pure veg", onClick: handleClick },
    { id: 4, title: "Offer", onClick: handleClick },
    { id: 5, title: "Less than 300 Rs", onClick: handleClick },
  ];

  // read
  const filterItemData = [
    {
      id: 0,
      title: "Sort",
      data: [
        {
          id: 0,
          title: "Relevance (Default)",
        },
        {
          id: 1,
          title: "Delivery Time",
        },
        {
          id: 2,
          title: "Rating",
        },

        {
          id: 3,
          title: "Cost: Low to High",
        },

        {
          id: 1,
          title: "Cost: High to Low",
        },
      ],
      subTitle: "Sort By",
      type: "radio",
    },
    {
      id: 1,
      title: "Delivery Time",
      data: [
        {
          id: 0,
          title: "Fast Delivery",
        },
      ],
      subTitle: "Filter By",
      type: "check",
    },
    {
      id: 2,
      title: "Cuisines",
      data: [
        {
          id: 0,
          title: "A",
        },
        {
          id: 1,
          title: "B",
        },
        {
          id: 2,
          title: "C",
        },
      ],
      subTitle: "FILTER BY CUISINE",
      type: "check",
    },
  ];

  const handleFilterClick = () => {};

  // read
  const [rightSideData, setRightSideData] = useState({
    id: 0,
    title: "",
    subTitle: "",
    type: "",
    data: [],
  });
  return (
    <Box>
      <Chip
        label="Filter"
        variant="outlined"
        onClick={handleFilterClick}
        deleteIcon={<FilterAltIcon />}
        onDelete={handleFilterClick}
        sx={{
          m: 1,
        }}
      />
      <Chip
        label="Sort By"
        variant="outlined"
        onClick={handleClick}
        deleteIcon={<KeyboardArrowDownIcon />}
        onDelete={handleDelete}
        sx={{
          m: 1,
        }}
      />
      {filterData.map((data) => {
        return (
          <Chip
            key={data.id}
            label={data.title}
            variant="outlined"
            onClick={data.onClick}
            sx={{
              m: 1,
            }}
          />
        );
      })}
      {/* read */}
      <ModalWrapper>
        <Paper
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography variant="h5"> Filter</Typography>
            <IconButton>
              <CancelIcon />
            </IconButton>
          </Box>
          <div
            style={{
              border: "1px solid gray",
            }}
          ></div>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "20%",
                borderRight: "1px solid gray",
              }}
            >
              <List>
                {filterItemData.map((data) => {
                  return (
                    <ListItemButton
                      key={data.id}
                      onClick={() => setRightSideData(data)}
                    >
                      <ListItemText
                        sx={{
                          p: 1,
                          cursor: "pointer",
                        }}
                        primary={data.title}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Box>

            <Box
              sx={{
                width: "80%",
                pl: 2,
              }}
            >
              {rightSideData.type == "check" ? (
                <FormGroup>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {rightSideData.subTitle}
                  </FormLabel>
                  {rightSideData.data.map((data) => {
                    return (
                      <FormControlLabel
                        key={data.id}
                        control={<Checkbox defaultChecked />}
                        label={data.title}
                      />
                    );
                  })}
                </FormGroup>
              ) : (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {rightSideData.subTitle}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="abc"
                  >
                    {rightSideData.data.map((data) => {
                      return (
                        <FormControlLabel
                          key={data.id}
                          control={<Radio />}
                          label={data.title}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              )}
            </Box>
          </Box>
        </Paper>
      </ModalWrapper>
    </Box>
  );
};

export default FilterCard;

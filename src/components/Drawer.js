import React, { useContext, useState, useEffect } from "react";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import {
  FiltersContext,
  DispatchFiltersContext,
} from "../contexts/filters.context";

import useDebouncedState from "../hooks/useDebouncedState";

import useStyles from "../styles/DrawerStyles";

function Drawer({ handleDrawerClose }) {
  const [filters, setFilters] = useState(useContext(FiltersContext));
  const dispatchFilters = useContext(DispatchFiltersContext);

  const [debouncedFilters] = useDebouncedState(filters, 1000);
  console.log(filters);

  useEffect(() => {
    dispatchFilters({ type: "UPDATE", filters: debouncedFilters });
    console.log("dispatch");
  }, [debouncedFilters, dispatchFilters]);

  const handleSearch = (e) => {
    setFilters({ ...filters, term: e.target.value });
  };

  const handleCategoryChange = (e) => {
    if (e.target.name === "all") {
      setFilters({
        ...filters,
        categories: {
          all: true,
          programming: false,
          miscellaneous: false,
          dark: false,
          pun: false,
        },
      });
    } else {
      const updatedFilters = { ...filters };
      updatedFilters.categories[e.target.name] = e.target.checked;
      updatedFilters.categories.all = false;
      setFilters(updatedFilters);
    }
  };

  const handleBlacklistChange = (e) => {
    const updatedFilters = { ...filters };
    updatedFilters.blacklist[e.target.name] = e.target.checked;
    setFilters(updatedFilters);
  };

  const handleResetFilters = (e) => {
    setFilters({
      term: "",
      categories: {
        all: true,
        programming: false,
        miscellaneous: false,
        dark: false,
        pun: false,
      },
      blacklist: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
      },
    });
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.drawerHeader}>
          <Typography className={classes.filterText} variant="h4">
            Filters
          </Typography>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.chevronIcon}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={handleSearch}
          value={filters.term}
          placeholder="search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
      <Typography className={classes.subHeading} variant="h6">
        Categories
      </Typography>
      <List>
        <FormGroup className={classes.formGroup}>
          <FormControlLabel
            value="all"
            control={
              <Radio
                color="primary"
                checked={filters.categories.all}
                name="all"
                onChange={handleCategoryChange}
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.categories.programming}
                onChange={handleCategoryChange}
                name="programming"
                color="primary"
              />
            }
            label="Programming"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.categories.miscellaneous}
                onChange={handleCategoryChange}
                name="miscellaneous"
                color="primary"
              />
            }
            label="Miscellaneous"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.categories.dark}
                onChange={handleCategoryChange}
                name="dark"
                color="primary"
              />
            }
            label="Dark"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.categories.pun}
                onChange={handleCategoryChange}
                name="pun"
                color="primary"
              />
            }
            label="Pun"
          />
        </FormGroup>
      </List>
      <Divider />
      <Typography className={classes.subHeading} variant="h6">
        Flags to blacklist
      </Typography>
      <List>
        <FormGroup className={classes.formGroup}>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.blacklist.nsfw}
                onChange={handleBlacklistChange}
                name="nsfw"
                color="primary"
              />
            }
            label="NSFW"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.blacklist.religious}
                onChange={handleBlacklistChange}
                name="religious"
                color="primary"
              />
            }
            label="Religious"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.blacklist.political}
                onChange={handleBlacklistChange}
                name="political"
                color="primary"
              />
            }
            label="Political"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.blacklist.racist}
                onChange={handleBlacklistChange}
                name="racist"
                color="primary"
              />
            }
            label="Racist"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.blacklist.sexist}
                onChange={handleBlacklistChange}
                name="sexist"
                color="primary"
              />
            }
            label="Sexist"
          />
        </FormGroup>
      </List>
      <div className={classes.boxContainer}>
        <Button
          className={classes.resetButton}
          variant="contained"
          onClick={handleResetFilters}
        >
          Reset filters
        </Button>
      </div>
    </div>
  );
}

export default Drawer;

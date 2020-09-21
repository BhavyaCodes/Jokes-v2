import React, { useContext } from "react";

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
  CategoryContext,
  DispatchCategoryContext,
} from "../contexts/category.context";
import {
  BlacklistContext,
  DispatchBlacklistContext,
} from "../contexts/blacklist.context";
import {
  SearchContext,
  DispatchSearchContext,
} from "../contexts/search.context";

import useStyles from "../styles/HomeStyles";

function Drawer({ handleDrawerClose }) {
  const categories = useContext(CategoryContext);
  const dispatchCategory = useContext(DispatchCategoryContext);
  const flags = useContext(BlacklistContext);
  const dispatchBlacklist = useContext(DispatchBlacklistContext);
  const term = useContext(SearchContext);
  const dispatchSearch = useContext(DispatchSearchContext);

  const handleSearch = (e) => {
    dispatchSearch({ type: "UPDATE", term: e.target.value });
  };
  const handleCategoryChange = (e) => {
    if (e.target.name === "all") {
      dispatchCategory({ type: "ALL" });
    } else {
      dispatchCategory({ type: "TOGGLE_CHECKBOX", name: e.target.name });
    }
  };

  const handleBlacklistChange = (e) => {
    dispatchBlacklist({ type: "TOGGLE", name: e.target.name });
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
          value={term}
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
                checked={categories.all}
                name="all"
                onChange={handleCategoryChange}
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.programming}
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
                checked={categories.miscellaneous}
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
                checked={categories.dark}
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
                checked={categories.pun}
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
                checked={flags.nsfw}
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
                checked={flags.religious}
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
                checked={flags.political}
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
                checked={flags.racist}
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
                checked={flags.sexist}
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
          onClick={() => {
            dispatchCategory({ type: "RESET" });
            dispatchBlacklist({ type: "RESET" });
            dispatchSearch({ type: "RESET" });
          }}
        >
          Reset filters
        </Button>
      </div>
    </div>
  );
}

export default Drawer;

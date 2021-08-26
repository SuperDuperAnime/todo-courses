import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles} from "@material-ui/core";
import store from '../../../store/store';
import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "10px"
   
  },
}));


export const FavoriteFilterBtn = observer(() => {
  const classes = useStyles();
  
  const handleChange = (event: any) => {
    store.favoriteBtnFilter = event.target.value
    store.startSearch(store.textSearch)

  };

  // useEffect(() => {
  //   store.favoriteBtnFilter = "all"
  // }, [])



  return (
    <FormControl component="fieldset">
      <RadioGroup defaultValue={store.favoriteBtnFilter} className={classes.root} aria-label="gender" name="gender1" value = {store.favoriteBtnFilter} onChange={handleChange}>
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="anime" control={<Radio />} label="Anime" />
        <FormControlLabel value="character" control={<Radio />} label="Character" />
      </RadioGroup>
    </FormControl>
  );
})
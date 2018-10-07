import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <br />
        <br />
        <br />
        <InputLabel htmlFor="age-simple">Environment</InputLabel>
        <Select
            value={this.state.age}
            onChange={this.handleChange}
            displayEmpty
            name="age"
            className={classes.selectEmpty}
          >
            <MenuItem value="development">
              <em>DEV</em>
            </MenuItem>
            <MenuItem value={'development'}>DEV</MenuItem>
            <MenuItem value={'testing'}>QA</MenuItem>
            <MenuItem value={'testing2'}>QA2</MenuItem>
            <MenuItem value={'staging'}>STA</MenuItem>
          </Select>
      </div>
    )
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);

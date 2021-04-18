import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React, { useState, useEffect } from 'react';
import RocketIcon from '../RocketIcon';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
export default function MenuCustom() {
    const classes = useStyles();
    const [categories, setCategories] = useState();

    const url = "https://fakestoreapi.com/products/";
    useEffect(() => {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          setCategories(data.map(product => product.category));
        });
    }, []);
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <RocketIcon></RocketIcon>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
          <ShoppingCartIcon></ShoppingCartIcon>
            Categorías Productos
          </Button>
          <Menu {...bindMenu(popupState)}>
          {
            categories && categories.filter((product, pos)=>categories.indexOf(product) == pos).map(category => <MenuItem onClick={popupState.close}>{category}</MenuItem> )
          }
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

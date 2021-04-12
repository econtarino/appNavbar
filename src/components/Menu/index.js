import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import React from 'react';
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
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <RocketIcon></RocketIcon>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
          <ShoppingCartIcon></ShoppingCartIcon>
            Categorias Frutas
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Albaricoque</MenuItem>
            <MenuItem onClick={popupState.close}>Arándano</MenuItem>
            <MenuItem onClick={popupState.close}>Breva</MenuItem>
            <MenuItem onClick={popupState.close}>Cereza</MenuItem>
            <MenuItem onClick={popupState.close}>Ciruela</MenuItem>
            <MenuItem onClick={popupState.close}>Endrina</MenuItem>
            <MenuItem onClick={popupState.close}>Frambuesa</MenuItem>
            <MenuItem onClick={popupState.close}>Fresa</MenuItem>
            <MenuItem onClick={popupState.close}>Granada</MenuItem>
            <MenuItem onClick={popupState.close}>Grosella</MenuItem>
            <MenuItem onClick={popupState.close}>Lima</MenuItem>
            <MenuItem onClick={popupState.close}>Limón</MenuItem>
            <MenuItem onClick={popupState.close}>Mandarina</MenuItem>
            <MenuItem onClick={popupState.close}>Melocotón</MenuItem>
            <MenuItem onClick={popupState.close}>Melón</MenuItem>
            <MenuItem onClick={popupState.close}>Membrillo</MenuItem>
            <MenuItem onClick={popupState.close}>Naranja</MenuItem>
            <MenuItem onClick={popupState.close}>Níspero</MenuItem>
            <MenuItem onClick={popupState.close}>Pera</MenuItem>
            <MenuItem onClick={popupState.close}>Piña</MenuItem>
            <MenuItem onClick={popupState.close}>Plátano</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

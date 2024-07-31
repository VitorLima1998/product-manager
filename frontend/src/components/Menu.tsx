import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CreateProduct from './CreateProduct';
import ListProduct from './ListProduct';
import CreateCategory from './CreateCategory';
import ListCategory from './ListCategory';
import { Container } from '@mui/material';
import App from '../App';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(1);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  function showComponent() {
    switch (visible) {
      case 1:
        return <CreateProduct text={'Create Product'} />;
      case 2:
        return <ListProduct text={'List Products'} />;
      case 3:
        return <CreateCategory text={'Create Category'} />;
      case 4:
        return <ListCategory text={'List Categories'} />;
      default:
        return <App />;
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        {[
          'Create Product',
          'List Products',
          'Create Category',
          'List Categories',
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => {
              setVisible(++index);
              setOpen(false);
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AddIcon /> : <ListAltIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <Container maxWidth='md'>{showComponent()}</Container>
    </div>
  );
}

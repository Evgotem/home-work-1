import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function AlignItemsList(props) {

  return (
    <List sx={ { width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginBottom: 1 } }>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={ props.fullName } src="https://source.unsplash.com/50x50/?people"
          />
        </ListItemAvatar>
        <ListItemText
          primary={ props.name }
          secondary={
            <React.Fragment>
              { props.text }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}


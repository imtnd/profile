import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Link } from '@mui/material';

export type Speaking = {
    id: number;
    conference: string;
    date: string;
    title: string;
    url: string;
    image: string;
};

interface SpeakingProps {
  speakingList: Speaking[];
}

export const SpeakingList: React.FC<SpeakingProps> = ({ speakingList }) => {
    return (
        <List>
        {speakingList.map((speaking) => (
        <ListItem key={speaking.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={`Conference ${speaking.conference}`} src={speaking.image} />
        </ListItemAvatar>
        <ListItemText
          primary={speaking.conference}
          secondary={
            <>
              <Typography component="span" variant="body2" color="text.primary">
                Date: {speaking.date}
              </Typography>
              {' - '}
              Title: 
              { speaking.url != '' ? (
                <Link href={speaking.url} target="_blank" rel="noopener noreferrer">
                  { speaking.title }
                </Link>
              ) : ( speaking.title ) }
            </>
          }
        />
        </ListItem>
        ))}
        </List>
    );
};


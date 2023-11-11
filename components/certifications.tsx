import { List, ListItem, ListItemAvatar, Avatar, ListItemText, } from '@mui/material';

export type Certification = {
    id: number;
    name: string;
    image: string;
};

interface CertificationProps {
  certifications: Certification[];
}

export const CertificationList: React.FC<CertificationProps> = ({ certifications: certificationList }) => {
    return (
        <List>
          {certificationList.map((certification) => (
          <ListItem key={certification.id} >
          <ListItemAvatar>
            <Avatar src={certification.image} />
          </ListItemAvatar>
          <ListItemText
              primary={certification.name}
          />
          </ListItem>
          ))}
        </List>
    );
};


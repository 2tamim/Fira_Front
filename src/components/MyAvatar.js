// hooks
import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';
import { HOST_API } from '../config';



// ----------------------------------------------------------------------


export default function MyAvatar({ ...other }) {
  const { user } = useAuth();

  // Check if user is defined and has an avatar property
  if (!user || typeof user.avatar === 'undefined') {
    // Return a default or placeholder avatar or handle the absence of user data
    return (
      <Avatar alt="Default" color="default" {...other}>
        Default
      </Avatar>
    );
  }

  const AVATAR_URL = `${HOST_API}${user.avatar}`;

  return (
    <Avatar
      src={AVATAR_URL}
      alt={user.username}
      color="default" // Assuming you want to use default color if avatar is present
      {...other}
    >
      {createAvatar(user.username).name}
    </Avatar>
  );
}


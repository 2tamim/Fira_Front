import PropTypes from 'prop-types';
import { noCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// _mock_
import { _notifications } from '../../../_mock';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import MenuPopover from '../../../components/MenuPopover';
import { IconButtonAnimate } from '../../../components/animate';
import SvgIconStyle from '../../../components/SvgIconStyle';


// ----------------------------------------------------------------------

const notificationsCount = [
  {
    "notification_count": {
        "messages": 0,
        "events": 0,
        "mentions": 5
    }
}
]

const notificationsData = [
  {
    "count": 7756,
    "next": "https://kara.medad-art.ir/api/user/notification/?page=2",
    "previous": null,
    "results": [
        {
            "id": 153944,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=128703",
            "messages": "????? ??? ????? ?? ????? 1402/11/29 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-02-19T19:23:22.070069",
            "created": "2024-02-19T19:23:22.071077",
            "updated": "2024-02-20T16:24:52.808827",
            "notif_type": 2,
            "seen": false,
            "user": 2
        },
        {
            "id": 152953,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=127960",
            "messages": "????? ??? ????? ?? ????? 1402/11/23 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-02-13T14:39:42.897316",
            "created": "2024-02-13T14:39:42.898288",
            "updated": "2024-02-20T16:24:51.966813",
            "notif_type": 2,
            "seen": true,
            "user": 2
        },
        {
            "id": 152603,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=127757",
            "messages": "????? ??? ????? ?? ????? 1402/11/18 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-02-07T19:26:37.201419",
            "created": "2024-02-07T19:26:37.202407",
            "updated": "2024-02-20T16:24:50.760886",
            "notif_type": 2,
            "seen": false,
            "user": 2
        },
        {
            "id": 152154,
            "title": "????? ????? ????",
            "link": "/report/list/?r_id=127450",
            "messages": "???? ?????? ?? ????? 1402/11/16 ????? ????? ???? ????. ",
            "closed": true,
            "displaytime": "2024-02-07T15:08:41.026809",
            "created": "2024-02-05T15:08:41.128824",
            "updated": "2024-02-20T16:24:49.868857",
            "notif_type": 2,
            "seen": false,
            "user": 2
        },
        {
            "id": 151269,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=126680",
            "messages": "????? ??? ????? ?? ????? 1402/11/4 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-01-27T07:55:28.882719",
            "created": "2024-01-27T07:55:28.883715",
            "updated": "2024-02-20T16:24:48.751877",
            "notif_type": 2,
            "seen": true,
            "user": 2
        },
        {
            "id": 151268,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=126507",
            "messages": "????? ??? ????? ?? ????? 1402/11/3 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-01-27T07:48:11.673018",
            "created": "2024-01-27T07:48:11.673977",
            "updated": "2024-02-20T16:24:47.911889",
            "notif_type": 2,
            "seen": false,
            "user": 2
        },
        {
            "id": 150944,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=126322",
            "messages": "????? ????? ???? ?? ????? 1402/11/2 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-01-23T09:33:13.800666",
            "created": "2024-01-23T09:33:13.800666",
            "updated": "2024-01-24T07:22:58.225714",
            "notif_type": 2,
            "seen": false,
            "user": 2
        },
        {
            "id": 150943,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=126412",
            "messages": "????? ???? ????? ??? ?? ????? 1402/11/2 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-01-23T09:29:09.721123",
            "created": "2024-01-23T09:29:09.722121",
            "updated": "2024-01-24T07:22:57.300048",
            "notif_type": 2,
            "seen": false,
            "user": 2
        },
        {
            "id": 150654,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=126143",
            "messages": "????? ??? ????? ?? ????? 1402/10/30 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-01-21T09:14:44.691664",
            "created": "2024-01-21T09:14:44.692656",
            "updated": "2024-01-24T07:22:55.904079",
            "notif_type": 2,
            "seen": false,
            "user": 2
        },
        {
            "id": 150653,
            "title": "?????? ????? ?????",
            "link": "/report/list/?r_id=125827",
            "messages": "????? ????? ???? ?? ????? 1402/10/28 ?? ??? ?? ?????? ?????? ??. ",
            "closed": true,
            "displaytime": "2024-01-21T09:12:09.843790",
            "created": "2024-01-21T09:12:09.844879",
            "updated": "2024-01-24T07:22:52.124157",
            "notif_type": 2,
            "seen": false,
            "user": 2
        }
    ]
}
]


export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState(_notifications);
  const { messages, events, mentions } = notificationsCount[0].notification_count;
  const totalUnRead = messages + events + mentions;
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButtonAnimate color={open ? 'primary' : 'default'} onClick={handleOpen} sx={{ width: 40, height: 40 }}>
        <Badge badgeContent={totalUnRead} color="error">
          <img src={'/icons/kara/ic_notification.svg'} alt='mySvgImage' />
        </Badge>
      </IconButtonAnimate>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{ width: 360, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">اعلانات</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              شما {totalUnRead} پیام خوانده نشده دارید
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButtonAnimate color="primary" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" width={20} height={20} />
              </IconButtonAnimate>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                جدید
              </ListSubheader>
            }
          >
            {notificationsData[0].results
              .filter((notification) => !notification.seen)
              .map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                از قبل
              </ListSubheader>
            }
          >
            {notificationsData[0].results
              .filter((notification) => notification.seen)
              .map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
              ))}
          </List>
        </Scrollbar>


        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            مشاهده همه
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};

function NotificationItem({ notification }) {
  const { messages } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.isUnRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        {/* <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar> */}
      </ListItemAvatar>
      <ListItemText
        primary={messages}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
          >
            <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {fToNow(notification.displaytime)} {/* Updated line */}
          </Typography>
        }
      />
    </ListItemButton>
  );
}


// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {noCase(notification.description || '')}
      </Typography>
    </Typography>
  );

  if (notification.type === 'order_placed') {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === 'order_shipped') {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === 'mail') {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === 'chat_message') {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="https://minimal-assets-api.vercel.app/assets/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar} /> : null,
    title,
  };
}

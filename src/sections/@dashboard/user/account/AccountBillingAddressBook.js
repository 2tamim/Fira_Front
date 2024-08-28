import PropTypes from 'prop-types';
// @mui
import { Box, Card, Button, Typography, Stack, Paper } from '@mui/material';
// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

AccountBillingAddressBook.propTypes = {
  addressBook: PropTypes.array,
};

export default function AccountBillingAddressBook({ addressBook, title }) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3} alignItems="flex-start">
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>

        {addressBook.map((regulation) => (
          <Paper
            key={regulation.id}
            sx={{
              p: 3,
              width: 1,
              bgcolor: 'background.neutral',
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {regulation.title}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div" dangerouslySetInnerHTML={{ __html: regulation.content }} />
              {/* {`${address.street}, ${address.city}, ${address.state}, ${address.country} ${address.zipCode}`} */}
            </Typography>

            {/* <Typography variant="body2" gutterBottom>
              <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
                Phone: &nbsp;
              </Typography>
              {address.phone}
            </Typography> */}

            {/* <Box sx={{ mt: 1 }}>
              <Button
                color="error"
                size="small"
                startIcon={<Iconify icon={'eva:trash-2-outline'} />}
                onClick={() => {}}
                sx={{ mr: 1 }}
              >
                Delete
              </Button>
              <Button size="small" startIcon={<Iconify icon={'eva:edit-fill'} />} onClick={() => {}}>
                Edit
              </Button>
            </Box> */}
          </Paper>
        ))}
{/* 
        <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />}>
          Add new address
        </Button> */}
      </Stack>
    </Card>
  );
}

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Box, Grid, Card, Button, Typography, Stack, Skeleton } from '@mui/material';
import AccountBillingAddressBook from './AccountBillingAddressBook';
import AccountBillingPaymentMethod from './AccountBillingPaymentMethod';
import AccountBillingInvoiceHistory from './AccountBillingInvoiceHistory';
import { RegulationIllustration } from '../../../../assets';
import { getAllPublicRegulation } from '../../../../services/regulation.service';

AccountBilling.propTypes = {
  cards: PropTypes.array,
  invoices: PropTypes.array,
};

export default function AccountBilling({ cards, invoices }) {
  const [open, setOpen] = useState(false);
  const [addressBook, setAddressBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call delay with setTimeout
    const fetchData = async () => {
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Fetch data when the component mounts
        const data = await getAllPublicRegulation();
        // Set the data as the addressBook state
        setAddressBook(data);
      } catch (error) {
        // Handle errors from fetchData function
        console.error('Error in fetchData:', error);
      } finally {
        // Set loading to false when the data fetching is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          {loading ? (
            // Render Skeleton while data is loading
            <Skeleton variant="rectangular" height={150} animation="wave" />
          ) : (
            // Render your actual content when data is loaded
            <AccountBillingAddressBook title={"قوانین گروهی"} addressBook={addressBook} />
          )}
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        {loading ? (
          // Render Skeleton for the sidebar content while data is loading
          <Skeleton variant="rectangular" height={400} animation="wave" />
        ) : (
          // Render your actual sidebar content when data is loaded
          <RegulationIllustration />
        )}
      </Grid>
    </Grid>
  );
}

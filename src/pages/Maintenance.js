import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
//
import { MaintenanceIllustration } from '../assets';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Maintenance() {
  return (
    <Page title="Maintenance" sx={{ height: 1 }}>
      <RootStyle>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            سامانه در حال تکمیل شدن است
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>از صبر و شکیبایی شما سپاس گزاریم</Typography>

          <MaintenanceIllustration sx={{ my: 10, height: 500 }} />

          <Button variant="contained" size="large" component={RouterLink} to="/">
            ارجاع به ورژن قدیم
          </Button>
        </Container>
      </RootStyle>
    </Page>
  );
}

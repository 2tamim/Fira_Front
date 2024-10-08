import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// @mui
import { Box, Button, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { SeverErrorIllustration } from '../assets';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <Page title="500 Internal Server Error" sx={{ height: 1 }}>
      <RootStyle>
        <Container>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <Typography variant="h3" paragraph>
              مشکل از سرور داخلی
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>مشکلی پیش آمده، لطفا مجدد تلاش کنید</Typography>

            <SeverErrorIllustration sx={{ height: 500, my: { xs: 5, sm: 10 } }} />

            <Button to="/" size="large" variant="contained" component={RouterLink}>
              برگشت به صفحه اصلی
            </Button>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}

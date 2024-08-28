import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography, Grid, Paper  } from '@mui/material';
// routes
import { PATH_AUTH } from '../../routes/paths';
// hooks
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import { LoginForm } from '../../sections/auth/login';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuth();

  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <Grid container spacing={2}>
      <Grid item xs={4}>
      <RootStyle>
        
        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  ورود به سامانه کارا 2
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>کارا در خدمت شماست</Typography>
              </Box>

              <Tooltip title={capitalCase(method)} placement="right">
                <>
                  <Logo />
                </>
              </Tooltip>
            </Stack>

            {/* <Alert severity="info" sx={{ mb: 3 }}>
              برای تست : <strong>demo@minimals.cc</strong> / کلمه عبور :<strong> demo1234</strong>
            </Alert> */}

            <LoginForm />

              <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              ارائه شده توسط تیم صیاد شیرازی&nbsp;
              {/* <Link underline="always" color="text.primary" href="#">
                Terms of Service
              </Link>
              and
              <Link underline="always" color="text.primary" href="#">
                Privacy Policy
              </Link>
              . */}
              2.0.0
            </Typography>

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                حساب کاربری ندارید؟ {' '}
                <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                شروع کنید
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>

          <HeaderStyle>
            {smUp && (
              <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                حساب کاربری ندارید؟  {''}
                <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
                شروع کنید
                </Link>
              </Typography>
            )}
          </HeaderStyle>

      </RootStyle>
      </Grid>
        <Grid item xs={8}>
          <img src="/image/login.png" alt="Login" />
        </Grid>
      </Grid>
    </Page>
  );
}

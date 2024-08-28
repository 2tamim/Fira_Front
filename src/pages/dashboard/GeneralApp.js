// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Box } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';

import {
  EcommerceSaleByGender,
  EcommerceSalesOverview,
} from '../../sections/@dashboard/general/e-commerce';

import {
  AnalyticsTasks,
  AnalyticsNewsUpdate,
  AnalyticsOrderTimeline,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsTrafficBySite,
  AnalyticsWidgetSummary,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates,
} from '../../sections/@dashboard/general/analytics';

import {
  BookingDetails,
  BookingBookedRoom,
  BookingTotalIncomes,
  BookingRoomAvailable,
  BookingNewestBooking,
  BookingWidgetSummary,
  BookingCheckInWidgets,
  BookingCustomerReviews,
  BookingReservationStats,
  BookingEmployee,
} from '../../sections/@dashboard/general/booking';

import {
  BankingContacts,
  BankingWidgetSummary,
  BankingInviteFriends,
  BankingQuickTransfer,
  BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from '../../sections/@dashboard/general/banking';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          
        {/* کارکرد */}
        <Grid item xs={12} md={8} lg={8}>
            <BankingExpensesCategories />
          </Grid>

          
          {/* امتیاز آخرین کار تمام شده */}
          <Grid item xs={12} md={6} lg={4}>
             {/* تردد پرسنل */}
            <BankingQuickTransfer />
            <AppTopRelated />
          </Grid>
          
          {/* گزارش ها */}
          <Grid item xs={12} md={8}>
            <BookingEmployee />
          </Grid>

          {/* درخواست ها */}
          <Grid item xs={12} md={4}>
            <BookingCustomerReviews />
          </Grid>

          {/* مصرف اینترنت */}
          <Grid item xs={12} lg={4}>
            <EcommerceSaleByGender />
          </Grid>

          {/* خلاصه حضور */}
          <Grid item xs={12} md={4} lg={4}>
            <AppCurrentDownload />
          </Grid>
          
          {/* منابع مصرفی  */}
          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          {/* برترین های ماه */}
          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid>

          {/* پیشروی پروژه ها */}
          <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview />
          </Grid>

          {/* یادداشت ها */}
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsTasks />
          </Grid>

          {/* کیفیت عملکرد */}
          <Grid item xs={12} md={6} lg={4}>
            <BankingWidgetSummary
                  // title="کیفیت عملکرد"
                  icon={'eva:diagonal-arrow-left-down-fill'}
                  percent={2.6}
                  total={18765}
                  chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
                />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}

import sumBy from 'lodash/sumBy';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Tab,
  Tabs,
  Card,
  Table,
  Stack,
  Switch,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../components/table';
// sections
import InvoiceAnalytic from '../../sections/@dashboard/invoice/InvoiceAnalytic';
import { InvoiceTableRow, InvoiceTableToolbar } from '../../sections/@dashboard/invoice/list';
import { MailCompose } from '../../sections/@dashboard/mail';

// ----------------------------------------------------------------------

const SERVICE_OPTIONS = [
  'همه',
  'پشتیبانی اداری',
  'درخواست VPS',
  'پشتیبانی فنی',
  'درخواست دورکاری',
  'درخواست جلسه',
];

const TABLE_HEAD = [
  { id: 'invoiceNumber', label: 'عنوان', align: 'left' },
  { id: 'createDate', label: 'مرحله', align: 'left' },
  { id: 'dueDate', label: 'تاریخ ثبت', align: 'left' },
  { id: 'price', label: 'نوع درخواست', align: 'center', width: 140 },
  { id: 'sent', label: 'مسئول اجرا', align: 'center', width: 140 },
  { id: 'status', label: 'وضعیت', align: 'left' },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function InvoiceList() {
  const theme = useTheme();
  const { themeStretch } = useSettings();
  const navigate = useNavigate();

  const [openCompose, setOpenCompose] = useState(false);

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState([]);

  const [filterName, setFilterName] = useState('');
  const [filterService, setFilterService] = useState('all');
  const [filterStartDate, setFilterStartDate] = useState(null);
  const [filterEndDate, setFilterEndDate] = useState(null);

  const { currentTab: filterStatus, onChangeTab: onFilterStatus } = useTabs('all');

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterService = (event) => {
    setFilterService(event.target.value);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = requestsJSON.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = requestsJSON.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const handleEditRow = (id) => {
    navigate(PATH_DASHBOARD.invoice.edit(id));
  };

  const handleViewRow = (id) => {
    navigate(PATH_DASHBOARD.invoice.view(id));
  };

  const handleOpenCompose = () => {
    setOpenCompose(true);
  };

  const requestsJSON = [
    {
      id: 1,
      name:'aaa',
      invoiceNumber: 'گواهی اشتغال به تحصیل',
      createDate: '2023-01-01T12:00:00Z',
      dueDate: '2023-02-01T12:00:00Z',
      typeRequest: 'پشتیبانی اداری',
      sent: {
        id:'1',
        name:'صادق طاهریان',
        group:'حبیب'
      },
      status: 'paid',
      steps: ['Select campaign settings', 'Create an ad group', 'Create an ad','Create an ad','Create an ad'],
    },
    {
      id: 2,
      name:'aaa',
      invoiceNumber: 'گواهی اشتغال به تحصیل',
      createDate: '2023-01-01T12:00:00Z',
      dueDate: '2023-02-01T12:00:00Z',
      typeRequest: 'پشتیبانی اداری',
      sent: {
        id:'1',
        name:'صادق طاهریان',
        group:'حبیب'
      },
      status: 'paid',
      steps: ['Select campaign settings', 'Create an ad group'],
    },
    {
      id: 3,
      name:'aaa',
      invoiceNumber: 'گواهی اشتغال به تحصیل',
      createDate: '2023-01-01T12:00:00Z',
      dueDate: '2023-02-01T12:00:00Z',
      typeRequest: 'پشتیبانی اداری',
      sent: {
        id:'1',
        name:'صادق طاهریان',
        group:'حبیب'
      },
      status: 'paid',
      steps: ['Select campaign settings', 'Create an ad group', 'Create an ad'],
    },
    {
      id: 4,
      name:'aaa',
      invoiceNumber: 'گواهی اشتغال به تحصیل',
      createDate: '2023-01-01T12:00:00Z',
      dueDate: '2023-02-01T12:00:00Z',
      typeRequest: 'پشتیبانی اداری',
      sent: {
        id:'1',
        name:'صادق طاهریان',
        group:'حبیب'
      },
      status: 'overdue',
      steps: ['Select campaign settings', 'Create an ad group', 'Create an ad','Create an ad','Create an ad'],
    },
    {
      id: 5,
      name:'aaa',
      invoiceNumber: 'گواهی اشتغال به تحصیل',
      createDate: '2023-01-01T12:00:00Z',
      dueDate: '2023-02-01T12:00:00Z',
      typeRequest: 'پشتیبانی اداری',
      sent: {
        id:'1',
        name:'صادق طاهریان',
        group:'حبیب'
      },
      status: 'paid',
      steps: ['Select campaign settings', 'Create an ad group'],
    },
    {
      id: 6,
      name:'aaa',
      invoiceNumber: 'گواهی اشتغال به تحصیل',
      createDate: '2023-01-01T12:00:00Z',
      dueDate: '2023-02-01T12:00:00Z',
      typeRequest: 'پشتیبانی اداری',
      sent: {
        id:'1',
        name:'صادق طاهریان',
        group:'حبیب'
      },
      status: 'unpaid',
      steps: ['Select campaign settings', 'Create an ad group', 'Create an ad','Create an ad'],
    },
  ];

  const dataFiltered = applySortFilter({
    requestsJSON: tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterService,
    filterStatus,
    filterStartDate,
    filterEndDate,
  });

  const denseHeight = dense ? 56 : 76;

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterStatus) ||
    (!dataFiltered.length && !!filterService) ||
    (!dataFiltered.length && !!filterEndDate) ||
    (!dataFiltered.length && !!filterStartDate);

  const getLengthByStatus = (status) => requestsJSON.filter((item) => item.status === status).length;

  const getTotalPriceByStatus = (status) =>
    sumBy(
      requestsJSON.filter((item) => item.status === status),
      'totalPrice'
    );

  const getPercentByStatus = (status) => (getLengthByStatus(status) / requestsJSON.length) * 100;

  const TABS = [
    { value: 'all', label: 'همه', color: 'info', count: requestsJSON.length },
    { value: 'paid', label: 'انجام شده', color: 'success', count: getLengthByStatus('paid') },
    { value: 'unpaid', label: 'انجام نشده', color: 'warning', count: getLengthByStatus('unpaid') },
    { value: 'overdue', label: 'رد شده', color: 'error', count: getLengthByStatus('overdue') },
    { value: 'draft', label: 'مشاهده نشده', color: 'default', count: getLengthByStatus('draft') },
  ];

  return (
    <Page title="درخواست">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="درخواست ها"
          links={[
            { name: 'داشبورد', href: PATH_DASHBOARD.root },
            { name: 'درخواست', href: PATH_DASHBOARD.invoice.root },
          ]}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon={'eva:plus-fill'} />}
              onClick={handleOpenCompose}
            >
              درخواست
            </Button>
          }
        />

        <Card>
          <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={onFilterStatus}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                value={tab.value}
                label={
                  <Stack spacing={1} direction="row" alignItems="center">
                    <div>{tab.label}</div> <Label color={tab.color}> {tab.count} </Label>
                  </Stack>
                }
              />
            ))}
          </Tabs>

          <Divider />

          <InvoiceTableToolbar
            filterName={filterName}
            filterService={filterService}
            filterStartDate={filterStartDate}
            filterEndDate={filterEndDate}
            onFilterName={handleFilterName}
            onFilterService={handleFilterService}
            onFilterStartDate={(newValue) => {
              setFilterStartDate(newValue);
            }}
            onFilterEndDate={(newValue) => {
              setFilterEndDate(newValue);
            }}
            optionsService={SERVICE_OPTIONS}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={requestsJSON.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      requestsJSON.map((row) => row.id)
                    )
                  }
                  actions={
                    <Stack spacing={1} direction="row">
                      <Tooltip title="Sent">
                        <IconButton color="primary">
                          <Iconify icon={'ic:round-send'} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Download">
                        <IconButton color="primary">
                          <Iconify icon={'eva:download-outline'} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Print">
                        <IconButton color="primary">
                          <Iconify icon={'eva:printer-fill'} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Delete">
                        <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                          <Iconify icon={'eva:trash-2-outline'} />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  }
                />
              )}

              <Table size={dense ? 'small' : 'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={requestsJSON.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      requestsJSON.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {requestsJSON.map((row) => (
                    <InvoiceTableRow
                      key={row.id}
                      row={row}
                      selected={selected.includes(row.id)}
                      onSelectRow={() => onSelectRow(row.id)}
                      onViewRow={() => handleViewRow(row.id)}
                      onEditRow={() => handleEditRow(row.id)}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                    />
                  ))}

                  <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, requestsJSON.length)} />

                  {/* <TableNoData isNotFound={isNotFound} /> */}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataFiltered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />

            <FormControlLabel
              control={<Switch checked={dense} onChange={onChangeDense} />}
              label="متراکم"
              sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
            />
          </Box>

          <MailCompose isOpenCompose={openCompose} onCloseCompose={() => setOpenCompose(false)} />
        </Card>
      </Container>
    </Page>
  );
}


// ----------------------------------------------------------------------

function applySortFilter({
  requestsJSON,
  comparator,
  filterName,
  filterStatus,
  filterService,
  filterStartDate,
  filterEndDate,
}) {
  const stabilizedThis = requestsJSON.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  requestsJSON = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    requestsJSON = requestsJSON.filter(
      (item) =>
        item.invoiceNumber.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.invoiceTo.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    requestsJSON = requestsJSON.filter((item) => item.status === filterStatus);
  }

  if (filterService !== 'all') {
    requestsJSON = requestsJSON.filter((item) => item.items.some((c) => c.service === filterService));
  }

  if (filterStartDate && filterEndDate) {
    requestsJSON = requestsJSON.filter(
      (item) =>
        item.createDate.getTime() >= filterStartDate.getTime() && item.createDate.getTime() <= filterEndDate.getTime()
    );
  }

  return requestsJSON;
}

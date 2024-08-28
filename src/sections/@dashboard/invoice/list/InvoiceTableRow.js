import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { TableRow, TableCell, Typography, Stack, Box, Avatar, CardHeader } from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
import createAvatar from '../../../../utils/createAvatar';
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import { TableMoreMenu } from '../../../../components/table';
import InvoiceDetails from '../../../../pages/dashboard/InvoiceDetails';
import InvoiceStepper from './InvoiceStepper';

// ----------------------------------------------------------------------

InvoiceTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function InvoiceTableRow({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  const { sent, invoiceNumber, createDate, dueDate, status, invoiceTo, typeRequest, steps } = row;

  const [openDetails, setOpenDetails] = useState(false);


  const handleOpenDetails = () => {
    setOpenDetails(true);
  };
  
  const handleCloseDetails = useCallback(() => {
    setOpenDetails(false);
  }, []);

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <>
      <TableRow hover selected={selected} onClick={handleOpenDetails}>
      <TableCell padding="checkbox">
        {/* <Checkbox checked={selected} onClick={onSelectRow} /> */}
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <Avatar alt={invoiceTo.name} color={createAvatar(invoiceTo.name).color} sx={{ mr: 2 }}>
          {createAvatar(invoiceTo.name).name}
        </Avatar> */}

        <Stack>
          <Typography variant="subtitle2" noWrap>
            {/* {invoiceTo.name} */}
          </Typography>

          {/* <Link noWrap variant="body2" onClick={onViewRow} sx={{ color: 'text.disabled', cursor: 'pointer' }}> */}
            {invoiceNumber}
          {/* </Link> */}
        </Stack>
      </TableCell>

      {/* <TableCell align="left">{fDate(createDate)}</TableCell> */}

      <TableCell align="left">
        <InvoiceStepper steps={steps} />
      </TableCell>

      <TableCell align="left">{fDate(dueDate)}</TableCell>

      <TableCell align="center">{typeRequest}</TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize', minHeight:'20px' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
                alt="صادق طاهریان"
                src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg"
                sx={{ width: 24, height: 24 }}
              />
        <Box sx={{ flexGrow: 1, minWidth: '80px' }}>
          <Typography variant="caption">{sent.name}</Typography>
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
            }}
          >
            {sent.group}
            {/* {fShortenNumber(author.favourite)} */}
          </Typography>
        </Box>
{/* 
        <IconWrapperStyle
          sx={{
            ...(index === 1 && {
              color: 'info.main',
              bgcolor: (theme) => alpha(theme.palette.info.main, 0.08),
            }),
            ...(index === 2 && {
              color: 'error.main',
              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            }),
          }}
        >
          <Iconify icon={'ant-design:trophy-filled'} width={20} height={20} />
        </IconWrapperStyle> */}
        </Stack>
      </TableCell>

      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (status === 'paid' && 'success') ||
            (status === 'unpaid' && 'warning') ||
            (status === 'overdue' && 'error') ||
            'default'
          }
          sx={{ textTransform: 'capitalize' }}
        >
          {
            (status === 'paid' && 'انجام شده') ||
            (status === 'unpaid' && 'انجام نشده') ||
            (status === 'overdue' && 'رد شده') ||
            'مشاهده نشده'
          }
        </Label>
      </TableCell>

      <TableCell align="right">
        {/* <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>

              <MenuItem
                onClick={() => {
                  onViewRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:eye-fill'} />
                View
              </MenuItem>

              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Edit
              </MenuItem>
            </>
          }
        /> */}
      </TableCell>
      </TableRow>

      <InvoiceDetails card={row} isOpen={openDetails} onClose={handleCloseDetails} />
    </>
  );
}

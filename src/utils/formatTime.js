import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}


export function fToNow(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    // If the date is invalid, return a fallback or handle it accordingly
    return 'Invalid Date';
  }

  const now = new Date();
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 24) {
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  }

  if (hours >= 1) {
    return `${hours}h ago`;
  }

  if (minutes >= 1) {
    return `${minutes}m ago`;
  }

  return 'Just now';
}



import { useEffect, useState } from 'react';
// @mui
import { Stack, Button, Typography } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
// routes
import { PATH_DOCS } from '../../../routes/paths';
// assets
import { DocIllustration } from '../../../assets';
import { getAllFeedback, markFeedbackAsSeen } from '../../../services/performance.service';

// ----------------------------------------------------------------------

export default function NavbarDocs() {
  const { user } = useAuth();
  const [lastUnseenFeedback, setLastUnseenFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAcknowledgment = async (event) => {
    event.preventDefault();

    if (lastUnseenFeedback) {
      try {
        await markFeedbackAsSeen(lastUnseenFeedback.id);
        const updatedData = await getAllFeedback();
        setLastUnseenFeedback(updatedData?.results?.filter(feedback => !feedback.seen)[0] || null);
      } catch (error) {
        console.error('Error updating feedback seen status:', error.message || error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllFeedback();
        const unseenFeedback = data?.results?.filter(feedback => !feedback.seen);
        const lastUnseen = unseenFeedback?.length > 0 ? unseenFeedback[0] : null;
        setLastUnseenFeedback(lastUnseen);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message || error}</p>;
  }

  // Conditionally render NavbarDocs only if lastUnseenFeedback has a value
  return lastUnseenFeedback ? (
    <Stack
      spacing={3}
      sx={{ pb: 5, mt: 10, width: 1, textAlign: 'center', display: 'block', position: 'relative' }}
    >
      <div style={{ top: 0, left: 0, width: '100%' }}>
        <Typography gutterBottom variant="subtitle1">
          {`${lastUnseenFeedback?.value || 0} روز مرخصی تشویقی`}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {lastUnseenFeedback?.description || 'بابت هیچ پروژه ای'}
        </Typography>
      </div>

      <div style={{ marginBottom: -206 }}>
        <Button
          href={PATH_DOCS}
          target="_blank"
          rel="noopener"
          variant="text"
          onClick={handleAcknowledgment}
          sx={{
            width: '185px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: 'white',
            '&:hover': {
              opacity: 0.5,
            },
          }}
        >
          متوجه شدم
        </Button>
      </div>

      <div style={{ marginTop: -145 }}>
        <DocIllustration sx={{ width: 1 }} />
      </div>
    </Stack>
  ) : null;
}



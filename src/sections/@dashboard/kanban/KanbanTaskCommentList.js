import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Stack, Avatar, Typography } from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// components
import Image from '../../../components/Image';
import LightboxModal from '../../../components/LightboxModal';

// ----------------------------------------------------------------------

KanbanTaskCommentList.propTypes = {
  comments: PropTypes.array,
};

export default function KanbanTaskCommentList({ comments }) {
  // console.log(comments)
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const imagesLightbox = comments.filter((comment) => comment.messageType === 'image').map((item) => item.message);

  const handleOpenLightbox = (url) => {
    const selectedImage = imagesLightbox.findIndex((index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <>
      <Stack spacing={3} sx={{ py: 3, px: 2.5, bgcolor: 'background.neutral' }}>
        {comments.map((comment) => (
          <Stack key={comment.pk} direction="row" spacing={2}>
            {comment.avatar && <Avatar src={comment.avatar} sx={{ width: 32, height: 32 }} />}
            <div>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle2"> {comment.user}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fToNow(comment.created)}
                </Typography>
              </Stack>

              {comment.messageType === 'image' ? (
                <Image
                  src={comment.message}
                  onClick={() => handleOpenLightbox(comment.message)}
                  sx={{ mt: 2, borderRadius: 1 }}
                />
              ) : (
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  {comment.content}
                </Typography>
              )}
            </div>
          </Stack>
        ))}
      </Stack>

      <LightboxModal
        images={imagesLightbox}
        mainSrc={imagesLightbox[selectedImage]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => setOpenLightbox(false)}
      />
    </>
  );
}

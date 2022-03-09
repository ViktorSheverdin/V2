import { Box, Dialog, DialogContent } from '@mui/material';
import React from 'react';

const ProjectDetailsModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth='xs' scroll='body'>
      <DialogContent>
        <Box>Modal</Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;

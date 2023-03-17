import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import './style.css';

// import Typography from '@mui/material/Typography';
// import SignIn from './SignIn';

import Modal from '@mui/material/Modal';
import Map1 from '../Navbar/Map1';

const style = {
  

  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  
};

export default function Mapmodal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=''>
       <Button className='btnUp' onClick={handleOpen}  variant="outline-info">  <a href="/Map1" className=''><i/>Map</a></Button>{' '}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div><Map1/></div>
        </Box>
      </Modal>
    </div>
  );
}

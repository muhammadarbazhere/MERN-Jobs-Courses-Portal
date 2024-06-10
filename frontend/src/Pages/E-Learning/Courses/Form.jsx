import React, { useState } from 'react';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Form = ({ handleClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = () => {
    // e.preventDefault();

    console.log({ fullName, email, mobile });
    setOpenSnackbar(true);
    setFullName('');
    setEmail('');
    setMobile('');

    // Automatically close the form after showing the Snackbar message
    setTimeout(() => {
      setOpenSnackbar(false);
      handleClose();
    }, 2000); // 4000 milliseconds, same as autoHideDuration of Snackbar
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white px-8 pb-8 pt-4 rounded-lg relative">
        <IconButton
          onClick={handleClose}
          className="absolute top-0 right-2 "
          aria-label="close"
        >
          <CloseIcon className='border-2 border-gray-500 rounded-full'/>
        </IconButton>
        <h2 className="text-2xl  font-[Chivo] font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center">
          Seize the Opportunity <br />
          <span className='text-lg  font-[Comfortaa]'> Complete Your Enrollment Now </span>
        </h2>  
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-[Chivo] font-semibold">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border-gray-300 border-solid border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-[Chivo] font-semibold">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 border-solid border rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-[Chivo] font-semibold">
              Enter Mobile no. *
            </label>
            <div className="flex">
              <span className="text-gray-500 flex items-center ">+92</span>
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="flex-1 border-gray-300 border-solid border rounded-md px-4 py-2 mt-1 ml-2 focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold">
              Submit
            </button>
          </div>
        </form>


        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
          message="Form submitted successfully!"
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />

        
      </div>
    </div>
  );
};

export default Form;

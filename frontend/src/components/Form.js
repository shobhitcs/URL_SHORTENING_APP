import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, LinearProgress, Alert  } from '@mui/material';
import { useGenUrl } from '../hooks/useGenUrl';
const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const modalContentStyle = {
    backgroundColor: '#303030',
    borderRadius: '4px',
    padding: '16px',
    position: 'relative',
    maxWidth: '95vw',
};
const typographyStyle = {
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderRadius: '4px',
    padding: '12px 9px',

}
const apiUrl = process.env.REACT_APP_API_URL;
const Form = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { genurl, isLoading, error } = useGenUrl();

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const [open, setOpen] = useState(false);
    const [modalvalue, setModalValue] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);

    const handleOpen = (param) => {
        setModalValue(param);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCopySuccess(false);
        setSearchQuery('');
    };

    const handleCopyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(modalvalue); 
            setCopySuccess(true);
        } catch (error) {
            console.error('Failed to copy to clipboard:', error);
            setCopySuccess(false);
        }
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        const short = await genurl(searchQuery);
        if (short) {
            handleOpen(apiUrl +'/' + short);
        }
        
    };

    return (
        <div className="form">
            <form onSubmit={handleSearchSubmit}>
                <TextField
                    autoFocus={true}
                    variant="outlined"
                    value={searchQuery}
                    placeholder='https://www.google.com/'
                    required={true}
                    fullWidth={true}
                    onChange={handleSearchChange}
                    sx={{
                        backgroundColor: '#EDEDED',
                        borderColor: 'black', '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'black'
                        }
                    }}
                />
                {isLoading && <LinearProgress color='secondary' />}
                <Button type="submit" fullWidth variant="contained" color="secondary" sx={{ marginTop: '16px'}}>
                    Generate short URL
                </Button>

            </form>
            {error && <Alert severity="error" sx={{border: '2px solid #BB6464', marginTop: '10px'}}>Internal Service Error !</Alert>}


            <Modal open={open} onClose={handleClose} style={modalStyle}>
                <Box style={modalContentStyle}>
                    <Typography variant="body1" mb={2} sx={typographyStyle}>
                        <a className='modalurl' href={modalvalue}>{modalvalue}</a>
                    </Typography>
                    {copySuccess && (
                        <Alert severity="success">Copied to ClipBoard!</Alert>
                    )}
                    <div className="modal-button">
                        <Button variant="contained" onClick={handleClose} sx={{
                            backgroundColor: '#C65D7B', marginRight: '25px', '&:hover': {
                                backgroundColor: '#BB6464',
                            },
                        }} >
                            Close
                        </Button>
                        <Button variant="contained" onClick={handleCopyToClipboard} sx={{
                            backgroundColor: '#47A992', '&:hover': {
                                backgroundColor: '#1F8A70',
                            }
                        }} >
                            Copy to clipboard
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div >
    );
};

export default Form;

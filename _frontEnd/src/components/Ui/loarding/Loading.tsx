import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './Loarding.module.css'





function Loading() {
  return (
    <Box className={styles.container} sx={{ display: 'flex' }}>
      <CircularProgress/>
    </Box>
  );
}

export {Loading}
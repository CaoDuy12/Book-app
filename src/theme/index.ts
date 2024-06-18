// index.ts
import { createTheme } from '@mui/material/styles';
import  typography  from './typography';
import  components  from './components';
import  palette  from './palette';


const theme = createTheme({
    palette: palette,
    typography,
    components,
  // Thêm các thiết lập khác cho theme tùy chỉnh nếu cần
});

export default theme;

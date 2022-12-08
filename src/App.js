

import { Modal, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import About from './Pages/About';
import Header from './Pages/Header';
import { Theme } from './Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <CssBaseline />
        <Header></Header>
      </div>
    </ThemeProvider>

  );
}

export default App;

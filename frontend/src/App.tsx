import Menu from './components/Menu';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Menu />
      </ThemeProvider>
    </div>
  );
}

export default App;

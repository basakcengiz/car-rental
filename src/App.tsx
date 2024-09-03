import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './routes/Routes';

function App() {
   const routesElement = useRoutes(protectedRoutes as []);
   return <div>{routesElement}</div>;
}

export default App;

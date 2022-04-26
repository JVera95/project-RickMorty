import { DarkModeProvider } from "./contexts/darkMode";
import Layout from "./components/Layout";

function App() {
  return (
    <DarkModeProvider>
      <Layout />
    </DarkModeProvider>
  );
}

export default App;

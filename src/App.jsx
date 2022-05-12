import { useEffect } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import { init } from "./services/appwrite";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
    </div>
  );
}

export default App;

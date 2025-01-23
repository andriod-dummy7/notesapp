import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1> Hello from Amplify</h1>
      </Header>
    </div>
  );
}

export default App;

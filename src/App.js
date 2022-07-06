import "./App.css";
import Image from "./components/Image";
import Content from "./components/Content";

function App() {
  return (
    <main role="main" className="App">
      <div className="product--card">
        <Image />
        <Content />
      </div>
    </main>
  );
}

export default App;

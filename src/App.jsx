import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const handleClick = () => {
    console.log("ボタンがクリックされました");
  };
  return (
    <>
      <h1>Hello World</h1>
      <Button type="button" disabled={false} onClick={handleClick}>
        <span>ボタンクリック</span>
      </Button>
    </>
  );
}

export default App;

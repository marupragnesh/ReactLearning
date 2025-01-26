import "./App.css";
import AppName from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import ItemContainer from "./components/ItemContainer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
        <AppName></AppName>
        <ItemContainer></ItemContainer>
        <WelcomeMessage></WelcomeMessage>
    </>
  );
}

export default App;

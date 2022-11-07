import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Content />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;

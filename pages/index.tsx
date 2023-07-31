// import logo from './logo.svg'
import "@blocknote/core/style.css";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

function App() {
  return <Editor></Editor>;
}

export default App;

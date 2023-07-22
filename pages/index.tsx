import "@blocknote/core/style.css";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/editor"), {
  ssr: false,
});

function App() {
  return <Editor />;
}

export default App;

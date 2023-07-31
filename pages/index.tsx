// import logo from './logo.svg'
import "@blocknote/core/style.css";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});

function App() {
  return (
    <div>
      <div style={{height: "300px", width: "100%", background: "black"}}>sdfidsjofsdjiofs</div>
      <Editor></Editor>
    </div>
  );
}

export default App;

import CommentForm from "./components/CommentForm";
import CommetList from "./components/CommetList";
import { useState } from "react";

function App() {
  const [comments,setComments] = useState([])
  return (
    <div>
      <CommentForm setComments={setComments} />
      <CommetList allcomments={comments} />
    </div>
  );
}

export default App;

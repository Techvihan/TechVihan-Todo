import TodoPage from "./TodoPage";
import TopTitleBar from "./TopTitleBar";

function App() {
  return (
    <div className="bg-gradient-to-r from-green-500 via-purple-500 to-pink-500 h-screen">
      <TopTitleBar />
      <TodoPage />
    </div>
  );
}

export default App;

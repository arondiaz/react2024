import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="bg-gray-800 font-inter min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />

        <Input />
        <List>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </List>
      </div>
    </div>
  );
}

export default App;

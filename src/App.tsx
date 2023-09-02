import Header from './components/TodoHeader';
import Todo from './components/Todo';

function App() {
  return (
    <main className="main">
      <div className="todos">
        <Header />
        <div className="todos-wrapper">
          <Todo />
        </div>
      </div>
    </main>
  );
}

export default App;

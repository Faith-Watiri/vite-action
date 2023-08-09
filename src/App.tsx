import { useState } from 'react'

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}


function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = {
        id: todos.length + 1,
        title: newTodoTitle.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
    }
  };
  const handleClearCompleted = () => {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);
  };

  const handleToggleCompleted = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <div className="relative flex-1 bg-blue-950 w-screen">
      {/*  Top */}
      <div className={'relative w-full h-64'}>
        {/* <Image
          source={require('../../../assets/images/mountain.jpg')}
          className={'h-full w-full object-cover'}
        /> */}
        <div className={'absolute w-full bg-purple-500/50 h-full'}>
          <div className="px-5 pt-3 flex-row w-full justify-between items-center">
            <p className="text-white text-xl font-bold tracking-wide">
              TODO
            </p>
            {/* <Icon2 name="sun" size={20} color="white" /> */}
          </div>
          <div
            className={
              'relative flex items-center justify-center h-full w-full px-5 flex-row'
            }>
            <input
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="Type a new todo..."
              className={'bg-sky-950 h-12 w-full px-3 rounded-md'}
            />
            <div className={'absolute right-8'}>
              <button onClick={handleAddTodo}>add</button>
            </div>
          </div>
        </div>

        {/*    Todo content goes here */}
        <div className={'absolute -bottom-80 shadow-md  w-full p-5 h-96'}>
          <div
            className={
              'relative items-center w-full h-full rounded-lg bg-sky-900 p-5'
            }>
            {todos.map((key, todo) => (
              <div className="w-full flex flex-row border-b-[1px] border-gray-500 py-3 justify-between items-center" key={todo.id}>
                <div>
                  {/* {completed ? (
	 		<div className="text-2xl cursor-pointer" onClick={() => handleToggleCompleted(id)}>
	 			X
	 		</div>
	 	): (<div className="text-2xl cursor-pointer" onPress={() => handleToggleCompleted(id)}>
	 		D
	 	</div>)} */}
                </div>
                <div>{todo.title}</div>
              </div>
            ))}
            <div className={'flex-row w-full justify-between'}>
              <p className="text-white mt-2">
                {todos.filter(todo => !todo.completed).length} tasks remaining
              </p>
              {/* Clear completed button */}
              <p
                onClick={handleClearCompleted}
                className="mt-2 underline underline-offset-4">
                Clear completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default App

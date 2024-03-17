import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [TaskInput, setTaskInput] = useState('');
  const [TaskContainer, setTaskContainer] = useState([]);

  const addtask = () => {
    if (TaskInput.trim() !== '') {
      setTaskContainer([...TaskContainer, { id: uuidv4(), todo: TaskInput, isCompleted: false }]);
      setTaskInput('');

    }

  }

  const handledel = (e, newid) => {
    const newlist = TaskContainer.filter((item) => item.id !== newid);
    setTaskContainer(newlist);

  }

  const handledit = (e, newid) => {
    const newlist = [...TaskContainer];
    newlist.map((item) => (
      item.id === newid ? (setTaskInput(item.todo)
      ) : null
    ))

    let newarraylist = TaskContainer.filter((item) => item.id !== newid);
    setTaskContainer(newarraylist);

  }

  const [kar, setkar] = useState(false);
  const checkit = (e ,newid) => {
    const newlist = [...TaskContainer];
    newlist.map((item) => (
      item.id === newid ? (
        setkar(!kar)
      ) : (null)
    ))

  }



  return (
    <div className='bg-black text-white flex items-center justify-center min-h-screen text-center '>
      <div>
        <h1>Todo List</h1>

        <div>
          <input type="text" placeholder='Task Here' value={TaskInput} onChange={(e) => setTaskInput(e.target.value)} className='text-black' />
          <button onClick={addtask}>add</button>
        </div>

        <div>
          {TaskContainer.map((item) => {
            return (
              <div key={item.id} className='flex gap-3'>
                <input type="checkbox" checked={kar} onChange={(e)=> checkit(e,item.id)}/>
                <span className={kar ? 'line-through': ''}>{item.todo}</span>
                <button onClick={(e) => handledit(e, item.id)}>edit</button>
                <button onClick={(e) => handledel(e, item.id)}>del</button>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default App
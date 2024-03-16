import React, { useState } from 'react'

const App = () => {

  const [TaskInput, setTaskInput] = useState();
  const [TaskContainer, setTaskContainer] = useState([]);
  const addtask = () => {
    if(TaskInput.trim() !== ''){
      setTaskContainer([...TaskContainer, TaskInput]);
      setTaskInput('');  
    }
     
  }

  const ondelete = (idd) => {
    const newlist = TaskContainer.filter((item, id)=> id !== idd);
    setTaskContainer(newlist);


  }

  const edit = (iid, newitem) => {
    const newlist = TaskContainer.map((item, id)=> id === iid ? newitem : item)
    setTaskContainer(newlist);

  }


  return (
    <div>
      <div>
        <h1>TODO List</h1>
        
        <div>
          <input type="text" placeholder='Task Here' value={TaskInput} onChange={(e) => setTaskInput(e.target.value)}  />
          <button onClick={addtask}>add</button>  
        </div>
      
      {/*container list map  */}
      <div>
        {TaskContainer.map((item, id)=> (
          <div key={id} className='flex gap-3'>
            <input type="text" value={item} onChange={(e) => edit(id, e.target.value)} />
            <button onClick={() => ondelete(id)}>delete</button>
          </div>
        ))}
      </div>
      
      </div>
    </div>
  )
}

export default App
import React, { useState } from 'react'

const App = () => {

  const [TaskInput, setTaskInput] = useState();
  const [TaskContainer, setTaskContainer] = useState([]);
  const [iteminput, setiteminput] = useState();
  const addtask = () => {
    if (TaskInput.trim() !== '') {
      setTaskContainer([...TaskContainer, TaskInput]);
      setTaskInput('');
    }

  }
  const [toggle, settoggle] = useState(true);
  const edit = (iid) => {
    settoggle(!toggle);
    const newlist = TaskContainer.map((item, id) => id === iid ? iteminput : item);
    setTaskContainer(newlist);


  }

  const ondel = (iid) => {
    const newcontainer = TaskContainer.filter((item, id) => id !== iid);
    setTaskContainer(newcontainer);


  }

// implemet the check list 

  return (
    <div className='bg-black text-white flex items-center justify-center min-h-screen text-center '>
      <div>
        <h1>TODO List</h1>

        <div>
          <input type="text" placeholder='Task Here' value={TaskInput} onChange={(e) => setTaskInput(e.target.value)} className='text-black' />
          <button onClick={addtask}>add</button>
        </div>

        {/*container list map  */}
        <div>
          {TaskContainer.map((item, id) => (
            <div key={id} className='flex gap-3'>
              {/* <input type="checkbox" onChange={()=> check(id)} checked={checkkar[id]} name="" id="" /> */}
              <input type="text" value={item} readOnly={toggle} className={checkkar ? ('text-red-500'): ('text-black')} onChange={(e) => setiteminput(e.target.value)} />
              <button onClick={() => ondel(id)}>Delete</button>
              <button onClick={() => edit(id)}>{toggle===false ? 'Save' : 'Edit'}</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
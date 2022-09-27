import './App.css';
import { React, useState } from 'react';
import { Button } from './components/Button';
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";


function App() {

  let [toDo, setToDo] = useState('');
  let [list, setList] = useState([]);

  let addToDo = () => {
    if (toDo.length >= 5 && toDo.length <= 40) {
      list.push(toDo);
      setList([...list])
      console.log(list);
      setToDo('');
    } else {
      alert("Invalid Entry, Please Enter a valid to-do");
    }
  }

  let editToDo = (e, i) => {
    let editedToDo;
    do {
      editedToDo = prompt("Edit to-do", e);
    } while (!editedToDo);
    list.splice(i, 1, editedToDo);
    setList([...list])
    console.log(list);
  }

  let delToDo = (i) => {
    list.splice(i, 1);
    setList([...list])
    // let delItem = list.filter((i) => i !== i)
    // setList([...delItem])
  }

  let deleteAll = () => {
    setList([]);
  }

  return (
    <div className="App">
      <header className="App-header">

        <section>
          <div className="input-header p-4 bg-dark text-white">
            <h1>Today's Tasks</h1>
          </div>
          <div className="input-box py-4 bg-secondary">
            {/* <form action="JavaScript:void(0)" method="get" className="d-flex justify-content-center align-items-center">
                  <label htmlFor="toDo"> */}
            <input type="text" name="toDo" id="toDo" value={toDo} placeholder="Enter a task"
              onChange={(e) => {
                toDo = e.target.value;
                setToDo(toDo);
                console.log(toDo);
              }}
            />
            {/* </label> */}
            <Button btnVal={'Add'} otherClasses="bttn btn-dark" click={addToDo} />
            {/* btnVal={<HiCheck />} */}
            <Button btnVal={<FaTrash />} otherClasses="bttn btn-light" click={deleteAll} />
            {/* </form> */}
          </div>
        </section>

        <section>
          <ul className="m-0 p-0">
            {list.map((e, i) => {
              return (
                <li className="d-flex justify-content-between align-items-center">
                  <p className="m-0" key={i}>{e}</p>
                  <div>
                    <Button btnVal={<FaPencilAlt />} otherClasses="bttn btn-light" click={() => editToDo(e, i)} />
                    <Button btnVal={<HiX />} otherClasses="bttn btn-light" click={() => delToDo(i)} />
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

      </header>
    </div>
  );
}

export default App;

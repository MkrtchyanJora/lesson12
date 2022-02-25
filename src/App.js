
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Context from './Components/Context';
import KalkItems from './Components/KalkItems';



function App() {
  const [kalk, setKalk] = useState('')
  const element = useRef('')
  const [show, setShow] = useState(false)
  const element2 = useRef()



  useEffect(() => {
    element.current = kalk
  }, [kalk])

  function hendelClick(e) {
    setKalk(kalk.concat(e.target.name))
  }

  function clear() {
    setKalk('')
  }

  function back() {
    setKalk(kalk.slice(0, kalk.length - 1))
  }

  function result() {
    setKalk(eval(kalk).toString())
  }

  function modal() {
    setShow(!show)
  }
  return (
    <Context.Provider value={{ hendelClick, clear, back, result }}>
      <div className='contener'>
        <input type='text' className='cl_inp1' value={kalk} ref={element} />
        <KalkItems />
        <div>
          <button onClick={modal} className='btn'>OPEN MODAL</button>
          {show ? <div className='show'>
            <input className='cl_inp2' ref={element2} type='text' />
          </div> : null}
        </div>

      </div>
    </Context.Provider>

  );

}

export default App;

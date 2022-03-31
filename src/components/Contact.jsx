import React, {useState} from 'react';

function Contact() {


    const [count, setCount] = useState(0)

    const [text, setText] = useState('')
    const Add = () => {
        setCount(count+1)
    }

    function Sub() {
        if(count>0)
        setCount(count-1)
    }
    return(

        <div>

        <h1 className='title'>Hello From contact</h1>
        <button onClick={Add}>Add</button>
        <button onClick={Sub}>Sub</button>
        <input type='number' onChange={(e) => setCount(Number(e.target.value))} />
        <h1>{count}</h1>


        <input type='text' onChange={(e) => setText(e.target.value)} />

        <h1>{text}</h1>
        </div>

    )
    
}
export default Contact;
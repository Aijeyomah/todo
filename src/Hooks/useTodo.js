import {useState, useEffect} from 'react'

const useTodo = (initialstate = [{ todo: "Hello" }]) => {
    const [container, setContainer] = useState(initialstate );
    const [complete, setComplete] = useState([])
    const [doing, setDoing] = useState([])

    useEffect(()=>{
      completed();
      active()
    }, [container])

    const add = (object) => {
      const t = {...object, done:false}
        setContainer( [...container, t] );
        // console.log(container)
      };
      const remove = (index) => {
        setContainer(
          container.filter((id) => {
            return id !== index;
          }),
        );
       
      };

      const completed = () =>{
        setComplete(container.filter(i => {return i.done === true}))
      }
    
      const active = () => {
        setDoing(container.filter(i => {return i.done === false}))
      }
      const done = (single) =>{
        setContainer(container.map(item => item.todo === single.todo ? {...item, done: !item.done} : item ));
        // completed();
        // active()

      }
      const clearCompleted = () => {
        setContainer(
          container.filter((i) => {
            return i.done === false;
          }),
        );
        // setComplete([])
      }
     

    return [container, add, remove, done, complete, doing, clearCompleted]
}

export default useTodo

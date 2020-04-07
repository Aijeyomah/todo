import {useState} from 'react'

const useDisplay = () => {
    const [display, setDisplay] = useState({
        all: true,
        active: false,
        completed: false,
      });
     
      const handleActive = () => {
        setDisplay({
          ...display,
          all: false,
          active: true,
          completed: false,
        });
      };
      const handleAll = () => {
        setDisplay({
          ...display,
          all: true,
          active: false,
          completed: false,
        });
      };
      const handleCompleted = () => {
        setDisplay({
          ...display,
          all: false,
          active: false,
          completed: true,
        });
      };
    

    return[display, handleActive, handleAll, handleCompleted]
}

export default useDisplay

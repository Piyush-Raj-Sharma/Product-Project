import { useEffect } from 'react';
import { asyncGetUsers } from './store/reducers/userActions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);
  

  useEffect(() => {
    dispatch(asyncGetUsers()); //we are treating asyncGetUSers as actions so we are dispatching it
  }, []);

  return (
    <div>App</div>
  )
}

export default App
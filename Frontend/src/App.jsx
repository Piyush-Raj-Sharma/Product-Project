import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';
import { asyncCurrentUser } from './store/actions/userActions';

const App = () => {

  // const dispatch = useDispatch();
  // const data = useSelector((state) => state);
  // console.log(data);
  

  // useEffect(() => {
    // dispatch(asyncGetUsers()); //we are treating asyncGetUSers as actions so we are dispatching it
  // }, []);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(asyncCurrentUser());
  },[])

  return (
<div className="bg-gray-800 text-white min-h-screen overflow-x-hidden">
  <Navbar />
  <MainRoutes />
</div>

  )
}

export default App
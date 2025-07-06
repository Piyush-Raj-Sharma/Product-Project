import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/Navbar';
import { asyncCurrentUser } from './store/actions/userActions';
import { asyncLoadProducts } from './store/actions/productActions';

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
    dispatch(asyncLoadProducts());
  },[])

  return (
<div className="bg-gray-800 text-white min-h-screen overflow-x-hidden">
  <Navbar />
  <MainRoutes />
</div>

  )
}

export default App
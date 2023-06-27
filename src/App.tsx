import React, {useEffect} from 'react';
import FullComments from './global-components/full-comments/full-comments.component';
import { useAppDispatch } from './store/store';
import { setCurrentUser } from './store/reducer';

const App: React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentUser('Ellie Alvaz'))
  })

  return(
  <div className='layout'>
    <FullComments />
  </div>
  )
};

export default App;

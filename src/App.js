import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchActionCreater } from './redux/userReducer';
import { asyncIncrementCreator, asyncDecrementCreator } from './redux/testReducer'


function App() {
  const dispatch = useDispatch()

  const count = useSelector(state => state.testReducer.count)
  const users = useSelector(state => state.userReduser.users)
  const userArr = users.map(u => <li key={u.id} className="list-group-item"><pre>{JSON.stringify(u, 2, 2)}</pre></li>)

  return (<div>
    <button type="button" className="btn btn-primary" onClick={() => dispatch(asyncDecrementCreator())}>Decrement-</button>
    <a> {count} </a>
    <button type="button" className="btn btn-primary" onClick={() => dispatch(asyncIncrementCreator())}>Increment+</button>
    <p></p>
    <button onClick={() => dispatch(fetchActionCreater())} type="button" className="btn btn-primary">Primary</button>
    <ul className="list-group">
      {userArr}
    </ul>
  </div >)
}

export default App;




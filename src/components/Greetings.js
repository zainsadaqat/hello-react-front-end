import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/actions';

const Greetings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  const greetings = useSelector((state) => state.Reducer.greetings);

  return (
    <section>
      <ul>
        {greetings.map((greeting) => (
          <li key={greeting.id}>
            <p>{greeting.message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Greetings;

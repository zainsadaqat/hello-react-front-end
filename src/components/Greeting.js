import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/actions';

const Greeting = () => {
  const { greetingId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  const greetings = useSelector((state) => state.Reducer.greetings);
  const singleGreeting = greetings.find(
    (value) => value.id.toString() === greetingId
  );

  return (
    <section>
      <h2>Greeting Message</h2>
      <p>{singleGreeting.message}</p>
    </section>
  );
};

export default Greeting;

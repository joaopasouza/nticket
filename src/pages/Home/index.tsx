import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from '../../store';
import * as TodosActions from '../../store/ducks/todos/actions';

import Layout from '../../layouts/Main';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const { data, loading } = useSelector((state: AppState) => state.todos);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(TodosActions.loadRequest());
  }, [dispatch]);

  return (
    <Layout>
      <Header title="Home" />

      <section className="content container-fluid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
};

export default Home;

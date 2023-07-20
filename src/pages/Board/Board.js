//import { useState, useEffect } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import './Board.css';

const lanes = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'In Progress' },
  { id: 3, title: 'Review' },
  { id: 4, title: 'Done' },
];

function Board() {

  const [loading, error, tasks] = useDataFetching(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks`);

  return (
    <div className='Board-wrapper'>
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.lane === lane.id)}
        />
      ))}
    </div>
  );
}

export default Board;

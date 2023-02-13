import React from 'react';
import { useParams } from 'react-router';
import { useDarkMode } from 'store/user';

type GameProps = {
//   name: string;
};

const GameComp: React.FC<GameProps> = ({ }) => {
  const { name } = useParams<{ name: string }>();

    console.log(name);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default GameComp;

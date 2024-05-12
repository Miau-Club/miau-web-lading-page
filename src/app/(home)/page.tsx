import { GridsBG } from '@/components/gridsBG';
import React from 'react';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-bgBlue to-bgWhite w-full h-screen pt-20">
      <GridsBG />
    </div>
  )
}

export default Home
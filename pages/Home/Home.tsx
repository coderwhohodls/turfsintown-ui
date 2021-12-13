import React from 'react';
import { Button, Pane, Text, majorScale } from 'evergreen-ui';

const Home = () => {
  return (
    <Pane 
      display="flex" 
      flexDirection="column"
      alignItems="center"             
      margin={0}
      >      
      <Pane 
        background="green" 
        width="100vw" 
        height="100vh">
          <Button>Clic2k me!</Button>
      </Pane>      
    </Pane>
  );
};

export default Home;

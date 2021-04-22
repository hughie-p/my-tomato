import * as React from 'react';
import Button from 'components/atom/button';

const App: React.FC = () => (
  <div>
    <Button
      onClick={() => {
        alert('Test');
      }}
    >
      Home page
    </Button>
  </div>
);

export default App;

import * as React from 'react';
import Timer from 'components/organism/timer';
import Header from 'components/organism/header';
import './app.scss';
import Footer from 'components/organism/footer';

const App = (): JSX.Element => (
  <React.Fragment>
    <main>
      <Header />
      <Timer pomodoroTime={90000} endTimePlan={Date.now() + 1000 * 100} />
    </main>
    <Footer />
  </React.Fragment>
);

export default App;

import * as React from 'react';
import Timer from 'components/organism/timer';
import Header from 'components/organism/header';
import './app.scss';
import Footer from 'components/organism/footer';

const App = (): JSX.Element => (
  <React.Fragment>
    <main>
      <div className="wrapper">
        <Header />
        <Timer pomodoroTime={900000} endTimePlan={Date.now() + 900000} />
      </div>
    </main>
    <Footer />
  </React.Fragment>
);

export default App;

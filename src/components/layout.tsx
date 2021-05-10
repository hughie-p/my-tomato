import * as React from 'react';
import Header from 'components/organism/header';
import Timer from 'components/organism/timer';
import Tasks from 'components/organism/tasks';
import Footer from 'components/organism/footer';

const Layout = (): JSX.Element => (
  <React.Fragment>
    <main>
      <div className="wrapper">
        <Header />
        <Timer pomodoroTime={9000000} endTimePlan={Date.now() + 9000000} />
        <Tasks />
      </div>
    </main>
    <Footer />
  </React.Fragment>
);

export default Layout;

import Header from 'components/organism/header';
import Timer from 'components/organism/timer';
import Tasks from 'components/organism/tasks';
import Footer from 'components/organism/footer';
import Setting from 'components/organism/setting';
import React from 'react';

// TODO: Layout for UI - Not neccessary in this app - has one route
const Layout = (): JSX.Element => {
  const ref = React.createRef<HTMLDivElement>();
  return (
    <div className="wrapper">
      <main>
        <Header />
        <Setting open ref={ref}>
          Click me!
        </Setting>
        <Timer pomodoroTime={5000} endTimePlan={Date.now() + 5000} />
        <Tasks />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

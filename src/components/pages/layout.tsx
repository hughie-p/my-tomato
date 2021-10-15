import Header from 'components/organisms/header';
import Timer from 'components/organisms/timer';
import Tasks from 'components/organisms/tasks';
import Footer from 'components/organisms/footer';

// TODO: Layout for UI - Not neccessary in this app - has one route
const Layout = (): JSX.Element => (
  <div className="wrapper">
    <main>
      <Header />
      <Timer pomodoroTime={5000} endTimePlan={Date.now() + 5000} />
      <Tasks />
    </main>
    <Footer />
  </div>
);

export default Layout;

import Header from 'components/organisms/Header';
import Timer from 'components/organisms/Timer';
import Tasks from 'components/organisms/Tasks';
import Footer from 'components/organisms/Footer';

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

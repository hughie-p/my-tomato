import Icon from 'components/atoms/Icon';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = (): JSX.Element => (
  <footer>
    <h1 className="container footer__title">An online Pomodoro Timer to boost your productivity</h1>
    <section className="container">
      <h2 className="container footer--introduce__title">What is Pomofocus?</h2>
      <p className="footer--introduce__content">
        Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim
        of this app is to help you focus on any task you are working on, such as study, writing, or
        coding. This app is inspired by&nbsp;
        <a
          href="https://francescocirillo.com/pages/pomodoro-technique"
          target="_blank"
          rel="noreferrer noopener"
        >
          Pomodoro Technique
        </a>
        &nbsp;which is a time management method developed by Francesco Cirillo.
      </p>
    </section>
    <section className="container">
      <h2 className="footer--introduce__title">What is Pomodoro Technique?</h2>
      <p className="footer--introduce__content">
        The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and
        study. The technique uses a timer to break down work into intervals, traditionally 25
        minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the
        Italian word for &apos;tomato&apos;, after the tomato-shaped kitchen timer that Cirillo used
        as a university student. -&nbsp;
        <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
      </p>
    </section>
    <section className="container">
      <h2 className="footer--introduce__title">How to use the Pomodoro Timer?</h2>
      <ol className="footer--introduce__content">
        <li>
          <strong>Add tasks</strong> to work on today
        </li>
        <li>
          <strong>Set estimate pomodoros</strong> (1 = 25min of work) for each tasks
        </li>
        <li>
          <strong>Select a task</strong> to work on
        </li>
        <li>
          <strong>Start timer</strong> and focus on the task for 25 minutes
        </li>
        <li>
          <strong>Take a break</strong> for 5 minutes when the alarm ring
        </li>
        <li>
          <strong>Iterate</strong> 3-5 until you finish the tasks
        </li>
      </ol>
    </section>
    <section className="container">
      <h2 className="footer--introduce__title">Features</h2>
      <ul className="footer--introduce__content">
        <li>Responsive design that works with desktop and mobile</li>
        <li>Color transition to switch moods between work time and rest time</li>
        <li> Audio notification at the end of a timer period</li>
        <li>Customizable timer intervals to suit your preference</li>
      </ul>
    </section>
    <div className="footer--info">
      <nav className="footer--sitemap">
        <Link to="/">HOME</Link>
        <Link to="/">PRIVACY</Link>
        <Link to="/">CONTACT</Link>
        <Link to="/">SHORTENED VERSION</Link>
      </nav>
      <nav className="footer--social">
        <a
          href="https://www.facebook.com/60huster.5603"
          title="Facebook"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.Facebook />
        </a>
        <a
          href="https://www.linkedin.com/in/vanhiep97/"
          title="Linkedin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.Linkedin />
        </a>
        <a
          href="https://twitter.com/vanhiep97"
          title="Twitter"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon.Twitter />
        </a>
      </nav>
      <div className="footer--author">
        Made by&nbsp;
        <a href="https://github.com/sthwrong" target="_blank" rel="noreferrer noopener">
          Hiep Nguyen Van
        </a>
      </div>
      <div className="footer--copyright">
        ©Pomofocus {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

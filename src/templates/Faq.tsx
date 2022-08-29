// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { CenteredFooter } from '../footer/CenteredFooter';
// import { Section } from '../layout/Section';
// import { Logo } from './Logo';
import { FaqAnswer } from '../faq/Answer';
import { Divider } from '../faq/Divider';
import { FaqQuestion } from '../faq/Question';

const Faq = () => (
  <ul className="list-none text-left">
    <FaqQuestion text="Do I need machine learning experience to participate" />
    <FaqAnswer text="No experience is needed! We will teach you everything you need to know." />
    <Divider />
    <FaqQuestion text="How much does this competition cost?" />
    <FaqAnswer text="This is an AWS sponsored event so it is free of charge to join" />
    <Divider />
    <FaqQuestion text="What is the time commitment for this competition?" />
    <FaqAnswer
      text="You will be required to participate in the workshop session (2 hours)
      along with training your models in your own time which can range from 2
      hours to 40 hours (up to you)."
    />
    <Divider />
    <FaqQuestion text="Where can I learn more about Deep Racer?" />
    <FaqAnswer text="Visit the official AWS DeepRacer page: <a href='https://aws.amazon.com/deepracer/league/'>https://aws.amazon.com/deepracer/league/</a>" />
    <Divider />
    <FaqQuestion text="Do I need to use my own AWS Account to train my models?" />
    <FaqAnswer text="No - we will provide you with accounts to train on for this competition." />
    <Divider />
    <FaqQuestion text="What if I can't participate in the workshop?" />
    <FaqAnswer text="We will send you a few pre-recorded resources for you to catch up!" />
    <Divider />
    <FaqQuestion text="What is the team size?" />
    <FaqAnswer text="You can organize a team of 1-4 people." />
  </ul>
);

export { Faq };

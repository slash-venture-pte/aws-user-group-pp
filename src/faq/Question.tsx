// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { CenteredFooter } from '../footer/CenteredFooter';
// import { Section } from '../layout/Section';
// import { Logo } from './Logo';

type IFaq = {
  text: string;
};

const FaqQuestion = (props: IFaq) => (
  <li className="text-primary-900 font-bold">{props.text}</li>
);

export { FaqQuestion };

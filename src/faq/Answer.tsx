// import Link from 'next/link';

// import { Background } from '../background/Background';
// import { CenteredFooter } from '../footer/CenteredFooter';
// import { Section } from '../layout/Section';
// import { Logo } from './Logo';

type IFaq = {
  text: string;
};

const FaqAnswer = (props: IFaq) => (
  <li dangerouslySetInnerHTML={{ __html: props.text }}></li>
);

export { FaqAnswer };

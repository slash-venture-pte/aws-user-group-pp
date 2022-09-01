import { Base } from '../templates/Base';
import analytics from '../utils/Analytic';

const Index = () => {
  analytics.pageview('/');
  return <Base />;
};

export default Index;

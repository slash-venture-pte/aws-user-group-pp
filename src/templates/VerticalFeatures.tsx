import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Faq } from './Faq';

const VerticalFeatures = () => (
  <Section
    title="Register for our latest Innovation Mindset Event – PP Community Day 2022 – hosted by AWS."
    description="We are excited to announce that we are hosting....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="What is DeepRacer?"
      description="Developers of all skill levels can get hands on with machine learning through a cloud based 3D racing simulator, fully autonomous 1/18th scale race car driven by reinforcement learning, and global racing league.      "
      image="/assets/images/deep-racer-logo.png"
      imageAlt="DeepRacer Logo"
    />
    <VerticalFeatureRow
      title="Why DeepRacer?"
      description="AWS DeepRacer gives you an interesting and fun way to get started with reinforcement learning (RL). RL is an advanced machine learning (ML) technique that takes a very different approach to training models over other machine learning methods. Its super power is that it learns very complex behaviours without requiring any labeled training data, and can make short term decisions while optimising for a longer term goal.<br/><br/>Use cases for RL include recommendation engines, financial trading engines, process optimization, web systems configuration, resource management and autonomous actions."
      image="/assets/images/deep-racer.jpeg"
      imageAlt="AWS DeepRacer Car"
      fullWidth={true}
    />
    <VerticalFeatureRow
      title="FAQ"
      description="Got questions? We've got answers."
      image="/assets/images/image002.png"
      imageAlt="Third feature alt text"
      weightSplit={true}
    >
      <Faq />
    </VerticalFeatureRow>
  </Section>
);

export { VerticalFeatures };

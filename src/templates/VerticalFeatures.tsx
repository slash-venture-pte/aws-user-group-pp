import Link from 'next/link';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import analytics from '../utils/Analytic';
import { Faq } from './Faq';

const VerticalFeatures = () => {
  const trackRSVP = () => {
    /* Track a custom event */
    analytics.event({
      category: 'RSVP',
      action: 'link-body',
    });
  };
  return (
    <Section
      title="Register for our latest Innovation Mindset Event – PP Community Day 2022 – hosted by AWS."
      description=""
    >
      <strong className="list-disc text-left text-xl ">
        {' '}
        Join our First ever AWS community-led event in Phnom Penh, Cambodia!
      </strong>
      <p className="text-left text-xl ">
        <Link
          onClick={trackRSVP}
          className="text-primary-500"
          href="https://airtable.com/shrGNaItTzpVCQA5Q"
        >
          <span className="text-primary-500 ">
            Register for the Community day!
          </span>
        </Link>
      </p>
      <strong className="list-disc text-left text-xl ">
        {' '}
        Here&apos;s your chance to:
      </strong>
      <ul className="list-disc text-left mt-4 text-xl md:px-20">
        <li>
          Learn industry trends and intricacies about innovative implementations
          from AWS experts
        </li>
        <li>
          Harness the power of networking with AWS users, DevOps, developers &
          Solutions Architects
        </li>
        <li>Network with fellow AWS veterans & Techies during breaks</li>
        <li>Sporting chance for active participants to win many AWS Swags</li>
        <li>
          Join the First Ever Deep Racer League hosted in Cambodia! (No prior
          experience needed)
        </li>
      </ul>
      <br />
      <p className="text-left text-xl ">
        Join the DeepRacer event in the afternoon and a chance to win exciting
        prizes! Register for this session at:{' '}
        <Link
          onClick={trackRSVP}
          className="text-primary-500 "
          href="https://airtable.com/shr1EGYNBPLroaJZV"
        >
          <span className="text-primary-500 ">
            Register for AWS DeepRacer League on October 16th 2022
          </span>
        </Link>
      </p>

      <br />
      <p className="text-left text-xl ">
        Registration for Deep Racer League closes on 25th September 2022 !
      </p>
      <VerticalFeatureRow
        title="AWS DeepRacer League Phnom Penh"
        description="Brace yourselves for the first-ever deep racer league in Cambodia! Developers of all skill levels can compete in this year's deep racer league, being held on AWS Community Day Cambodia 2022, to win prizes while improving their ML skills!

      The AWS Community Day Cambodia is just around the corner so start tuning your models and revving your engines. Participate Now!."
        weightSplit={true}
        image="/assets/images/deep-racer-logo.png"
        imageAlt="DeepRacer Logo"
      />
      <div className="full-width text-center mt-10">
        <h3 className="text-3xl text-gray-900 font-semibold">Agenda:</h3>
      </div>
      <ul className="list-disc text-left mt-4 text-xl md:px-20 leading-10">
        <li>
          <b>12pm - 12:40am:</b> Keynote (40min)
        </li>
        <li>
          <b>12:40pm - 1:20pm:</b> Fireside Chat (40min)
        </li>
        <li>
          <b>1:20pm - 5:30pm:</b> Deep Racer League (210min)
        </li>
        <li>
          <b>1.20pm – 2.00pm:</b> Breakout sessions 1 (30min)
        </li>
        <li>
          <b>2.00pm – 2.30pm:</b> Breakout sessions 2 (30min)
        </li>
        <li>
          <b>2.30pm – 3.00pm:</b> Breakout sessions 3 (30min)
        </li>
        <li>
          <b>3:00pm – 3.15pm:</b> Quiz & Photo Contest (15min)
        </li>
        <li>
          <b>3.15pm – 3.45pm:</b> Breakout sessions 4 (30min)
        </li>
        <li>
          <b>3.15pm – 4.45pm:</b> Breakout sessions 5 (30min)
        </li>
        <li>
          <b>4.45pm – 5.15pm:</b> Breakout sessions 6 (30min)
        </li>
        <li>
          <b>5:15pm - 5:30pm:</b> Quiz and Photo Contest (15min)
        </li>
        <li>
          <b>5:30pm - 6pm:</b> Q&A (30min)
        </li>
        <li>
          <b>6pm - 6.15pm:</b> AWS DeepRacer League Awarding Ceremony (15min)
        </li>
        <li>
          <b>6.15pm - 6.30pm:</b> Closing Keynote (15min)
        </li>
        <li>
          <b>6:30pm - 7pm:</b> Networking (30min)
        </li>
      </ul>
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
};

export { VerticalFeatures };

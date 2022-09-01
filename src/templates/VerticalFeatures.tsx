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
          href="https://www.eventbrite.sg/e/aws-community-day-phnom-penh-tickets-411735069677?aff=ebdsoporgprofile"
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
          href="https://www.eventbrite.sg/e/aws-deepracer-phnom-penh-tickets-411738138857?aff=ebdsoporgprofile"
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
          <b>10am - 10:30am:</b> Keynote (30min)
        </li>
        <li>
          <b>10:30am - 12 pm:</b> Fireside Chat (90min)
        </li>
        <li>
          <b>12pm – 12:45 pm:</b> Lunch Break (45min)
        </li>
        <li>
          <b>12:45pm –1:30pm:</b> Breakout sessions 1 (45min)
        </li>
        <li>
          <b>1:30pm – 2:15pm:</b> Breakout sessions 2 (45min)
        </li>
        <li>
          <b>2:15pm – 3pm:</b> Breakout sessions 3 (45min)
        </li>
        <li>
          <b>3pm - 3:45pm:</b> Breakout sessions 4 (45min)
        </li>
        <li>
          <b>3:45pm - 5:30pm:</b> Deep Racer League (105min)
        </li>
        <li>
          <b>5:30pm - 6pm:</b> Closing and DRL Awards (30min)
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

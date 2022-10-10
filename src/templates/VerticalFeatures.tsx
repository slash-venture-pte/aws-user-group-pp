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
          <b>1:00 PM - 1:30 PM:</b> Keynote
        </li>
        <li>
          <b>1:30 PM - 2:15 PM:</b> Fireside Chat: Different Cloud Journeys For
          Builders
        </li>
        <li>
          <b>2.15 PM – 2.45 PM:</b> Session 1: Ease lambda deployment replicated
          with Terraform module
        </li>
        <li>
          <b>2.45 PM – 3.15 PM:</b> Session 2: Scaling Architecture with AWS
          Services
        </li>
        <li>
          <b>3:00 PM - 5:30 PM:</b> Deep Racer League
        </li>
        <li>
          <b>3:15 PM – 3.30 PM:</b> Session 3: AWS CDK and Serverless
          Applications
        </li>
        <li>
          <b>3:30 PM – 3:45 PM:</b> Quiz & Photo Contest
        </li>
        <li>
          <b>3:45 PM – 4.15 PM:</b> Session 4: A Pragmatic Introduction to
          Microservices
        </li>
        <li>
          <b>4:15 PM – 4:45 PM:</b> Session 5: AWS and Machine Learning
        </li>
        <li>
          <b>4.45 PM – 5.00 PM:</b> Session 6: Using AI algorithms to classify
          images
        </li>
        <li>
          <b>5:00 PM - 5:15 PM:</b> Quiz and Photo Contest
        </li>
        <li>
          <b>5:15 PM - 5:45 PM:</b> Q&A
        </li>
        <li>
          <b>5:45 PM - 6:00 PM:</b> Closing and DRL Award
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

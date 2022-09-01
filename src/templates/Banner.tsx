import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Don't want to miss the AWSome day!"
      subtitle="Register and save the date!"
      button={
        <Link href="https://www.eventbrite.sg/e/aws-community-day-phnom-penh-tickets-411735069677?aff=ebdsoporgprofile">
          <a>
            <Button>RSVP Now</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };

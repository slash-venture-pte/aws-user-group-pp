import Link from 'next/link';
import { useRouter } from 'next/router';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import analytics from '../utils/Analytic';
import { Logo } from './Logo';

const Hero = () => {
  const trackRSVP = () => {
    /* Track a custom event */
    analytics.event({
      category: 'RSVP',
      action: 'link-header',
    });
  };
  const router = useRouter();
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <a href="https://slash.co" target={'_blank'} rel="noreferrer">
            <img
              width={'65'}
              src={`${router.basePath}${'/assets/images/slash-logo-black.png'}`}
              alt={'Slash Digital'}
              className={'position-relative ml-2 '}
            />{' '}
          </a>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {"You're invited to AWS Community Day Phnom Penh 2022 \n"}
              <span className="text-primary-500">+ AWS DeepRacer</span>
            </>
          }
          description="October 16th, 2022"
          button={
            <Link
              onClick={trackRSVP}
              href="https://www.eventbrite.sg/e/aws-community-day-phnom-penh-tickets-411735069677?aff=ebdsoporgprofile"
            >
              <a>
                <Button xl>Register your RSVP Here</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };

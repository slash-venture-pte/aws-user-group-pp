import { useRouter } from 'next/router';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const size = props.xl ? '44' : '32';

  return (
    <span className={`text-gray-900 inline-flex items-center`}>
      <img
        width={size}
        src={`${router.basePath}${'/assets/images/aws-logo.png'}`}
        alt={'Amazon Web Services'}
      />{' '}
      <div className="ml-2">AWS User Group Cambodia </div>
    </span>
  );
};

export { Logo };

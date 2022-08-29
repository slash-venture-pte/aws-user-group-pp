import { ReactElement } from 'react';

import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  children?: ReactElement;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  fullWidth?: boolean;
  weightSplit?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const flexSizeText = props.weightSplit ? 'sm:w-2/3' : 'sm:w-1/2';
  const flexSizeImage = props.weightSplit ? 'sm:w-1/3' : 'sm:w-1/2';
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );
  const textClass = className('w-full', 'text-center', 'sm:px-6', {
    [flexSizeText]: !props.fullWidth,
  });
  const imageClass = className('w-full', 'text-center', 'sm:p-6', {
    [flexSizeImage]: !props.fullWidth,
  });

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className={textClass}>
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>

        {props.reverse && props.fullWidth && (
          <div className={imageClass}>
            <img
              src={`${router.basePath}${props.image}`}
              alt={props.imageAlt}
            />
          </div>
        )}
        <div
          className="mt-6 text-xl leading-9"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />

        {props.children && (
          <div className="mt-6 text-xl leading-9">{props.children}</div>
        )}
      </div>

      {!props.reverse && !props.fullWidth && (
        <div className={imageClass}>
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        </div>
      )}
    </div>
  );
};

export { VerticalFeatureRow };

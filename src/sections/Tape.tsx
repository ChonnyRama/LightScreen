import StarIcon from '@/assets/icons/star.svg';

const words = [
  'Performant',
  'Responsive',
  'Scalable',
  'Secure',
  'Interactive',
  'User-friendly',
  'Search Optimized',
  'Reliable',
];

export const TapeSection = () => {
  return (
    <div>
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-3">
              {words.map((word) => (
                <div className="inline-flex items-center gap-4" key={word}>
                  <span className="text-gray-900 uppercase text-sm font-bold">
                    {word}
                  </span>
                  <StarIcon className="text-gray-900 size-6 -rotate-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

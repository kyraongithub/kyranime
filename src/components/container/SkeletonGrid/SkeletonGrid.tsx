import type React from 'react';
import Skeleton from '../../ui/skeleton';

const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 10 }) => {
  return (
    <div className="mt-12 grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-md animate-pulse"
        >
          <Skeleton height="16rem" width="100%" rounded="0px" />

          <div className="p-3">
            <Skeleton height="1rem" width="70%" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGrid;

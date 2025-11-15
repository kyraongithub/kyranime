import type React from 'react';
import Skeleton from '../../ui/skeleton';

const DetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white animate-pulse">
      <div className="container mx-auto px-4 py-6">
        <Skeleton width="80px" height="20px" />
      </div>

      <div className="relative h-64 md:h-96 lg:h-128 bg-gray-800" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <Skeleton
            width="20rem"
            height="30rem"
            className="rounded-lg border border-gray-800"
          />

          <div className="flex-1 mt-6 md:mt-0">
            <Skeleton width="60%" height="40px" className="mb-4" />

            <div className="flex gap-3 mb-6">
              <Skeleton width="70px" height="28px" className="rounded-full" />
              <Skeleton width="70px" height="28px" className="rounded-full" />
              <Skeleton width="70px" height="28px" className="rounded-full" />
            </div>

            <div className="flex gap-2 mb-6">
              <Skeleton width="80px" height="28px" className="rounded-full" />
              <Skeleton width="80px" height="28px" className="rounded-full" />
              <Skeleton width="80px" height="28px" className="rounded-full" />
            </div>

            <Skeleton width="30%" height="28px" className="mb-3" />

            <div className="space-y-3">
              <Skeleton width="100%" height="14px" />
              <Skeleton width="95%" height="14px" />
              <Skeleton width="90%" height="14px" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <Skeleton width="40%" height="24px" className="mb-4" />

            <div className="space-y-3">
              <Skeleton width="80%" height="16px" />
              <Skeleton width="70%" height="16px" />
              <Skeleton width="60%" height="16px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailSkeleton;

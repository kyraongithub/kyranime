import type React from 'react';
import type { SkeletonInterface } from './interface';

const Skeleton: React.FC<SkeletonInterface> = ({
  width = '100%',
  height = '1rem',
  rounded = '0.375rem',
  className = '',
}) => {
  return (
    <div
      className={`bg-gray-700 animate-pulse ${className}`}
      style={{
        width,
        height,
        borderRadius: rounded,
      }}
    />
  );
};

export default Skeleton;

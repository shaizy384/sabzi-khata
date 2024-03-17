import React from 'react'
const LineSkeletonLoader = () => (
    <div className="animate-pulse flex mx-8 items-center mb-4">
      <div className="bg-gray-100 p-2 rounded-full w-5 h-5 mr-2"></div>
      <div className="bg-gray-100 h-6 w-60 rounded"></div>
    </div>
  );
export default LineSkeletonLoader
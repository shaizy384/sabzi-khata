const SkeletonLoader = () => (
    <div className="flex justify-between items-center animate-pulse bg-white rounded-lg shadow p-6 h-[151px]">
      <div className="flex flex-col">
        <div className="bg-gray-100 h-12 w-12 mb-4 rounded"></div>
        <div className="bg-gray-100 h-6 w-24"></div>
      </div>
      <div className="bg-gray-100 h-12 w-16"></div>
    </div>
  );

export default SkeletonLoader;
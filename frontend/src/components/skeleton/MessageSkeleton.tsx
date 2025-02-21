const MessageSkeleton = () => {
  return (
    <>
      {/* Left side message skeleton */}
      <div className="flex gap-3 items-center mt-16">
        <div className="w-10 h-10 rounded-full shrink-0 bg-slate-800 animate-pulse"></div>
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Right side message skeleton */}
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
        </div>
        <div className="w-10 h-10 rounded-full shrink-0 bg-slate-800 animate-pulse"></div>
      </div>

      {/* Left side message skeleton */}
      <div className="flex gap-3 items-center mt-16">
        <div className="w-10 h-10 rounded-full shrink-0 bg-slate-800 animate-pulse"></div>
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Right side message skeleton */}
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
        </div>
        <div className="w-10 h-10 rounded-full shrink-0 bg-slate-800 animate-pulse"></div>
      </div>

      {/* Left side message skeleton */}
      <div className="flex gap-3 items-center mt-28">
        <div className="w-10 h-10 rounded-full shrink-0 bg-slate-800 animate-pulse"></div>
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Right side message skeleton */}
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-slate-800 rounded animate-pulse"></div>
        </div>
        <div className="w-10 h-10 rounded-full shrink-0 bg-slate-800 animate-pulse"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;

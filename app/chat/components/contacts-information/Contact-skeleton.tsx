import type { FC } from 'react';

export const ContactSkeleton: FC = () => {
  return (
    <section className="p-4 animate-pulse">
      <div className="flex flex-col items-center pb-6 border-b ">
        <div className="h-20 w-20 rounded-full bg-muted mb-3"></div>
        <div className="h-4 w-32 bg-muted mb-2"></div>
        <div className="h-3 w-24 bg-muted mb-1"></div>
        <div className="h-4 w-24 bg-muted mt-1"></div>
        <div className="flex items-center mt-1 space-x-2">
          <div className="h-2 w-2 rounded-full bg-muted"></div>
          <div className="h-3 w-16 bg-muted"></div>
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <div className="h-4 w-40 bg-muted rounded mb-2"></div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="h-4 w-16 bg-muted rounded"></span>
              <span className="h-4 w-32 bg-muted rounded"></span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="h-4 w-16 bg-muted rounded"></span>
              <span className="h-4 w-24 bg-muted rounded"></span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="h-4 w-24 bg-muted rounded"></span>
              <span className="h-4 w-20 bg-muted rounded"></span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-4 w-32 bg-muted rounded mb-2"></div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="h-4 w-16 bg-muted rounded"></span>
              <span className="h-4 w-20 bg-muted rounded"></span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="h-4 w-24 bg-muted rounded"></span>
              <span className="h-4 w-16 bg-muted rounded"></span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="h-4 w-20 bg-muted rounded"></span>
              <span className="h-4 w-12 bg-muted rounded"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="h-10 w-full bg-muted rounded"></div>
      </div>
    </section>
  );
};

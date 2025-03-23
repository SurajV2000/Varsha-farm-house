import * as React from "react";
import { forwardRef } from "react";

const Card = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`bg-white rounded-lg shadow-md ${className}`}
    {...props}
  >
    {children}
  </div>
));

const CardContent = ({ className, children }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export { Card, CardContent };

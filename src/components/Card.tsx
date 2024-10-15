import React from "react";

import clsx from "clsx";

type CardProps = {
  containerClassName?: string;
  children?: React.ReactNode;
}

export default function Card({ containerClassName, children }: CardProps) {
  return (
    <div className={clsx(
      "p-4 bg-white rounded-md shadow-md border",
      containerClassName
    )}>
      {children}
    </div>
  )
}

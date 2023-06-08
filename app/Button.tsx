"use client";

export const RedButton = ({
  onClick,
  children,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-2 py-1 text-xs font-semibold rounded-sm border-2 border-red-400 hover:text-white hover:bg-red-600 hover:border-transparent`}
  >
    {children}
  </button>
);

export const GreenButton = ({
  onClick,
  children,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-2 py-1 text-xs font-semibold rounded-sm border-2 border-teal-400 hover:text-white hover:bg-teal-600 hover:border-transparent`}
  >
    {children}
  </button>
);

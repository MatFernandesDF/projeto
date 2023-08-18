import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className={`btn btn-primary ${loading ? 'disabled' : ''}`}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Processando...
        </>
      ) : (
        children
      )}
    </button>
  );
}
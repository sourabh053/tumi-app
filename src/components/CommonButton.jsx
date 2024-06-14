import React from "react";

export default function CommonButton({
  onClick,
  children,
  wfull,
  isDisabled,
  is100,
}) {
  const style = wfull ? { width: "800px" } : is100 ? { width: "100%" } : {};
  return (
    <div className="btn-container">
      <button
        onClick={onClick}
        className="btn"
        style={style}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
}

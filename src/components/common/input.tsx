import React from "react";
import classNames from "classnames";

import "./input.scss";

interface InputProps {
  value: string;
  setter(value: string): void;
  title?: string;
  className?: string;
}

const Input = ({ value, setter, title, className }: InputProps) => (
  <section className={classNames("label-and-input", className)}>
    {title && <label className="label">{title}</label>}
    <input
      className="input"
      value={value}
      onChange={(e) => setter(e.target.value)}
    />
  </section>
);

export default Input;

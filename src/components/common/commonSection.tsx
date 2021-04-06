import classNames from "classnames";
import React from "react";

import "./common-section.scss";

interface TodoItemProps {
  label: string;
  value: string;
  className?: string;
}

const CommonSection = ({ label, value, className }: TodoItemProps) => (
  <section className={classNames("common-section", className)}>
    <label className="label">{label}</label>
    <span className="value">{value}</span>
  </section>
);

export default CommonSection;

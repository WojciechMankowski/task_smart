import React from "react";
import { LabelProps } from "../types/Props"

const Label: React.FC<LabelProps> = ({ className, content, htmlFor }) => {
    return <label className={className} htmlFor={htmlFor}>{content}</label>;
};

export default Label;
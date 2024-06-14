import React from "react";

export default function Title({
  text,
  classname,
}: {
  classname?: string;
  text: string;
}) {
  return (
    <div className={classname}>
      <h3 className="text-3xl font-bold hover:text-green-500 transition-all">
        {text}
      </h3>
      <div className="w-40 h-2 bg-green-500 rounded-full"></div>
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";

export default function Age() {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthTimestamp = new Date("2003-11-27").getTime();
    const updateAge = () => {
      const now = Date.now();
      const ageInYears = (now - birthTimestamp) / (1000 * 60 * 60 * 24 * 365.2425);
      setAge(ageInYears);
    };

    updateAge();
    const interval = setInterval(updateAge, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="tabular-nums">
      {age ? age.toFixed(10) : "22.0000000000"}
    </span>
  );
}

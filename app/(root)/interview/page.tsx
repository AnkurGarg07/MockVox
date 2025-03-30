import React from "react";
import Agent from "@/components/Agent";

const page = async () => {
  return (
    <div>
      <h3 className="mb-4">Interview Generation</h3>

      <Agent
        userName="user"
        userId="user1"
        type="generate"
      />
    </div>
  );
};

export default page;

/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from "react";
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const page = async () => {
  const user= await getCurrentUser()
  return (
    <div>
      <h3 className="mb-4">Interview Generation</h3>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        type="generate"
      />
    </div>
  );
};

export default page;

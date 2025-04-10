"use client";

import ResourceCard from "./resource-card";
import type { Resource } from "@/lib/types";

export default function   ResourceSection({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
import type { CulturalObject } from "@repo/types";

export function ObjectCardTest({ object }: { object: CulturalObject }) {
  return (
    <div>
      <h2>{object.title}</h2>
      <p>{object.description}</p>
    </div>
  );
}

import type { CulturalObject } from "@repo/types";

const API_BASE = "http://localhost:3000";

//create
export async function createCulturalObject(data: {
  title: string;
  description?: string;
}): Promise<CulturalObject> {
  const res = await fetch(`${API_BASE}/cultural-object`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Fehler beim Erstellen eines Objekts");
  return res.json();
}

//read
export async function fetchCulturalObjects(): Promise<CulturalObject[]> {
  const res = await fetch(`${API_BASE}/cultural-object`);
  if (!res.ok) throw new Error("Fehler beim Laden der Objekte");
  return res.json();
}

//update
export async function updateCulturalObject(
  id: string,
  data: {
    title?: string;
    description?: string;
  },
): Promise<CulturalObject> {
  const res = await fetch(`${API_BASE}/cultural-object/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok)
    throw new Error(`Fehler beim Aktualisieren des Objekts mit ID ${id}`);
  return res.json();
}

//delete
export async function deleteCulturalObject(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/cultural-object/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(`Fehler beim Löschen des Objekts mit ID ${id}`);
}

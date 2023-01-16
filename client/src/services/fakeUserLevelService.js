export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Admin" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Society Member" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Worker" },
  { _id: "5b21ca3eeb7f6fbccd471821", name: "Truck Driver" }
];

export function getTypes() {
  return genres.filter(g => g);
}

export async function get<T>(route: string): Promise<T> {
  const response = await fetch(`http://localhost:3001/${route}`);
  return response.json();
}

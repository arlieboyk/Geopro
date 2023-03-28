export async function GET(request) {
  const res = await fetch("http://192.168.1.95:8000/api/userlist/");
  const data = res.json();
  return new Response(" Hello, jayvie.js");
}

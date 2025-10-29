const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000';

export type RegisterPayload = { email: string; password: string };

export async function registerUser(payload: RegisterPayload) {
  const res = await fetch(`${API_BASE}/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  // cố gắng parse JSON để lấy message lỗi có nghĩa
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = (data && (data.message || data.error)) || 'Registration failed';
    throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg));
  }
  return data;
}

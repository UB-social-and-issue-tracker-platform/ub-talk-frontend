const apiUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

export const testBackend = async () => {
  const res = await fetch(`${apiUrl}/health`)
  const data = await res.json()

  console.log("data from backend: ", data)
}

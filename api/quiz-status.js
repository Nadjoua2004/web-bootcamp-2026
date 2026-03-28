export default async function handler(req, res) {
  const KV_REST_API_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!KV_REST_API_URL || !KV_REST_API_TOKEN) {
    return res.status(500).json({ 
      error: "KV environment variables are missing",
      debug: { 
        has_kv_url: !!process.env.KV_REST_API_URL,
        has_upstash_url: !!process.env.UPSTASH_REDIS_REST_URL 
      }
    });
  }

  const KV_URL = `${KV_REST_API_URL}`;
  const KV_HEADERS = {
    Authorization: `Bearer ${KV_REST_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  if (req.method === "GET") {
    try {
      // Fetch all quiz states using the standard command array format
      const response = await fetch(`${KV_URL}`, {
        method: "POST",
        headers: KV_HEADERS,
        body: JSON.stringify(["HGETALL", "quiz_states"]),
      });

      const data = await response.json();
      
      // Redis HGETALL returns [key, value, key, value...] or an object if using specific clients.
      // The Vercel KV REST response for HGETALL is usually { result: [key, value, ...] } or { result: { key: value } }
      // depending on the provider (Upstash is { result: ["id", "true", ...] or { id: "true" } }
      
      if (!data.result) return res.status(200).json({});

      // Convert result to a clean object if it's an array
      let states = {};
      if (Array.isArray(data.result)) {
        for (let i = 0; i < data.result.length; i += 2) {
          states[data.result[i]] = data.result[i + 1] === "true";
        }
      } else {
        // It's already an object
        Object.keys(data.result).forEach(key => {
          states[key] = data.result[key] === "true";
        });
      }

      return res.status(200).json(states);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    const { id, enabled, password } = req.body;

    // Direct password verification in backend
    if (password !== "mern2026") {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Store in Redis hash using the standard command array format
      await fetch(`${KV_URL}`, {
        method: "POST",
        headers: KV_HEADERS,
        body: JSON.stringify(["HSET", "quiz_states", id, String(enabled)]),
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

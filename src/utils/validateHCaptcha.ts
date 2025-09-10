export async function validateHCaptcha(response: string, ip: string | null) {
  try {
    const params = new URLSearchParams();
    params.append("response", response);
    params.append("secret", process.env.HCAPTCHA_SECRET_KEY!);

    if (ip) {
      params.append("remoteip", ip);
    }

    const res = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await res.json();

    if (data.success) {
      return { success: true };
    } else {
      console.error("hCaptcha api returns errors:", data);
      return { success: false, error: data["error-codes"] };
    }
  } catch (error) {
    console.error("hCaptcha validation exception:", error);
    return { success: false, error };
  }
}

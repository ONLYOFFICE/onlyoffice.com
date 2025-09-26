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

    return { success: data.success };
  } catch (error) {
    console.error("validateHCaptcha error:", error);
    return { success: false, error };
  }
}

export const isTestEmail = (email?: string): boolean => {
  if (!email || !process.env.CAPTCHA_SECRET_EMAILS) {
    return false;
  }

  const [localPart, domain] = email.toLowerCase().split("@");
  if (!localPart || !domain) {
    return false;
  }

  const cleanedLocalPart =
    domain === "gmail.com" ? localPart.replace(/\./g, "") : localPart;

  const cleanedEmail = `${cleanedLocalPart}@${domain}`;

  const allowed = new Set(
    process.env.CAPTCHA_SECRET_EMAILS.split(",").map((e) =>
      e.trim().toLowerCase(),
    ),
  );

  return allowed.has(cleanedEmail) || allowed.has(`@${domain}`);
};

export const validateTestEmail = async (email: string) => {
  if (!email) return;

  try {
    const res = await fetch("/api/validate-test-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();

    return data.isTestEmail === true;
  } catch (err) {
    console.error("validate-test-email error", err);
    return false;
  }
};

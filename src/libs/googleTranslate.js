export async function translateText(text, target = "fi") {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const res = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        target,
        format: "text",
      }),
    }
  );

  const data = await res.json();
  return data.data.translations[0].translatedText;
}

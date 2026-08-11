import OpenAI from "openai";

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "AI Copilot is not configured." },
      { status: 503 }
    );
  }

  const { message } = await request.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: message,
  });

  return Response.json({
    reply: response.output_text,
  });
}
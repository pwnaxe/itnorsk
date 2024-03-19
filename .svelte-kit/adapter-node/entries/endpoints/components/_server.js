import { j as json } from "../../../chunks/index.js";
async function POST({ request }) {
  const API_URL = process.env.API_URL;
  const API_TOKEN = process.env.API_TOKEN;
  const form = await request.json();
  const { email, message } = form;
  try {
    const mailResponse = await fetch(`${API_URL}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify({
        to: email,
        message
      })
    });
    if (!mailResponse.ok) {
      throw new Error("Nie udało się wysłać e-maila.");
    }
    return json({ success: true });
  } catch (error) {
    return json({ success: false, error: error.message }, { status: 500 });
  }
}
export {
  POST
};

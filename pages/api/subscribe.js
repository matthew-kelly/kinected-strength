export default async function subscribe(req, res) {
  const { email, firstName, lastName, honeypot } = req.body;

  if (honeypot) {
    return res.status(400).json({ error: "Invalid request" });
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!firstName || firstName.length < 2 || !/^[a-zA-Z]+$/.test(firstName)) {
    return res.status(400).json({ error: "First name is required" });
  }
  if (!lastName || lastName.length < 2 || !/^[a-zA-Z]+$/.test(lastName)) {
    return res.status(400).json({ error: "Last name is required" });
  }

  const newSubscriber = {
    email: email,
    fields: {
      name: firstName,
      last_name: lastName,
    },
    groups: [process.env.MAILERLITE_API_GROUP_ID],
  };

  try {
    const api = "https://connect.mailerlite.com/api/subscribers";
    const key = process.env.MAILERLITE_API_KEY || "";

    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(newSubscriber),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

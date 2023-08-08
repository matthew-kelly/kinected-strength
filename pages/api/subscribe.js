import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

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
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
  };

  try {
    // const response = await mailchimp.ping.get();
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      newSubscriber
    );
    // console.log(response, newSubscriber);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

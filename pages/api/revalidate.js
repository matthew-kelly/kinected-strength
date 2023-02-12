export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  // if (req.query.secret !== process.env.SANITY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  try {
    const paths = req.query.paths.split(",");

    console.log(paths);
    for (let i = 0; i < paths.length; i++) {
      await res.revalidate(paths[i]);
    }

    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}

// TODO: set up fallback: true, or whatever will allow blogs/events to be created/deleted

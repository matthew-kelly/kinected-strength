export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  // if (req.query.secret !== process.env.SANITY_SECRET_TOKEN) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  try {
    const paths = req.query.paths.split(",");

    console.log(paths);

    if (!paths) {
      return res.status(500).send("Error revalidating. No paths provided.");
    }

    // if more than one path, pull out the first path, revalidate it, and then revalidate the rest after
    if (paths.length > 1) {
      const [firstPath, ...restPaths] = paths;
      await res.revalidate(firstPath);
      paths = restPaths;
    }

    // Use Promise.all to revalidate all paths concurrently
    await Promise.all(paths.map((path) => res.revalidate(path)));

    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}

import { createClient } from "next-sanity";
import { sanityConfig } from "./sanityConfig";

const client = createClient(sanityConfig);
const clientCDN = createClient({ ...sanityConfig, useCdn: true });

export { client, clientCDN };

import { createClient } from "next-sanity";
import { sanityConfig } from "./sanityConfig";

const client = createClient(sanityConfig);

export { client };

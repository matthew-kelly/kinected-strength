const postFields = `
  _id,
  _updatedAt,
  publishedDate,
  title,
  description,
  mainImage,
  "blur": mainImage.asset->metadata.lqip,
  "slug": slug.current,
  "author": author->name
  `;

export const allPostsQuery = `
*[_type == "post"] | order(publishedDate desc) {
  ${postFields}
}`;

export const allPostsCountQuery = `count(*[_type == "post"])`;

export const allPostsQueryPagination = `
*[_type == "post"] | order(publishedDate desc) [0...4] {
  ${postFields}
}`;

export const allPostsQueryNextPage = `
*[_type == "post" && publishedDate < $lastPublishedDate] | order(publishedDate desc) [0...4] {
  ${postFields}
}
`;

export const postQuery = `
*[_type == "post" && slug.current == $slug] | order(publishedDate desc)[0] {
  "post": {
    ${postFields},
    body
  },
  "prevPost": *[_type == 'post' && ^.publishedDate > publishedDate]|order(publishedDate desc)[0]{ 
    "slug": slug.current, title, _id
  },
  "nextPost": *[_type == 'post' && ^.publishedDate < publishedDate]|order(publishedDate asc)[0]{ 
    "slug": slug.current, title, _id
  },
}
`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

// export const postBySlugQuery = `
// *[_type == "post" && slug.current == $slug][0] {
//   ${postFields}
// }
// `;

export const pageQuery = `
*[_type == "page" && slug.current == $slug][0] {
  ..., testimonials[]->{_id, author, content}
}
`;

const eventFields = `
  _id,
  title,
  eventDate,
  endDate,
  isOngoingEvent,
  description,
  longDescription,
  mainImage,
  "blur": mainImage.asset->metadata.lqip,
  "slug": slug.current
`;

// Also gets featured event ID from $slug
export const eventsQuery = `{
  "upcomingEvents": *[_type == "event" && !hasHappened && _id != $featuredEventId] | order(eventDate desc) {
    ${eventFields},
    body
  },
  "pastEvents": *[_type == "event" && hasHappened && _id != $featuredEventId] | order(eventDate desc) {
    ${eventFields},
    body
  }
}`;
// `{
//   "events": *[_type == "event"] | order(eventDate desc) {..., testimonials[]->, featuredEvent->{${eventFields}}},
//   "featuredEventId": *[_type == "page" && slug.current == "community"][0].featuredEvent->_id
// }`

export const eventsSlugsQuery = `
*[_type == "event" && defined(slug.current)][].slug.current
`;

export const eventQuery = `
*[_type == "event" && slug.current == $slug][0] {
  ${eventFields},
  body
}
`;

export const eventQueryById = `
*[_type == "event" && _id == $id][0] {
  ${eventFields},
  body
}
`;

export const featuredEventQuery = `
*[_type == "page" && slug.current == "community"][0].featuredEvent->{
  ${eventFields},
  body
}
`;

export const testimonialsQuery = `
*[_type == "page" && slug.current == $slug][0] {
  ...,
  testimonials[]->
}
`;

export const authorsQuery = `
*[_type == "author"] {_id, name, headline, bio, image, "blur": image.asset->metadata.lqip}
`;

export const popupQuery = `
*[_type == "popup"][0]
`;

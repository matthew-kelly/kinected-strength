const postFields = `
  _id,
  _createdAt,
  title,
  description,
  mainImage,
  "blur": mainImage.asset->metadata.lqip,
  "slug": slug.current,
  "author": author->name
  `;

export const allPostsQuery = `
*[_type == "post"] | order(_createdAt desc) {
  ${postFields}
}`;

export const allPostsCountQuery = `count(*[_type == "post"])`;

export const allPostsQueryPagination = `
*[_type == "post"] | order(_createdAt desc) [0...4] {
  ${postFields}
}`;

export const allPostsQueryNextPage = `
*[_type == "post" && _createdAt < $lastCreatedAt] | order(_createdAt desc) [0...4] {
  ${postFields}
}
`;

export const postQuery = `
*[_type == "post" && slug.current == $slug] | order(_createdAt desc)[0] {
  "post": {
    ${postFields},
    body
  },
  "prevPost": *[_type == 'post' && ^._createdAt > _createdAt]|order(_createdAt desc)[0]{ 
    "slug": slug.current, title, _id
  },
  "nextPost": *[_type == 'post' && ^._createdAt < _createdAt]|order(_createdAt asc)[0]{ 
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
  description,
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

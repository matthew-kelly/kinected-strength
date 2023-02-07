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
    body,
    ${postFields}
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

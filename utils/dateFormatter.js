export function dateFormatter(dateString, options = false) {
  let date = new Date(dateString.split("-").join("/"));
  const dateOptions = options
    ? options
    : {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
  let formatted = date.toLocaleDateString("en-US", dateOptions);
  if (formatted === "Invalid Date") {
    date = new Date(dateString);
    formatted = date.toLocaleDateString("en-US", dateOptions);
  }
  return formatted;
}

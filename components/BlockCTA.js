import ButtonLink from "./ButtonLink";

export default function BlockCTA({ value }) {
  return (
    <ButtonLink
      href={value.href}
      target={value.external ? "_blank" : "_self"}
      className={`not-prose my-4 
          ${value.alignment === "center" ? "mx-auto" : "ml-0 mr-auto"}
        `}
      variant={`large
          ${value.variant === "default" ? "" : value.variant}`}
    >
      {value.label}
    </ButtonLink>
  );
}

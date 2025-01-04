import ButtonLink from "./ButtonLink";

export default function ServiceTextBlock({
  title,
  subtitle,
  body,
  link = undefined,
  linkText = undefined,
  newTab = false,
  buttonClass = "",
}) {
  return (
    <div className="lg:max-w-lg md:max-w-sm">
      <h3 className="font-extrabold md:text-5xl text-4xl md:mb-4 mb-2">
        {title}
      </h3>
      <h4 className="font-semibold text-lg mb-2">{subtitle}</h4>
      <p>{body}</p>
      {link && linkText && (
        <ButtonLink
          href={link}
          target={newTab ? "_blank" : "_self"}
          className="mt-4"
          variant={buttonClass}
        >
          {linkText}
        </ButtonLink>
      )}
    </div>
  );
}

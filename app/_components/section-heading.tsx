type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.22em] ${
            invert ? "text-[var(--rt-yellow)]" : "text-[var(--rt-green-2)]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`${eyebrow ? "mt-4" : ""} text-3xl font-extrabold tracking-[-0.04em] sm:text-[2.15rem] lg:text-[2.4rem] ${
          invert ? "text-white" : "text-[var(--rt-green)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-[1.0625rem] sm:leading-8 ${
            align === "center" ? "mx-auto" : ""
          } ${
            invert
              ? "text-white/78"
              : "text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

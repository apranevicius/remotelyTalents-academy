import Image from "next/image";

type TrustAvatar = {
  src: string;
  alt: string;
};

type HomeTrustStripProps = {
  rating: string;
  message: string;
  avatars: readonly TrustAvatar[];
};

export function HomeTrustStrip({
  rating,
  message,
  avatars,
}: HomeTrustStripProps) {
  return (
    <div className="relative z-10 -mt-8 px-6 sm:-mt-10 sm:px-10 lg:-mt-12 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[color:rgba(4,61,49,0.08)] bg-white px-5 py-4 shadow-[0_20px_42px_rgba(4,61,49,0.08)] sm:px-7 sm:py-5">
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <div className="hidden shrink-0 items-center justify-center sm:flex">
              {avatars.map((avatar, index) => (
                <div
                  key={avatar.src}
                  className={`relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-[0_8px_18px_rgba(4,61,49,0.08)] ${
                    index === 0 ? "" : "-ml-3"
                  }`}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-1.5 text-center sm:items-start sm:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="inline-flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#00b67a] text-[13px] font-bold text-white"
                  >
                    ★
                  </span>
                ))}
                <p className="text-[0.98rem] font-semibold leading-6 tracking-[-0.02em] text-[var(--rt-green)] sm:text-[1.02rem]">
                  {rating}
                </p>
              </div>
              <p className="max-w-[38rem] text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)]">
                {message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

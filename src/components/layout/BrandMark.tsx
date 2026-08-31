import { SITE } from "@/constants/site";

export function BrandMark() {
  return (
    <div className="relative grid h-10.5 w-10.5 flex-none place-items-center overflow-hidden rounded-[11px] bg-ink">
      <span className="text-[15px] font-bold tracking-[-0.5px] text-white">
        {SITE.initials}
      </span>
      <span
        aria-hidden="true"
        className="animate-sweep absolute inset-0 bg-[linear-gradient(100deg,transparent_40%,rgba(255,255,255,0.55)_50%,transparent_60%)]"
      />
    </div>
  );
}

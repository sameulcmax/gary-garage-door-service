import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps, children: ReactNode) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (props: IconProps) =>
  base(
    props,
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92z" />
  );

export const ArrowRight = (props: IconProps) =>
  base(props, <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);

export const ArrowUpRight = (props: IconProps) =>
  base(props, <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>);

export const ArrowUp = (props: IconProps) =>
  base(props, <><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></>);

export const InstagramIcon = (props: IconProps) =>
  base(
    props,
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  );

export const TikTokIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M19.6 7.1a6.6 6.6 0 0 1-4.1-1.4v9.1a6.1 6.1 0 1 1-5.3-6V12a2.8 2.8 0 1 0 2.1 2.7V2h3.2c.2 2 1.8 3.6 4.1 3.8v1.3Z" />
  </svg>
);

export const WhatsAppIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="M20.5 11.7a8.6 8.6 0 0 1-12.7 7.6L3 20.5l1.3-4.6a8.6 8.6 0 1 1 16.2-4.2Z" />
      <path d="M8.8 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.6.7c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.8 1.8.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.1.7-1.8.6-.7-.1-1.6-.4-2.8-1-2.1-1.1-3.5-3.2-3.6-3.4-.1-.2-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8Z" />
    </>
  );

export const ChevronDown = (props: IconProps) => base(props, <path d="m6 9 6 6 6-6" />);

export const MenuIcon = (props: IconProps) =>
  base(props, <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>);

export const CloseIcon = (props: IconProps) =>
  base(props, <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>);

export const CheckIcon = (props: IconProps) => base(props, <path d="m4 12.5 5 5L20 6.5" />);

export const MapPinIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  );

export const HomeIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="m3 10.5 9-7 9 7V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
      <path d="M9 21v-7h6v7" />
    </>
  );

export const GarageIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M7 21v-9h10v9" />
      <path d="M7 15h10" />
      <path d="M7 18h10" />
    </>
  );

export const WrenchIcon = (props: IconProps) =>
  base(
    props,
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
  );

export const RemoteIcon = (props: IconProps) =>
  base(
    props,
    <>
      <rect x="7" y="2" width="10" height="20" rx="3" />
      <path d="M10 6h4" />
      <circle cx="12" cy="11" r="1.2" />
      <path d="M10 16h4" />
    </>
  );

export const ShutterIcon = (props: IconProps) =>
  base(
    props,
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 8h18M3 12h18M3 16h18" />
    </>
  );

export const BuildingIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
      <path d="M15 9h3a2 2 0 0 1 2 2v10" />
      <path d="M8 7h3M8 11h3M8 15h3" />
      <path d="M2 21h20" />
    </>
  );

export const ShieldIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  );

export const InfoIcon = (props: IconProps) =>
  base(
    props,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </>
  );

export const CopyIcon = (props: IconProps) =>
  base(
    props,
    <>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </>
  );

export const SearchIcon = (props: IconProps) =>
  base(
    props,
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  );

export const LayersIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  );

export const SlidersIcon = (props: IconProps) =>
  base(
    props,
    <>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h10M18 18h2" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="16" cy="18" r="2" />
    </>
  );

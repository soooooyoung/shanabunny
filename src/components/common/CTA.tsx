import Link from "next/link";
import { CallToActionType, LinkOrButton } from "@/shared/types";

const CTA = ({
  callToAction,
  containerClass,
  linkClass,
  iconClass,
}: LinkOrButton) => {
  const {
    text,
    href,
    icon: Icon,
    targetBlank,
  } = callToAction as CallToActionType;

  return (
    <>
      {href && (text || Icon) && (
        <div>
          {targetBlank ? (
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {Icon && <Icon />}
              {text}
            </Link>
          ) : (
            <Link href={href}>
              {Icon && <Icon />}
              {text}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;

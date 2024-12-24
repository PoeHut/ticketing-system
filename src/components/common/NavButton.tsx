import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { INavButton } from "@/types";

const NavButton = ({ icon: Icon, label, href }: INavButton) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
};

export default NavButton;

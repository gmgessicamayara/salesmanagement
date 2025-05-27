import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu: React.FC = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">Sales Management</p>
      <ul className="menu-list">
        <MenuItem href="/" label="Home" />
        <MenuItem href="/searches/products" label="Products" />
        <MenuItem href="/searches/customers" label="Customers" />
        <MenuItem href="/catalogs/sales/new-sale" label="Sales" />
      </ul>
    </aside>
  );
};

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
  return (
    <li>
      <Link href={props.href}>
        <span className="icon"></span> {props.label}
      </Link>
    </li>
  );
};

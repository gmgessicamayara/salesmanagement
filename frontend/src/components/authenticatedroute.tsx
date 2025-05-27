import { Loader } from "app/models/common";
import { signIn, useSession } from "next-auth/react";

interface AuthenticatedRouteProps {
  children: React.ReactNode;
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
}) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div>
        <Loader show />
      </div>
    );
  }
  if (!session) {
    signIn();
    return null;
  }

  return <>{children}</>;
};

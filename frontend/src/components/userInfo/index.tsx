import { signOut, useSession } from "next-auth/react";

export const UserInfo: React.FC = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (!session) return null;

  return (
    <div
      className="is-flex is-align-items-center is-justify-content-flex-end"
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 1000,
      }}
    >
      <div className="mr-3 has-text-right">
        <p className="has-text-weight-semibold">
          {" "}
          Welcome: {session.user?.name}
        </p>
        <p className="is-size-7 has-text-grey">{session.user?.email}</p>
      </div>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="Avatar"
          className="image is-32x32 is-rounded mr-2"
          style={{ borderRadius: "50%" }}
        />
      )}
      <button
        onClick={handleSignOut}
        className="button is-small is-light is-danger ml-2"
      >
        Sign Out
      </button>
    </div>
  );
};
export default UserInfo;

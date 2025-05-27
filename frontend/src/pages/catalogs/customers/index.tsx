import { CustomerRegistration } from "components";
import { AuthenticatedRoute } from "components";

export default function CustomerRegistrationPage() {
  return (
    <AuthenticatedRoute>
      <CustomerRegistration />
    </AuthenticatedRoute>
  );
}

import { ProductRegistration } from "components";
import { AuthenticatedRoute } from "components";

export default function ProductRegistrationPage() {
  return (
    <AuthenticatedRoute>
      <ProductRegistration />
    </AuthenticatedRoute>
  );
}

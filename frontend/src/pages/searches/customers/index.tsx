import { CustomerList } from "components";
import { AuthenticatedRoute } from "components";

export default function CustomerListPage() {
  return (
    <AuthenticatedRoute>
      <CustomerList />
    </AuthenticatedRoute>
  );
}

import { Sales } from "components";
import { AuthenticatedRoute } from "components";

export default function SalesPage() {
  return (
    <AuthenticatedRoute>
      <Sales />
    </AuthenticatedRoute>
  );
}

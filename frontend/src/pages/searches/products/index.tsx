import { ProductList } from "components";
import { AuthenticatedRoute } from "components";

export default function ProductListPage() {
  return (
    <AuthenticatedRoute>
      <ProductList />
    </AuthenticatedRoute>
  );
}

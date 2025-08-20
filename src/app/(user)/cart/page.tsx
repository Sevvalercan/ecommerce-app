import ProtectedRoute from "@/components/ProtectedRoute";

export default function CartPage() {
  return (
    <ProtectedRoute>
      <h1>Sepetiniz</h1>
      {/* cart itemleri burada listelenecek */}
    </ProtectedRoute>
  );
}

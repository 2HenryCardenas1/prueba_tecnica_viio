import PrivateRoute from "@/components/PrivateRoute";

export default function SearchPage() {
  return (
    <PrivateRoute>
      <div>SearchPage</div>;
    </PrivateRoute>
  );
}

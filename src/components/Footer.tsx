export default function Footer() {
  return (
    <>
      <div className="p-4 text-sm text-center text-gray-800 bg-gray-100 border-t border-gray-200">
        © {new Date().getFullYear()} LunchBox. Tous droits réservés.
      </div>
    </>
  );
}

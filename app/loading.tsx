export default function Loading() {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#FDF8F2]
      "
    >
      <div className="text-center">
        <div
          className="
            w-16
            h-16
            border-4
            border-orange-200
            border-t-orange-600
            rounded-full
            animate-spin
            mx-auto
          "
        />

        <p className="mt-5 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}
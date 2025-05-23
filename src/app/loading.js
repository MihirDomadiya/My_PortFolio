export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="logo text-6xl rotate text-white">M</div>
      <div className="mt-8 w-48 h-0.5 bg-gray-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-white animate-progress"></div>
      </div>
    </div>
  )
}
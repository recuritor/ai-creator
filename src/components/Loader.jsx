export default function Loader({ text = "Greywave is thinking..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
      <p className="text-sm text-blue-400">{text}</p>
    </div>
  );
}

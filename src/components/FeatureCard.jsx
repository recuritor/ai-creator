export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-[#0F1623] border border-gray-700 rounded-2xl p-8 text-center">
      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
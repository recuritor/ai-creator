export default function SectionWrapper({ children }) {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
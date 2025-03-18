export default function StatsSection() {
  const stats = [
    { number: "10K+", label: "Happy Roommates" },
    { number: "500K+", label: "Bills Split" },
    { number: "1M+", label: "Tasks Completed" },
    { number: "100%", label: "Satisfaction Guarantee" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

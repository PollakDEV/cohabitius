import Image from "next/image";

const FEATURES = [
  {
    icon: "/icons/expense.svg",
    title: "Expense Tracking",
    text: "Split bills automatically and track who owes what"
  },
  {
    icon: "/icons/tasks.svg",
    title: "Task Management",
    text: "Assign chores and track completion"
  },
  {
    icon: "/icons/inventory.svg",
    title: "Smart Inventory",
    text: "Track shared items and get low-stock alerts"
  },
  {
    icon: "/icons/sync.svg",
    title: "Real-Time Sync",
    text: "Instant updates for all roommates"
  }
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Everything You Need for Shared Living</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, index) => (
          <div 
            key={index} 
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 p-3 bg-purple-200 rounded-lg inline-block">
              <Image 
                src={feature.icon} 
                alt={feature.title} 
                width={36} 
                height={36}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

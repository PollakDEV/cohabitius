export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Cohabitius completely transformed how we manage our shared house. No more awkward money conversations!",
      author: "Sarah Johnson",
      role: "User since 2023"
    },
    {
      text: "The task management system is a game-changer. We've never been this organized!",
      author: "Mike Chen",
      role: "Student House"
    },
    {
      text: "Finally an app that understands shared living. The inventory tracking saved us from running out of toilet paper!",
      author: "Emma Wilson",
      role: "Professional Co-Living"
    }
  ];

  return (
    <section className="bg-purple-50 pt-16 pb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
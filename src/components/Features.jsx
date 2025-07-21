const Features = () => {
    const features = [
        {
            icon: "⚡",
            title: "Instant Transfers",
            desc: "Get your money in minutes, not days."
        },
        {
            icon: "🔒",
            title: "Bank-Level Security",
            desc: "Your funds are always protected."
        },
        {
            icon: "💎",
            title: "Best Rates",
            desc: "We beat banks and competitors."
        }
    ];
    
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
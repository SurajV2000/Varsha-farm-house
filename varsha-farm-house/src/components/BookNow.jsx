import { Phone, MessageCircle } from "lucide-react";

const BookNow = () => {

    const message = encodeURIComponent(
        "👋 Hi Varsha Farm House!\n\nI want to book your farm house.\nPlease share availability, pricing, and details.\n\nThank you!"
    );

    const whatsappNumber = "919892550316";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <section className="py-16 bg-amber-50">
            <div className="container mx-auto px-4 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Plan Your <span className="text-amber-600">Perfect Stay</span>
                </h2>

                <p className="text-gray-600 max-w-xl mx-auto mb-8">
                    Book your stay at Varsha Farm House and enjoy nature, food, and peace all in one place.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    {/* Call */}
                    <a
                        href="tel:+919892550316"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition shadow-md"
                    >
                        <Phone size={18} />
                        Call Now
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition"
                    >
                        <MessageCircle size={18} />
                        WhatsApp Booking
                    </a>

                </div>

            </div>
        </section>
    );
};

export default BookNow;

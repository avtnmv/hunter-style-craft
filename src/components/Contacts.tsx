import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адреса",
    value: "м. Київ, вул. Промислова, 25",
  },
  {
    icon: Phone,
    title: "Телефон",
    value: "+380 99 123 45 67",
    href: "tel:+380991234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@hunters-garage.ua",
    href: "mailto:info@hunters-garage.ua",
  },
  {
    icon: Clock,
    title: "Графік роботи",
    value: "Пн-Сб: 9:00 - 20:00",
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            Зв'яжіться з нами
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            <span className="text-primary">КОНТАКТИ</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card border border-border p-6 group hover:border-primary transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-foreground font-bold mb-2 uppercase tracking-wide text-sm">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border p-8"
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 uppercase">
              Залишити заявку
            </h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ваше ім'я"
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Опишіть проблему"
                  className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-neon-glow transition-all duration-300 box-glow"
              >
                Надіслати заявку
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

import { motion } from "framer-motion";
import { Wrench, Settings, Zap, Shield, Car, Gauge } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Ремонт двигуна",
    description: "Капітальний та поточний ремонт двигунів усіх типів",
  },
  {
    icon: Settings,
    title: "Ремонт КПП",
    description: "Діагностика та ремонт механічних і автоматичних КПП",
  },
  {
    icon: Zap,
    title: "Електрика",
    description: "Діагностика та ремонт електрообладнання автомобіля",
  },
  {
    icon: Shield,
    title: "Ходова частина",
    description: "Ремонт підвіски, рульового управління, гальмівної системи",
  },
  {
    icon: Car,
    title: "Кузовні роботи",
    description: "Кузовний ремонт та фарбування будь-якої складності",
  },
  {
    icon: Gauge,
    title: "Діагностика",
    description: "Комп'ютерна діагностика всіх систем автомобіля",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            Що ми пропонуємо
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            НАШІ <span className="text-primary">ПОСЛУГИ</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-secondary p-8 border border-border hover:border-primary transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

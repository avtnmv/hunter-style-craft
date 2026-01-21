import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Понад 10 років досвіду",
  "Сертифіковані майстри",
  "Оригінальні запчастини",
  "Гарантія на всі роботи",
  "Сучасне обладнання",
  "Прозоре ціноутворення",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
              Про нас
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              ЧОМУ <span className="text-primary">ОБИРАЮТЬ НАС</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Hunter's Garage — це команда професіоналів, яка спеціалізується на
              ремонті та обслуговуванні автомобілів. Ми використовуємо лише
              сучасне обладнання та оригінальні запчастини, щоб забезпечити
              найвищу якість сервісу.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border p-8 text-center">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary text-glow">
                  10+
                </span>
                <p className="text-muted-foreground mt-2 uppercase text-sm tracking-wide">
                  Років досвіду
                </p>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary text-glow">
                  5K+
                </span>
                <p className="text-muted-foreground mt-2 uppercase text-sm tracking-wide">
                  Задоволених клієнтів
                </p>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary text-glow">
                  15
                </span>
                <p className="text-muted-foreground mt-2 uppercase text-sm tracking-wide">
                  Спеціалістів
                </p>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <span className="text-5xl md:text-6xl font-heading font-bold text-primary text-glow">
                  24/7
                </span>
                <p className="text-muted-foreground mt-2 uppercase text-sm tracking-wide">
                  Підтримка
                </p>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Garage background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <Wrench className="w-6 h-6 text-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              Професійний автосервіс
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground leading-none mb-6"
          >
            HUNTER'S
            <br />
            <span className="text-primary text-glow">GARAGE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          >
            Професійний ремонт та обслуговування автомобілів будь-якої складності.
            Досвід, якість, гарантія результату.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-neon-glow transition-all duration-300 box-glow"
            >
              Наші послуги
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Зв'язатися
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

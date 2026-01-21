import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, category: "Ремонт двигуна" },
  { id: 2, category: "Ходова частина" },
  { id: 3, category: "Кузовні роботи" },
  { id: 4, category: "Діагностика" },
  { id: 5, category: "Електрика" },
  { id: 6, category: "КПП" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            Наші роботи
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            <span className="text-primary">ГАЛЕРЕЯ</span> РОБІТ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] bg-secondary border border-border overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-primary/30 font-heading text-2xl">{item.id}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-sm uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

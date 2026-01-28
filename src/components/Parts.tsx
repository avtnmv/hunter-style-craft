import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Search, Truck, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: Search,
    title: "Швидкий підбір",
    description: "Знаходимо потрібну запчастину за VIN-кодом або характеристиками",
  },
  {
    icon: Package,
    title: "Оригінал та аналоги",
    description: "Пропонуємо як оригінальні запчастини, так і якісні аналоги",
  },
  {
    icon: Truck,
    title: "Швидка доставка",
    description: "Доставка по Києву 1-2 дні, по Україні 2-5 днів",
  },
  {
    icon: ShieldCheck,
    title: "Гарантія якості",
    description: "Надаємо гарантію на всі запчастини від постачальників",
  },
];

const Parts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    partDescription: "",
    vinCode: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.phone || !formData.partDescription) {
      toast({
        title: "Помилка",
        description: "Будь ласка, заповніть обов'язкові поля",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Заявку відправлено!",
      description: "Ми зв'яжемося з вами найближчим часом",
    });
    
    setIsOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      partDescription: "",
      vinCode: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="parts" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            Автозапчастини
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            ПРОДАЖ ТА ПІДБІР <span className="text-primary">ЗАПЧАСТИН</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Підберемо та доставимо будь-які запчастини для вашого автомобіля. 
            Працюємо з оригінальними деталями та перевіреними аналогами.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-secondary p-6 border border-border hover:border-primary transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-primary-foreground px-10 py-6 text-lg font-bold uppercase tracking-wide hover:bg-neon-glow transition-all duration-300 box-glow rounded-none"
          >
            Підібрати запчастини
          </Button>
        </motion.div>
      </div>

      {/* Modal Form */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-card border-border sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold text-foreground uppercase">
              Заявка на підбір запчастин
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Заповніть форму і ми підберемо потрібні запчастини для вашого авто
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground">
                  Ім'я <span className="text-primary">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Введіть ім'я"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground">
                  Прізвище
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Введіть прізвище"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Телефон <span className="text-primary">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+380 XX XXX XX XX"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vinCode" className="text-foreground">
                VIN-код автомобіля
              </Label>
              <Input
                id="vinCode"
                name="vinCode"
                value={formData.vinCode}
                onChange={handleChange}
                placeholder="Наприклад: WVWZZZ3CZWE123456"
                maxLength={17}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-none uppercase"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="partDescription" className="text-foreground">
                Яка запчастина потрібна? <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="partDescription"
                name="partDescription"
                value={formData.partDescription}
                onChange={handleChange}
                placeholder="Опишіть яку запчастину шукаєте, марку та модель авто..."
                rows={4}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded-none resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-6 font-bold uppercase tracking-wide hover:bg-neon-glow transition-all duration-300 box-glow rounded-none"
            >
              Надіслати заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Parts;

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Скільки часу займає діагностика автомобіля?",
    answer:
      "Комп'ютерна діагностика займає від 30 хвилин до 1 години, залежно від складності систем автомобіля. Повна діагностика з перевіркою всіх вузлів може тривати до 2-3 годин.",
  },
  {
    question: "Чи надаєте ви гарантію на виконані роботи?",
    answer:
      "Так, ми надаємо гарантію на всі виконані роботи від 6 до 12 місяців залежно від типу послуги. На встановлені запчастини діє гарантія виробника.",
  },
  {
    question: "Чи можна залишити авто на ремонт на кілька днів?",
    answer:
      "Так, у нас є охоронювана стоянка для автомобілів клієнтів. Ви можете залишити авто на весь період ремонту абсолютно безкоштовно.",
  },
  {
    question: "Як відбувається підбір запчастин?",
    answer:
      "Ви залишаєте заявку з VIN-кодом автомобіля та описом потрібної запчастини. Наші спеціалісти підбирають оригінальні деталі або якісні аналоги, узгоджують ціну та терміни доставки.",
  },
  {
    question: "Чи працюєте ви з корпоративними клієнтами?",
    answer:
      "Так, ми співпрацюємо з автопарками та компаніями. Пропонуємо спеціальні умови обслуговування, договірні ціни та пріоритетний сервіс для корпоративних клієнтів.",
  },
  {
    question: "Які марки автомобілів ви обслуговуєте?",
    answer:
      "Ми спеціалізуємось на європейських, японських та корейських автомобілях. Також працюємо з американськими авто. Для уточнення деталей зв'яжіться з нами.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">
            Часті питання
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            <span className="text-primary">FAQ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border bg-secondary px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline hover:text-primary py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

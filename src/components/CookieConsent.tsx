import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay before showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto">
            <div className="bg-card border border-border p-6 shadow-xl max-w-4xl mx-auto relative">
              <button
                onClick={acceptNecessary}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Закрити"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-8">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  🍪 Ми використовуємо cookie
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Наш сайт використовує cookie-файли для забезпечення належної роботи, 
                  аналізу відвідуваності та персоналізації реклами. Натискаючи «Прийняти всі», 
                  ви погоджуєтесь з використанням усіх типів cookie. Детальніше у{" "}
                  <Link 
                    to="/privacy-policy" 
                    className="text-primary hover:underline"
                  >
                    Політиці конфіденційності
                  </Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={acceptAll}
                    className="bg-primary text-primary-foreground font-bold uppercase tracking-wide hover:bg-neon-glow transition-all duration-300 rounded-none"
                  >
                    Прийняти всі
                  </Button>
                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    className="border-border text-foreground hover:border-primary hover:text-primary rounded-none"
                  >
                    Лише необхідні
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Gorilla Drive" className="h-12 w-auto" />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              На головну
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
            Політика конфіденційності
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <p className="text-foreground">
                Ця Політика конфіденційності описує, як Gorilla Drive (далі —
                «ми», «нас» або «Компанія») збирає, використовує та захищає
                персональні дані відвідувачів веб-сайту gorilla-drive.ua (далі —
                «Сайт»).
              </p>
              <p>
                Політика розроблена відповідно до Закону України «Про захист
                персональних даних» від 01.06.2010 № 2297-VI, Загального
                регламенту захисту даних (GDPR) Європейського Союзу та інших
                застосовних нормативно-правових актів.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                1. Які дані ми збираємо
              </h2>
              <p>Ми можемо збирати такі категорії персональних даних:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Контактні дані:</strong>{" "}
                  ім'я, номер телефону, адреса електронної пошти
                </li>
                <li>
                  <strong className="text-foreground">
                    Дані про автомобіль:
                  </strong>{" "}
                  VIN-код, марка, модель, рік випуску
                </li>
                <li>
                  <strong className="text-foreground">Технічні дані:</strong>{" "}
                  IP-адреса, тип браузера, операційна система, дані cookie-файлів
                </li>
                <li>
                  <strong className="text-foreground">Дані звернень:</strong>{" "}
                  зміст повідомлень, заявок на послуги та підбір запчастин
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                2. Мета обробки персональних даних
              </h2>
              <p>Ми обробляємо ваші персональні дані для:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Надання послуг з ремонту та обслуговування автомобілів</li>
                <li>Підбору та продажу автозапчастин</li>
                <li>Зв'язку з вами щодо ваших звернень та заявок</li>
                <li>
                  Інформування про акції, новини та спеціальні пропозиції (за
                  вашою згодою)
                </li>
                <li>Покращення якості наших послуг та роботи Сайту</li>
                <li>Виконання вимог законодавства України</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                3. Правові підстави обробки
              </h2>
              <p>
                Обробка персональних даних здійснюється на таких правових
                підставах:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Згода:</strong> ви надаєте
                  згоду на обробку даних при заповненні форм на Сайті
                </li>
                <li>
                  <strong className="text-foreground">Договір:</strong> обробка
                  необхідна для виконання договору про надання послуг
                </li>
                <li>
                  <strong className="text-foreground">Законний інтерес:</strong>{" "}
                  покращення сервісу, захист від шахрайства
                </li>
                <li>
                  <strong className="text-foreground">Юридичний обов'язок:</strong>{" "}
                  виконання вимог законодавства
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                4. Зберігання та захист даних
              </h2>
              <p>
                Ми вживаємо організаційних та технічних заходів для захисту ваших
                персональних даних від несанкціонованого доступу, втрати,
                знищення або розголошення:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Шифрування даних при передачі (SSL/TLS)</li>
                <li>Обмежений доступ до персональних даних</li>
                <li>Регулярне оновлення систем безпеки</li>
                <li>Навчання персоналу правилам захисту даних</li>
              </ul>
              <p className="mt-3">
                Персональні дані зберігаються протягом терміну, необхідного для
                досягнення мети обробки, але не менше термінів, встановлених
                законодавством України.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                5. Передача даних третім особам
              </h2>
              <p>Ми можемо передавати ваші дані:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Постачальникам запчастин — для виконання замовлень (лише
                  необхідний мінімум даних)
                </li>
                <li>Службам доставки — для доставки замовлень</li>
                <li>
                  Державним органам — у випадках, передбачених законодавством
                </li>
              </ul>
              <p className="mt-3">
                Ми не продаємо та не передаємо ваші персональні дані третім
                особам для маркетингових цілей без вашої явної згоди.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                6. Ваші права
              </h2>
              <p>
                Відповідно до законодавства України та GDPR, ви маєте такі права:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Право на доступ:</strong>{" "}
                  отримати інформацію про ваші дані, які ми обробляємо
                </li>
                <li>
                  <strong className="text-foreground">
                    Право на виправлення:
                  </strong>{" "}
                  вимагати виправлення неточних даних
                </li>
                <li>
                  <strong className="text-foreground">Право на видалення:</strong>{" "}
                  вимагати видалення ваших даних («право бути забутим»)
                </li>
                <li>
                  <strong className="text-foreground">
                    Право на обмеження обробки:
                  </strong>{" "}
                  обмежити способи використання ваших даних
                </li>
                <li>
                  <strong className="text-foreground">
                    Право на перенесення даних:
                  </strong>{" "}
                  отримати ваші дані у структурованому форматі
                </li>
                <li>
                  <strong className="text-foreground">Право на заперечення:</strong>{" "}
                  заперечити проти обробки ваших даних
                </li>
                <li>
                  <strong className="text-foreground">Право відкликати згоду:</strong>{" "}
                  відкликати раніше надану згоду на обробку
                </li>
              </ul>
              <p className="mt-3">
                Для реалізації своїх прав зв'яжіться з нами за контактами,
                вказаними нижче.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                7. Cookie-файли
              </h2>
              <p>
                Наш Сайт використовує cookie-файли для забезпечення належного
                функціонування, аналізу відвідуваності та покращення
                користувацького досвіду. Ви можете налаштувати свій браузер для
                відмови від cookie, проте це може вплинути на функціональність
                Сайту.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                8. Зміни до Політики
              </h2>
              <p>
                Ми можемо оновлювати цю Політику конфіденційності. Актуальна
                версія завжди доступна на цій сторінці. Рекомендуємо періодично
                переглядати Політику для ознайомлення зі змінами.
              </p>
              <p className="mt-3">
                Дата останнього оновлення: {new Date().toLocaleDateString("uk-UA")}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                9. Контактна інформація
              </h2>
              <p>
                З питань обробки персональних даних звертайтесь:
              </p>
              <ul className="list-none space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Адреса:</strong> м. Київ,
                  вул. Промислова, 25
                </li>
                <li>
                  <strong className="text-foreground">Телефон:</strong>{" "}
                  <a
                    href="tel:+380991234567"
                    className="text-primary hover:underline"
                  >
                    +380 99 123 45 67
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href="mailto:info@hunters-garage.ua"
                    className="text-primary hover:underline"
                  >
                    info@hunters-garage.ua
                  </a>
                </li>
              </ul>
            </section>

            <section className="border-t border-border pt-8 mt-8">
              <p className="text-sm">
                Використовуючи наш Сайт та надаючи свої персональні дані, ви
                підтверджуєте, що ознайомились з цією Політикою конфіденційності
                та погоджуєтесь з її умовами.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

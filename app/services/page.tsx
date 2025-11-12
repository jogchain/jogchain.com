// Services overview
import services from "@/content/services.json";

type Service = {
  id: number;
  name: string;
  description: string;
  icon?: string;
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center px-8 py-24 text-center sm:px-12 sm:py-32">

        {/* ====== Header ====== */}
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12">
          We specialize in delivering innovative solutions to help your business grow.
        </p>

        {/* ====== Services Grid ====== */}
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: Service) => (
            <div
              key={service.id}
              className="flex flex-col items-center justify-start rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              {service.icon && (
                <div className="text-5xl text-blue-600 mb-4">
                  <i className={service.icon}></i>
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

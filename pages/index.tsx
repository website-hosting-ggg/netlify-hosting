import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Benvenuti in Negozio Locale</h1>
          <p className="text-lg mt-2">Il tuo negozio di fiducia nel quartiere</p>
        </div>
      </header>

      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Chi siamo</h2>
          <p className="max-w-xl mx-auto text-lg">
            Offriamo prodotti locali e servizi di qualità dal 1999. Vieni a trovarci per scoprire offerte speciali e la nostra gamma di articoli selezionati.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">I nostri servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">Prodotti freschi</h3>
              <p>Frutta e verdura di stagione da fornitori locali.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">Servizio a domicilio</h3>
              <p>Consegna rapida in tutta la zona, anche in giornata.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg mb-2">Assistenza clienti</h3>
              <p>Siamo sempre disponibili per consigli e supporto.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white p-6 mt-10 text-center">
        <p>&copy; 2025 Negozio Locale. Tutti i diritti riservati.</p>
        <p>Via Esempio 123, Città, CAP - Tel: 0123 456789</p>
      </footer>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, Instagram, MapPin, Menu, Phone, Star, UtensilsCrossed, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_NUMBER = "258864311529";
const whatsappLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const dishes = [
  {
    name: "Frango Grelhado à Dastan",
    description: "Frango grelhado, arroz aromático, legumes salteados e molho da casa.",
    price: "1999 MT",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bife com Batata Rústica",
    description: "Bife tenro grelhado no ponto, batatas rústicas e salada fresca.",
    price: "850 MT",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Camarão à Dastan",
    description: "Camarão salteado com ervas, arroz de coco e legumes da estação.",
    price: "950 MT",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleReservation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const people = String(formData.get("people") || "").trim();

    const message = [
      "Olá! Gostaria de solicitar uma reserva no Dastan Restaurante.",
      "",
      "👤 Nome: " + name,
      "📞 Telefone: " + phone,
      "📅 Data: " + date,
      "👥 Pessoas: " + people,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#251b16]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1f3a]/95 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="font-serif text-2xl font-bold tracking-wide">
            Dastan <span className="text-[#d6a85d]">Restaurante</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#inicio" className="transition hover:text-[#d6a85d]">Início</a>
            <a href="#sobre" className="transition hover:text-[#d6a85d]">Sobre nós</a>
            <a href="#video" className="transition hover:text-[#d6a85d]">Vídeo</a>
            <a href="#menu" className="transition hover:text-[#d6a85d]">Menu</a>
            <a href="#contactos" className="transition hover:text-[#d6a85d]">Contactos</a>
          </nav>
          <a href="#reservas" className="hidden rounded-full bg-[#d6a85d] px-5 py-2.5 text-sm font-bold text-[#07162a] transition hover:bg-[#edc77e] md:block">
            Reservar mesa
          </a>
          <button aria-label="Abrir menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm">
              <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
              <a href="#video" onClick={() => setMenuOpen(false)}>Vídeo</a>
              <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
              <a href="#contactos" onClick={() => setMenuOpen(false)}>Contactos</a>
              <a href="#reservas" onClick={() => setMenuOpen(false)} className="font-semibold text-[#d6a85d]">Reservar mesa</a>
            </div>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[720px] items-center overflow-hidden bg-[#0b1f3a] pt-24">
        <img
          src="/dastan-principal.jpg"
          alt="Mesa elegante com pratos do restaurante"
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162a]/65 via-[#07162a]/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#d6a85d]">Sabores que ficam na memória</p>
            <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Bem-vindo ao <span className="text-[#d6a85d]">Dastan</span> Restaurante
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Uma experiência gastronómica acolhedora, com ingredientes frescos, pratos cheios de sabor e o cuidado que transforma uma refeição em memória.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-[#d6a85d] px-6 py-3.5 font-bold text-[#07162a] transition hover:bg-[#edc77e]">
                Ver o nosso menu <ArrowRight size={18} />
              </a>
              <a href="#reservas" className="rounded-full border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                Reservar mesa
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="video" className="bg-[#eef3f8] px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a87932]">Conheça o Dastan</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#0d2747] sm:text-5xl">Veja o nosso vídeo</h2>
            <p className="mt-4 text-[#66564d]">Assista ao vídeo e conheça um pouco mais sobre o nosso restaurante.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl bg-[#07162a] shadow-2xl ring-1 ring-[#0d2747]/10">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/ejXePsqlgNo?rel=0"
                title="Vídeo do Dastan Restaurante"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=85"
            alt="Interior acolhedor de restaurante"
            className="h-[480px] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#d6a85d] p-5 text-center shadow-xl sm:-right-6">
            <p className="font-serif text-3xl font-bold">Dastan</p>
            <p className="text-xs font-semibold uppercase tracking-wider">Sabor & tradição</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a87932]">Sobre nós</p>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">Mais do que uma refeição, uma experiência.</h2>
          <p className="mt-6 leading-8 text-[#66564d]">
            No Dastan Restaurante acreditamos que boa comida aproxima pessoas. Criamos um espaço onde cada prato é preparado com atenção, cada ingrediente tem propósito e cada cliente é recebido como convidado.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Ingredientes frescos", "Selecionados diariamente."],
              ["Cozinha com alma", "Receitas preparadas com cuidado."],
              ["Ambiente acolhedor", "Perfeito para família e amigos."],
              ["Atendimento próximo", "Estamos aqui para receber bem."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-[#e7dccb] bg-white/60 p-5">
                <div className="mb-2 flex items-center gap-2 font-bold"><Star size={17} className="text-[#b78332]" />{title}</div>
                <p className="text-sm text-[#77675e]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#0d2747] px-5 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d6a85d]">O nosso menu</p>
            <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">Pratos para saborear</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">Uma seleção de favoritos da casa. O menu completo pode ser apresentado aqui conforme os pratos e preços do restaurante.</p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {dishes.map((dish) => (
              <article key={dish.name} className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                <img src={dish.image} alt={dish.name} className="h-60 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl font-bold">{dish.name}</h3>
                    <span className="shrink-0 font-bold text-[#d6a85d]">{dish.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">{dish.description}</p>
                  <a
                    href={whatsappLink(`Olá! Gostaria de pedir o prato: ${dish.name} — ${dish.price}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:brightness-95"
                  >
                    Pedir pelo WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#reservas" className="inline-flex items-center gap-2 rounded-full border border-[#d6a85d]/50 px-6 py-3 font-semibold text-[#d6a85d] transition hover:bg-[#d6a85d] hover:text-[#07162a]">
              <UtensilsCrossed size={18} /> Fazer uma reserva
            </a>
          </div>
        </div>
      </section>

      <section id="reservas" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid overflow-hidden rounded-3xl bg-[#d6a85d] lg:grid-cols-[1fr_1.1fr]">
          <div className="p-8 sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5e411f]">Reservas</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">A sua mesa está à sua espera.</h2>
            <p className="mt-5 leading-7 text-[#5e411f]">Entre em contacto connosco para reservar uma mesa e preparar uma experiência especial.</p>
            <div className="mt-8 space-y-4 text-sm font-semibold">
              <div className="flex items-center gap-3"><Phone size={19} /> +258 86 431 1529</div>
              <div className="flex items-center gap-3"><Clock3 size={19} /> Terça — Domingo · 10:00 — 22:00</div>
              <div className="flex items-center gap-3"><MapPin size={19} /> Maputo, Moçambique</div>
            </div>
          </div>
          <form className="bg-white p-8 sm:p-12" onSubmit={handleReservation}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">Nome<input required className="mt-2 w-full rounded-xl border border-[#e2d8ca] bg-[#fbf7ef] px-4 py-3 outline-none focus:border-[#b78332]" name="name" placeholder="O seu nome" /></label>
              <label className="text-sm font-semibold">Telefone<input required className="mt-2 w-full rounded-xl border border-[#e2d8ca] bg-[#fbf7ef] px-4 py-3 outline-none focus:border-[#b78332]" name="phone" type="tel" placeholder="+258 ..." /></label>
              <label className="text-sm font-semibold">Data<input name="date" type="date" required className="mt-2 w-full rounded-xl border border-[#e2d8ca] bg-[#fbf7ef] px-4 py-3 outline-none focus:border-[#b78332]" /></label>
              <label className="text-sm font-semibold">Pessoas<select name="people" className="mt-2 w-full rounded-xl border border-[#e2d8ca] bg-[#fbf7ef] px-4 py-3 outline-none focus:border-[#b78332]"><option>2 pessoas</option><option>3 pessoas</option><option>4 pessoas</option><option>5+ pessoas</select></label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#0d2747] px-6 py-3.5 font-bold text-white transition hover:bg-[#163a63]"
            >
              Solicitar reserva
            </button>
            <a
              href={whatsappLink("Olá! Gostaria de fazer uma reserva no Dastan Restaurante.")}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-center rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white transition hover:brightness-95"
            >
              Reservar pelo WhatsApp
            </a>
          </form>
        </div>
      </section>

      <footer id="contactos" className="bg-[#07162a] px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-bold">Dastan Restaurante</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">Sabores marcantes, ambiente acolhedor e momentos para partilhar.</p>
          </div>
          <div>
            <p className="font-bold">Contactos</p>
            <div className="mt-4 space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-2"><Phone size={16} /> +258 86 431 1529</p>
              <p className="flex items-center gap-2"><MapPin size={16} /> Maputo, Moçambique</p>
            </div>
          </div>
          <div>
            <p className="font-bold">Siga-nos</p>
            <a
              href={whatsappLink("Olá! Gostaria de falar com o Dastan Restaurante.")}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#d6a85d]"
            >
              WhatsApp: +258 86 431 1529
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">© {new Date().getFullYear()} Dastan Restaurante. Todos os direitos reservados.</div>
      </footer>
    </main>
  );
}

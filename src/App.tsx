/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Thermometer, 
  Volume2, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Building,
  Sun,
  Smartphone,
  Cpu,
  ChevronRight,
  FileText,
  User,
  Mail,
  MessageSquare,
  ArrowUpRight,
  Info,
  Lock,
  Activity
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Form Schema
const feedbackSchema = z.object({
  name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  impression: z.string().min(10, 'L\'impressione deve avere almeno 10 caratteri'),
});

type FeedbackValues = z.infer<typeof feedbackSchema>;

const TechnicalBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
    {children}
  </span>
);

const SpecItem = ({ label, value, icon: Icon }: { label: string; value: string; icon?: any }) => (
  <div className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
    {Icon && <Icon className="w-5 h-5 text-brand-gold mt-1 shrink-0" />}
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{label}</p>
      <p className="text-brand-dark font-medium leading-tight">{value}</p>
    </div>
  </div>
);

const SectionHeader = ({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-2">
      <span className="text-brand-gold font-serif text-xl italic">{number}</span>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
    <h3 className="text-3xl font-serif text-brand-dark mb-2">{title}</h3>
    {subtitle && <p className="text-gray-500 text-sm max-w-2xl">{subtitle}</p>}
  </div>
);

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('struttura');
  
  const { register, handleSubmit, formState: { errors } } = useForm<FeedbackValues>({
    resolver: zodResolver(feedbackSchema)
  });

  const onSubmit = (data: FeedbackValues) => {
    console.log('Feedback submitted:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-gold selection:text-white font-sans">
      {/* Header / Nav */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
            <Building className="text-brand-gold w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-lg leading-none text-brand-dark">Pro House S.r.l.</h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Capitolato Descrittivo</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-widest font-bold text-brand-dark/50">
          <a href="#premessa" className="hover:text-brand-gold transition-colors">Premessa</a>
          <a href="#tecnica" className="hover:text-brand-gold transition-colors">Tecnica</a>
          <a href="#impianti" className="hover:text-brand-gold transition-colors">Impianti</a>
          <a href="#finiture" className="hover:text-brand-gold transition-colors">Finiture</a>
          <a href="#clienti" className="hover:text-brand-gold transition-colors">Area Clienti</a>
          <a href="#feedback" className="px-4 py-2 bg-brand-dark text-white rounded-md hover:bg-brand-gold transition-all">Feedback</a>
        </div>
      </nav>

      {/* Hero Section - More Technical/Architectural */}
      <header className="relative pt-20 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Nuova Costruzione • Nola (NA)</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-dark mb-6 leading-[1.1]">
              Parco Degli <br />
              <span className="text-brand-gold italic">Oleandri</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Capitolato descrittivo di vendita relativo alle unità immobiliari del complesso residenziale 
              <span className="text-brand-dark font-medium"> Lotto 9 e Lotto 10</span>. 
              Un intervento d'eccellenza firmato Pro House S.r.l.
            </p>
            
            <div className="grid grid-cols-2 gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <SpecItem label="Ubicazione" value="Via Circumvallazione, V° Traversa n. 9" icon={MapPin} />
              <SpecItem label="Composizione" value="2 Edifici, 3 Piani fuori terra" icon={Building} />
              <SpecItem label="Unità" value="12 Appartamenti per edificio" icon={Layers} />
              <SpecItem label="Tipologie" value="3 e 4 Vani con Terrazzi/Giardini" icon={Maximize2} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1t4CoBfndkXLYYS-tyMUl5phnaaCL3RD7" 
                alt="Parco Degli Oleandri - Vista Principale" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-dark p-10 rounded-[2.5rem] text-white hidden md:block shadow-2xl">
              <p className="text-4xl font-serif text-brand-gold mb-2">A+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Efficienza Energetica</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        
        {/* 1. Premessa & Descrizione */}
        <section id="premessa" className="mb-32">
          <SectionHeader 
            number="01" 
            title="Premessa e Descrizione" 
            subtitle="Finalità illustrativa e caratteristiche generali dell'intervento residenziale."
          />
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">
            <div className="space-y-4">
              <p>
                Il presente documento costituisce il <strong>Capitolato Descrittivo di Vendita</strong> relativo alle unità immobiliari 
                facenti parte del complesso residenziale denominato “Parco Degli Oleandri Nola – Lotto 9 e Lotto 10”.
              </p>
              <p>
                L'intervento è concepito come un complesso residenziale inserito in un contesto privato, 
                organizzato per offrire <strong>privacy, vivibilità e comfort</strong>.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 flex items-start gap-4">
              <Info className="w-6 h-6 text-brand-gold shrink-0" />
              <p className="text-sm italic">
                "Le specifiche definitive della singola unità immobiliare saranno quelle risultanti dagli elaborati grafici 
                allegati alla proposta o al preliminare di vendita."
              </p>
            </div>
          </div>
        </section>

        {/* 2. Caratteristiche Costruttive */}
        <section id="tecnica" className="mb-32">
          <SectionHeader 
            number="02" 
            title="Eccellenza Costruttiva" 
            subtitle="Solidità strutturale e isolamento termo-acustico d'avanguardia."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Struttura */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <Building className="w-10 h-10 text-brand-gold mb-6" />
              <h4 className="text-xl font-serif text-brand-dark mb-4">Struttura Portante</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Realizzata in <strong>cemento armato</strong> nel rispetto delle normative antisismiche vigenti. 
                Garantisce solidità e durabilità nel tempo.
              </p>
              <TechnicalBadge>Normativa Antisismica</TechnicalBadge>
            </div>

            {/* Involucro */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <Shield className="w-10 h-10 text-brand-gold mb-6" />
              <h4 className="text-xl font-serif text-brand-dark mb-4">Tamponature</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Blocchi in laterizio tipo <strong>Poroton FV Plus MVI35019</strong> (24,5x35x19 cm). 
                Isolamento termico garantito dalla copertura dei ponti termici.
              </p>
              <TechnicalBadge>Poroton FV Plus</TechnicalBadge>
            </div>

            {/* Acustica */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              <Volume2 className="w-10 h-10 text-brand-gold mb-6" />
              <h4 className="text-xl font-serif text-brand-dark mb-4">Isolamento Acustico</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Divisori tra unità con sistema a <strong>doppia fodera</strong> in laterizio alveolato e 
                isolante acustico da <strong>5 cm</strong>.
              </p>
              <TechnicalBadge>Doppia Fodera 5cm</TechnicalBadge>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-8 bg-brand-dark rounded-3xl text-white">
              <Layers className="w-8 h-8 text-brand-gold shrink-0" />
              <div>
                <h5 className="font-serif text-lg mb-2">Tramezzature Interne</h5>
                <p className="text-sm text-gray-400">
                  Realizzate con pannelli di <strong>gessofibra</strong> su struttura in alluminio. 
                  Leggerezza, regolarità delle superfici e flessibilità distributiva.
                </p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-white rounded-3xl border border-gray-100">
              <Sun className="w-8 h-8 text-brand-gold shrink-0" />
              <div>
                <h5 className="font-serif text-lg mb-2">Copertura e Facciate</h5>
                <p className="text-sm text-gray-500">
                  Facciate con <strong>intonaco termico</strong> e rivestimenti estetici. 
                  Copertura con isolamento in <strong>EPS da 10 cm</strong> e guaina ardesiata.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Infissi e Finiture */}
        <section id="finiture" className="mb-32">
          <SectionHeader 
            number="03" 
            title="Componenti e Finiture" 
            subtitle="Materiali selezionati per estetica, sicurezza e durabilità."
          />
          
          <div className="space-y-20">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-serif text-brand-dark">Serramenti Nusco</h4>
                    <ArrowUpRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Infissi in PVC con doppio vetro, sistema <strong>Power 9000 della Nusco S.p.A.</strong> 
                    Oscuranti in tapparelle di alluminio coibentato.
                  </p>
                  <div className="h-px bg-gray-100 w-full" />
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-serif text-brand-dark">Portoncino e Porte</h4>
                    <ArrowUpRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Portoncino blindato in <strong>Classe 3</strong>. Porte interne in finitura microlaminata 
                    con ampia scelta di modelli e colorazioni da campionario.
                  </p>
                  <div className="h-px bg-gray-100 w-full" />
                </div>

                <div className="group">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-serif text-brand-dark">Pavimenti e Marmi</h4>
                    <ArrowUpRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Gres porcellanato di prima scelta. Soglie e davanzali in <strong>marmo Verde Marina</strong>. 
                    Balconi con gres per esterni <strong>SAIME</strong>.
                  </p>
                  <div className="h-px bg-gray-100 w-full" />
                </div>
              </div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl hidden lg:block">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Cam95-1LwLw7x9w-U2gYRShChNy46bCP" 
                  alt="Dettaglio Interno" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4 group">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200" 
                    alt="Pavimento Moderno" 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2">
                  <h5 className="font-serif text-xl text-brand-dark">Pavimentazioni</h5>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Gres Porcellanato Prima Scelta</p>
                </div>
              </div>
              <div className="space-y-4 group">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src="https://nuscospa.com/wp-content/uploads/2024/03/sublime-soft-1.jpg" 
                    alt="Porta Nusco Sublime Soft" 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2">
                  <h5 className="font-serif text-xl text-brand-dark">Infissi e Porte</h5>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Nusco Power 9000 & Blindati</p>
                </div>
              </div>
              <div className="space-y-4 group">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
                    alt="Bagno Moderno" 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2">
                  <h5 className="font-serif text-xl text-brand-dark">Ambiente Bagno</h5>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Sanitari e Rubinetteria Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Impianti e Domotica */}
        <section id="impianti" className="mb-32">
          <SectionHeader 
            number="04" 
            title="Tecnologia e Impianti" 
            subtitle="Soluzioni smart per l'efficienza energetica e il controllo totale."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 text-center">
              <Thermometer className="w-8 h-8 text-brand-gold mx-auto mb-4" />
              <h5 className="font-serif text-lg mb-2">Climatizzazione</h5>
              <p className="text-xs text-gray-500">Pompa di calore, fan coil e accumulo 280lt per ACS.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 text-center">
              <Cpu className="w-8 h-8 text-brand-gold mx-auto mb-4" />
              <h5 className="font-serif text-lg mb-2">Domotica</h5>
              <p className="text-xs text-gray-500">Sistema Living Now Bticino per luci e tapparelle.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 text-center">
              <Zap className="w-8 h-8 text-brand-gold mx-auto mb-4" />
              <h5 className="font-serif text-lg mb-2">Fotovoltaico</h5>
              <p className="text-xs text-gray-500">Impianto da 4 kW con accumulo da 5 kWh per unità.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-gray-100 text-center">
              <Smartphone className="w-8 h-8 text-brand-gold mx-auto mb-4" />
              <h5 className="font-serif text-lg mb-2">Smart Access</h5>
              <p className="text-xs text-gray-500">Videocitofono Comelit PoE VIP e antifurto Bticino.</p>
            </div>
          </div>

          <div className="mt-12 p-10 bg-brand-bg border border-brand-gold/20 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Building className="w-10 h-10 text-brand-dark" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-serif text-brand-dark mb-2">Dotazioni Condominiali</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ascensore <strong>Schindler</strong> (6 persone), impianto autoclave, addolcitore acque e 
                serbatoio da 2.000 litri. Box auto privati con pavimentazione in cemento levigato.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Area Clienti - Tracking Lavori */}
        <section id="clienti" className="mb-32">
          <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <Activity className="w-full h-full text-brand-gold" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-8 border border-brand-gold/30">
                <Lock className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Area Riservata Clienti</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Segui l'andamento <br />
                <span className="text-brand-gold italic">dei tuoi lavori</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Accedi al tuo portale dedicato per visualizzare lo stato di avanzamento del cantiere, 
                le foto aggiornate e i documenti tecnici della tua nuova casa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 group">
                  Accedi al Portale
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all">
                  Richiedi Credenziali
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You & Feedback */}
        <section id="feedback" className="pt-20 border-t border-gray-100">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-brand-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 italic">
                Grazie per l'interesse <br /> nel nostro progetto.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                La vostra visita al cantiere è il primo passo verso la scelta di una casa costruita con passione e rigore tecnico. 
                Siamo a vostra disposizione per ogni approfondimento sul capitolato e sulle personalizzazioni.
              </p>
              <div className="flex items-center gap-4 text-brand-dark font-bold text-xs uppercase tracking-widest">
                <span className="w-10 h-px bg-brand-gold" />
                Pro House S.r.l. Team
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-50">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-6"
                  >
                    <h4 className="text-2xl font-serif text-brand-dark mb-8">Lasciate le vostre impressioni</h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
                        <User className="w-3 h-3" />
                        <label>Nome Completo</label>
                      </div>
                      <input 
                        {...register('name')}
                        className="w-full bg-brand-bg border border-transparent rounded-xl p-4 focus:bg-white focus:border-brand-gold transition-all outline-none text-sm"
                        placeholder="Esempio: Mario Rossi"
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
                        <Mail className="w-3 h-3" />
                        <label>Email</label>
                      </div>
                      <input 
                        {...register('email')}
                        className="w-full bg-brand-bg border border-transparent rounded-xl p-4 focus:bg-white focus:border-brand-gold transition-all outline-none text-sm"
                        placeholder="mario@esempio.it"
                      />
                      {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
                        <MessageSquare className="w-3 h-3" />
                        <label>Cosa vi ha colpito di più?</label>
                      </div>
                      <textarea 
                        {...register('impression')}
                        rows={4}
                        className="w-full bg-brand-bg border border-transparent rounded-xl p-4 focus:bg-white focus:border-brand-gold transition-all outline-none text-sm resize-none"
                        placeholder="Condividete le vostre impressioni..."
                      />
                      {errors.impression && <p className="text-red-500 text-[10px] mt-1">{errors.impression.message}</p>}
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-brand-dark text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-gold transition-all flex items-center justify-center gap-3 group shadow-lg shadow-brand-dark/10"
                    >
                      Invia Messaggio
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-serif mb-4 text-brand-dark">Messaggio Inviato</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Grazie per aver condiviso le vostre impressioni. <br />
                      Il nostro team vi ricontatterà al più presto.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-brand-gold font-bold uppercase tracking-widest text-[10px] hover:underline"
                    >
                      Torna al modulo
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-dark rounded-md flex items-center justify-center">
                <Building className="text-brand-gold w-5 h-5" />
              </div>
              <span className="font-serif text-xl tracking-tight text-brand-dark">Pro House S.r.l.</span>
            </div>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              Realizzazione e commercializzazione di complessi residenziali d'avanguardia. 
              Qualità, trasparenza e innovazione dal 2026.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark">Sede</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Via Circumvallazione, <br />
                V° Traversa n. 9, <br />
                Nola (NA)
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark">Contatti</p>
              <p className="text-xs text-gray-500">info@pro-house.it</p>
              <p className="text-xs text-gray-500">+39 081 123 4567</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-50 flex justify-between items-center">
          <p className="text-[9px] uppercase tracking-widest text-gray-300 font-bold">© 2026 Pro House S.r.l. • P.IVA 0123456789</p>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100" />
            <div className="w-6 h-6 rounded-full bg-gray-50 border border-gray-100" />
          </div>
        </div>
      </footer>
    </div>
  );
}

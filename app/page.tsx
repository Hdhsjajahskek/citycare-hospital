import Image from "next/image";
import { BmiCalculator } from "./components/BmiCalculator";
import { IdealWeightCalculator } from "./components/IdealWeightCalculator";
import { PregnancyCalculator } from "./components/PregnancyCalculator";
import { BpChecker } from "./components/BpChecker";
import { BookingForm } from "./components/BookingForm";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#252D45] bg-[#151B2E] px-4 py-1.5 font-mono text-xs tracking-widest text-[#A78BFA]">
                MODERN HEALTHCARE · HUMAN FIRST
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
                Advanced care.
                <br />
                <span className="bg-gradient-to-r from-[#5B6EF5] to-[#A78BFA] bg-clip-text text-transparent">
                  Always close.
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-[#8892B0]">
                Multispeciality hospital in Aligarh. Experienced specialists,
                modern equipment, 24×7 emergency.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#book"
                  className="rounded-full bg-gradient-to-r from-[#5B6EF5] to-[#6B7FFF] px-8 py-4 font-semibold text-white transition hover:from-[#6B7FFF] hover:to-[#8B9FFF] hover:shadow-[0_0_40px_-10px_#5B6EF5]"
                >
                  Book Appointment
                </a>
                <a
                  href="#departments"
                  className="rounded-full border border-[#252D45] bg-[#151B2E] px-8 py-4 font-semibold text-white transition hover:border-[#5B6EF5]"
                >
                  Explore Departments
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#5B6EF5]/20 to-[#A78BFA]/20 blur-3xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#252D45]">
                <Image
                  src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&q=80"
                  alt="Modern hospital"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="bg-gradient-to-r from-[#ef4444] to-[#dc2626]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl">
              🚑
            </div>
            <div>
              <p className="font-bold text-white">24×7 Emergency & Trauma</p>
              <p className="text-sm text-white/80">
                Ambulance ready. ICU operational. Call now.
              </p>
            </div>
          </div>
          <a
            href="tel:+919837012345"
            className="rounded-full bg-white px-6 py-3 font-bold text-[#dc2626] transition hover:bg-white/90"
          >
            CALL +91 98370 12345
          </a>
        </div>
      </section>

      {/* STATS ROW */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard value="50k+" label="Patients Served" />
          <StatCard value="120+" label="Expert Doctors" />
          <StatCard value="98%" label="Satisfaction Rate" />
          <StatCard value="24/7" label="Emergency Response" />
        </div>
      </section>

      {/* FEATURED SERVICES (with photos) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
            FEATURED SERVICES
          </p>
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Care built around you.
          </h2>
          <p className="max-w-2xl text-[#8892B0]">
            Three core services that define how we treat every patient.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ServiceCard
            image="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80"
            tag="Consultation"
            title="Expert consultation, every visit"
            description="Specialists across 8 departments. Same-day appointments, clear diagnosis, plain-language advice."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
            tag="Diagnosis"
            title="Imaging and labs, on one timeline"
            description="Pathology, radiology, and imaging sync so your care team sees the full picture at once."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
            tag="Recovery"
            title="Structured follow-up care"
            description="Post-treatment plans, physiotherapy, and check-ins that don't depend on you remembering."
          />
        </div>
      </section>

      {/* CARE JOURNEY TABS */}
      <section className="border-y border-[#252D45] bg-[#151B2E]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
              CARE JOURNEY
            </p>
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              From first call to full recovery.
            </h2>
            <p className="max-w-2xl text-[#8892B0]">
              Every stage of your care, mapped and clear.
            </p>
          </div>

          <CareJourneyTabs />
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section id="departments" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
              OUR DEPARTMENTS
            </p>
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Department Availability
            </h2>
            <p className="max-w-2xl text-[#8892B0]">
              Teams and hours at a glance.
            </p>
          </div>
          <a
            href="#book"
            className="hidden text-sm font-medium text-[#5B6EF5] transition hover:text-[#8B9FFF] md:block"
          >
            See all departments →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DepartmentCard icon="🔬" title="Pathology" specialists="22 Specialists" hours="Mon–Sat" />
          <DepartmentCard icon="💊" title="Pharmacology" specialists="18 Specialists" hours="Mon–Sun" />
          <DepartmentCard icon="🩻" title="Radiology" specialists="15 Specialists" hours="24/7" />
          <DepartmentCard icon="❤️" title="Cardiology" specialists="10 Specialists" hours="Mon–Fri" />
          <DepartmentCard icon="🧒" title="Pediatrics" specialists="14 Specialists" hours="Mon–Sun" />
          <DepartmentCard icon="🦴" title="Orthopaedics" specialists="12 Specialists" hours="Mon–Fri" />
          <DepartmentCard icon="✨" title="Dermatology" specialists="9 Specialists" hours="Mon–Sat" />
          <DepartmentCard icon="🚑" title="Emergency" specialists="28 Specialists" hours="24/7" />
        </div>
      </section>

      {/* HEALTH TOOLS */}
      <section id="tools" className="border-y border-[#252D45] bg-[#151B2E]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
              FREE HEALTH TOOLS
            </p>
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Know your health numbers.
            </h2>
            <p className="max-w-2xl text-lg text-[#8892B0]">
              Free health calculators for you and your family. No signup required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div id="bmi"><BmiCalculator /></div>
            <div id="weight"><IdealWeightCalculator /></div>
            <div id="pregnancy"><PregnancyCalculator /></div>
            <div id="bp"><BpChecker /></div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
            OUR SPECIALISTS
          </p>
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Experienced. Trusted. Caring.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DoctorCard name="Dr. Rakesh Sharma" specialty="Orthopaedic Surgeon" credentials="MBBS, MS (Ortho)" experience="22 years" />
          <DoctorCard name="Dr. Priya Sharma" specialty="Cardiologist" credentials="MBBS, MD, DM (Cardiology)" experience="15 years" />
          <DoctorCard name="Dr. Ayesha Khan" specialty="Gynaecologist & Obstetrician" credentials="MBBS, MS (OBG)" experience="18 years" />
          <DoctorCard name="Dr. Vikram Singh" specialty="Emergency & Trauma" credentials="MBBS, MD (Emergency Medicine)" experience="12 years" />
          <DoctorCard name="Dr. Rehan Khan" specialty="Dental Surgeon" credentials="BDS, MDS (Orthodontics)" experience="10 years" />
          <DoctorCard name="Dr. Neha Gupta" specialty="Pathologist" credentials="MBBS, MD (Pathology)" experience="14 years" />
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="border-y border-[#252D45] bg-[#151B2E]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
              INSIDE CITYCARE
            </p>
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              A hospital you can walk into.
            </h2>
            <p className="max-w-2xl text-[#8892B0]">
              Modern facilities, sterile environment, calm spaces.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <GalleryImage
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80"
              alt="Reception"
              className="col-span-2 row-span-2 aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80"
              alt="Ward"
              className="aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80"
              alt="Equipment"
              className="aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
              alt="Operation theatre"
              className="aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80"
              alt="Consultation"
              className="aspect-square"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
            PATIENT STORIES
          </p>
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Trusted by families in Aligarh.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TestimonialCard name="Suresh Kumar" treatment="Knee Replacement" text="The ortho team explained everything clearly and the recovery was smooth. My father is walking again." />
          <TestimonialCard name="Fatima Khan" treatment="Delivery Care" text="The gynae team was patient and reassuring throughout. Clean facility and caring staff." />
          <TestimonialCard name="Arun Verma" treatment="Emergency Care" text="Brought my son in at 2am. The emergency team was ready before we arrived. Forever grateful." />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
            FREQUENTLY ASKED
          </p>
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-4">
          <Faq q="Do I need an appointment?">Walk-ins are welcome but appointments get priority. Book online in 30 seconds for same-day consultation.</Faq>
          <Faq q="What are the consultation fees?">General consultations start at ₹500. Specialist consultations vary by department. Contact reception for exact pricing.</Faq>
          <Faq q="Do you accept insurance?">Yes. We work with most major insurance providers and TPAs. Bring your policy details on your first visit.</Faq>
          <Faq q="Is emergency care available 24×7?">Yes. Our emergency and trauma department runs 24×7 with ambulance service. Call +91 98370 12345 for urgent cases.</Faq>
          <Faq q="Are the doctors qualified?">All our consultants are board-certified with an average of 15+ years of experience.</Faq>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="border-t border-[#252D45] bg-[#151B2E]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12">
            <p className="mb-3 font-mono text-xs tracking-widest text-[#A78BFA]">
              BOOK APPOINTMENT
            </p>
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Book in 30 seconds.
            </h2>
            <p className="max-w-2xl text-lg text-[#8892B0]">
              Choose your department and time. We&apos;ll WhatsApp you to confirm.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}

// ==== COMPONENTS ====

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#252D45] bg-[#151B2E] p-6">
      <p className="mb-1 text-3xl font-bold text-white md:text-4xl">{value}</p>
      <p className="text-sm text-[#8892B0]">{label}</p>
    </div>
  );
}

function ServiceCard({
  image,
  tag,
  title,
  description,
}: {
  image: string;
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#252D45] bg-[#0A0E1A] transition hover:border-[#5B6EF5]/50">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full border border-[#252D45] bg-[#0A0E1A]/80 px-3 py-1 font-mono text-[10px] tracking-widest text-[#A78BFA] backdrop-blur">
          {tag.toUpperCase()}
        </span>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-[#8892B0]">{description}</p>
      </div>
    </div>
  );
}

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#252D45] ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function DepartmentCard({
  icon,
  title,
  specialists,
  hours,
}: {
  icon: string;
  title: string;
  specialists: string;
  hours: string;
}) {
  return (
    <div className="group rounded-2xl border border-[#252D45] bg-[#151B2E] p-5 transition-all duration-300 hover:border-[#5B6EF5]/50 hover:bg-[#1A2238]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1E2742] text-xl">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="mb-3 text-xs text-[#8892B0]">{specialists}</p>
      <span className="inline-flex items-center gap-1 rounded-full border border-[#252D45] bg-[#0A0E1A] px-2.5 py-1 font-mono text-[10px] text-[#A78BFA]">
        ● {hours}
      </span>
    </div>
  );
}

function DoctorCard({
  name,
  specialty,
  credentials,
  experience,
}: {
  name: string;
  specialty: string;
  credentials: string;
  experience: string;
}) {
  return (
    <div className="rounded-2xl border border-[#252D45] bg-[#151B2E] p-6 transition hover:border-[#5B6EF5]/50">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#5B6EF5] to-[#A78BFA] text-xl font-bold text-white">
        {name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("")}
      </div>
      <h3 className="mb-1 text-xl font-bold text-white">{name}</h3>
      <p className="mb-1 text-sm font-medium text-[#A78BFA]">{specialty}</p>
      <p className="mb-3 text-xs text-[#8892B0]">{credentials}</p>
      <p className="font-mono text-xs text-[#5B6EF5]">{experience} experience</p>
    </div>
  );
}

function TestimonialCard({
  name,
  treatment,
  text,
}: {
  name: string;
  treatment: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#252D45] bg-[#0A0E1A] p-6">
      <p className="mb-4 font-mono text-xs tracking-widest text-[#A78BFA]">
        {treatment.toUpperCase()}
      </p>
      <p className="mb-6 leading-relaxed text-[#C5CCE0]">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-[#252D45] pt-4">
        <p className="text-sm font-semibold text-white">{name}</p>
      </div>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-lg border border-[#252D45] bg-[#151B2E] p-5 transition-colors hover:border-[#5B6EF5]/50">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white">
        {q}
        <span className="text-xl text-[#A78BFA] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-[#8892B0]">{children}</p>
    </details>
  );
}

function CareJourneyTabs() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          step: "01",
          tag: "Consultation",
          title: "Meet your specialist",
          points: [
            "Same-day appointments available",
            "8 departments, all under one roof",
            "Clear diagnosis in plain language",
          ],
        },
        {
          step: "02",
          tag: "Diagnosis",
          title: "Everything on one timeline",
          points: [
            "Imaging and labs sync automatically",
            "Second-opinion support when needed",
            "Plain-language summaries you can keep",
          ],
        },
        {
          step: "03",
          tag: "Recovery",
          title: "Structured follow-up",
          points: [
            "Post-treatment care plans",
            "Physiotherapy and rehab support",
            "Check-ins that don't depend on memory",
          ],
        },
      ].map((s) => (
        <div
          key={s.step}
          className="rounded-2xl border border-[#252D45] bg-[#0A0E1A] p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs tracking-widest text-[#A78BFA]">
              {s.tag.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-[#8892B0]">{s.step}</span>
          </div>
          <h3 className="mb-4 text-xl font-bold text-white">{s.title}</h3>
          <ul className="space-y-3">
            {s.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-[#8892B0]">
                <span className="mt-0.5 text-[#10b981]">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
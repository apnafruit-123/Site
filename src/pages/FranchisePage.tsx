import React from 'react';

interface FranchisePageProps {
  onNavigate?: (page: string) => void;
}

export default function FranchisePage({ onNavigate }: FranchisePageProps) {
  const phone = '+917000596302';
  const instagram = '@fruit.box.bhilai';
  const email = 'fruitboxbhilai@gmail.com';

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <header className="w-full bg-white border-b border-card-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">Apna Fruit Box</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-primary leading-tight mb-4">It’s Natural</h1>
              <p className="text-lg sm:text-xl text-slate-700 max-w-xl mb-6">
                Apna Fruit Box is a high-profit franchise opportunity in the healthy food / fruit sector. We emphasise fresh, nutritious, farm-to-doorstep fruit delivery.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
                <a href={`tel:${phone}`} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 hover:text-brand-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-fruit-yellow" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.25A2.25 2.25 0 015.25 3h2.5A2.25 2.25 0 0110 5.25v2.5A2.25 2.25 0 017.75 10H6.5c-.28 0-.5.22-.5.5v1.75c0 .86.7 1.56 1.56 1.56H11c.28 0 .5.22.5.5v2.25c0 1.24-1.01 2.25-2.25 2.25H5.25A2.25 2.25 0 013 18.75V5.25z"/></svg>
                  <span className="font-semibold">{phone}</span>
                </a>

                <a href={`https://instagram.com/${instagram.replace('@','')}`} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 hover:text-brand-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-fruit-yellow" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"/></svg>
                  <span className="font-semibold">{instagram}</span>
                </a>

                <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 hover:text-brand-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-fruit-yellow" viewBox="0 0 24 24" fill="currentColor"><path d="M3 8l9 6 9-6v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>
                  <span className="font-semibold">{email}</span>
                </a>
              </div>
              {/* Downloadable Franchise Booklet (PDF) */}
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden bg-[url('/w1.jpg')] bg-cover bg-center h-64" aria-hidden />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* AIM / VISION / MISSION */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
              <div className="text-2xl mb-2">Aim</div>
              <p className="text-sm text-slate-700 leading-relaxed">Expand Apna Fruit Box to 200 franchise locations across India. Deliver farm-fresh fruits to every doorstep. Empower entrepreneurs to grow with the brand.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
              <div className="text-2xl mb-2">Vision</div>
              <p className="text-sm text-slate-700 leading-relaxed">Encourage healthier and happier lifestyles. Connect people to natural, nutritious foods.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 shadow-sm">
              <div className="text-2xl mb-2">Mission</div>
              <p className="text-sm text-slate-700 leading-relaxed">Provide fresh, nutritious food options. Deliver fast and simple solutions. Create business opportunities while promoting healthy eating.</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-display font-bold text-brand-primary mb-4">About Apna Fruit Box</h2>
            <p className="text-base text-slate-700 leading-relaxed mb-4">Apna Fruit Box is Chhattisgarh’s premier farm-to-doorstep fruit delivery service. We focus on freshness, nutrition, additive-free fruits, and easy access to healthy living — wellness is just a box away.</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm bg-cover bg-center h-64" style={{ backgroundImage: "url('/w2.jpg')" }} aria-hidden />
        </section>

        {/* FOUNDER */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-slate-50 rounded-2xl p-6">
          <div className="flex items-center justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-cover bg-center shadow-md" style={{ backgroundImage: "url('/w4.jpg')" }} aria-hidden />
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-2">Siddharth Palleti</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">Founder with a passion for health, entrepreneurship, and community well-being. From Chhattisgarh, Siddharth identified the gap between farm produce and consumers and built Apna Fruit Box to bridge that gap with quality and purpose.</p>
            <div className="mt-4 text-sm text-slate-500 font-signature">— Siddharth Palleti</div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section>
          <h3 className="text-2xl font-display font-bold text-brand-primary mb-4">Why Choose Apna Fruit Box</h3>
          <div className="space-y-3">
            {[
              ['Proven business model with growing demand', 'Clear market demand and a tested approach.'],
              ['Guaranteed freshness sourced directly from farmers', 'Direct sourcing to maintain quality and trust.'],
              ['Low investment with high return potential', 'Designed to be capital-efficient with strong upside.'],
              ['Complete support system', 'Setup, training, branding, marketing, and daily operations support.'],
              ['Trusted brand with strong regional reputation', 'A recognized local presence and loyal customers.'],
              ['Vision to scale to 200+ outlets across India', 'Ambitious, measurable growth goals.'],
            ].map(([title, desc]) => (
              <div key={title as string} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full mt-2 bg-fruit-yellow flex-shrink-0" />
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-slate-600">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODELS & INVESTMENT (updated values; larger cards) */}
        <section>
          <h3 className="text-2xl font-display font-bold text-brand-primary mb-6">Franchise Models & Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 rounded-xl border border-card-hover min-h-[28rem] bg-white shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Signature Model</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="space-y-2">
                  <div><span className="font-semibold">Investment</span></div>
                  <div>2.5L - 3L</div>

                  <div className="mt-3"><span className="font-semibold">Cafe setup</span></div>
                  <div>1.5L</div>

                  <div className="mt-3"><span className="font-semibold">Fruit Boxes (empty)</span></div>
                  <div>10k - 15k</div>
                </div>

                <div className="space-y-2">
                  <div><span className="font-semibold">No. of staff</span></div>
                  <div>3</div>

                  <div className="mt-3"><span className="font-semibold">Branding</span></div>
                  <div>10k</div>

                  <div className="mt-3"><span className="font-semibold">Franchise Fees</span></div>
                  <div>50k</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                <div><span className="font-semibold">Kitchen equipment:</span> (see detailed costs)</div>
                <div className="mt-2"><span className="font-semibold">Marketing / Miscellaneous:</span> included in overall investment</div>
                <div className="mt-4"><span className="font-semibold">Estimated daily sales:</span> 4k - 5k / day</div>
              </div>
            </div>

            <div className="p-12 rounded-xl border border-card-hover min-h-[28rem] bg-white shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Premium Model</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="space-y-2">
                  <div><span className="font-semibold">Investment</span></div>
                  <div>4.5L - 5L</div>

                  <div className="mt-3"><span className="font-semibold">Cafe setup</span></div>
                  <div>2.5L</div>

                  <div className="mt-3"><span className="font-semibold">Kitchen equipment</span></div>
                  <div>80k - 1L</div>
                </div>

                <div className="space-y-2">
                  <div><span className="font-semibold">No. of staff</span></div>
                  <div>4</div>

                  <div className="mt-3"><span className="font-semibold">Fruit Boxes (empty)</span></div>
                  <div>10k - 15k</div>

                  <div className="mt-3"><span className="font-semibold">Branding</span></div>
                  <div>15k</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                <div><span className="font-semibold">Marketing:</span> 15k - 20k</div>
                <div className="mt-2"><span className="font-semibold">Miscellaneous:</span> 5k</div>
                <div className="mt-2"><span className="font-semibold">Other setup:</span> 10k</div>
                <div className="mt-2"><span className="font-semibold">Franchise Fees:</span> 80k</div>
                <div className="mt-4"><span className="font-semibold">Estimated daily sales:</span> 7k - 9k / day</div>
              </div>
            </div>
          </div>

          {/* Locations + contact (above download) */}
          <div className="mt-8 bg-slate-50 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-3">Franchise available in</h4>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Zirakpur (Punjab)</li>
              <li>Chandigarh (Punjab)</li>
              <li>Satna (Madhya Pradesh)</li>
              <li>Bhilai main branch (Chhattisgarh)</li>
              <li>Durg (Chhattisgarh)</li>
              <li>Raipur (Chhattisgarh)</li>
            </ul>

            <div className="mt-4 text-sm text-slate-700">
              <div className="font-semibold">Contact</div>
              <div className="mt-1">{phone} · {instagram} · {email}</div>
            </div>
          </div>

          <div className="mt-6">
                <a
                  href="/frn.pdf"
                  download
                  className="inline-flex items-center bg-brand-primary text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-none transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4" />
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
                  </svg>
                  <span>Download Franchise Booklet (PDF)</span>
                </a>
              </div>
        </section>


        {/* CLOSING */}
        <section className="text-center py-12 bg-green-50 rounded-2xl p-8">
          <h4 className="text-2xl font-display font-semibold mb-3 text-green-900">Thank You</h4>
          <p className="text-sm text-green-800 mb-4">Apna Fruit Box</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${phone}`} className="text-sm text-green-800 font-semibold">{phone}</a>
            <a href={`https://instagram.com/${instagram.replace('@','')}`} className="text-sm text-green-800 font-semibold">{instagram}</a>
            <a href={`mailto:${email}`} className="text-sm text-green-800 font-semibold">{email}</a>
          </div>
          <div className="mt-6">
            <button
              onClick={() => onNavigate?.('contact')}
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold"
            >
              Get in touch
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

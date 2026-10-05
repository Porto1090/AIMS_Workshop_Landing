import React, { useState } from 'react';

export const RegistrationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="registration" className="h-screen w-full flex flex-col bg-brand">
      <div className="grow grid grid-cols-1 md:grid-cols-2">
        {/* Info Side */}
        <div className="p-16 flex flex-col justify-center border-r-4 border-secondary border-b-4">
          <h2 className="text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Secure <br /> Your Spot.
          </h2>
          <p className="text-2xl font-bold text-secondary uppercase tracking-wide">
            JOIN US FOR A DEEP DIVE INTO SCENARIO PLANNING FOR AI IN MANUFACTURING AND SUPPLY CHAINS.
          </p>
        </div>

        {/* Form Side */}
        <div className="bg-brand-hover p-16 flex flex-col justify-center border-b-4 border-secondary">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 max-w-md w-full">
              <div>
                <label className="block text-white font-black uppercase text-xl mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-4 bg-brand text-white border-4 border-brand focus:border-secondary focus:outline-none text-xl font-bold rounded-none placeholder:text-white/40"
                  placeholder="JOHN DOE"
                />
              </div>
              <div>
                <label className="block text-white font-black uppercase text-xl mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-4 bg-brand text-white border-4 border-brand focus:border-secondary focus:outline-none text-xl font-bold rounded-none placeholder:text-white/40"
                  placeholder="JOHN@COMPANY.COM"
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 border-4 border-tertiary bg-tertiary text-white text-2xl font-black uppercase hover:bg-tertiary-hover hover:border-tertiary-hover transition-colors"
              >
                Register Now
              </button>
            </form>
          ) : (
            <div className="bg-brand border-4 border-secondary p-12 text-center">
              <h3 className="text-4xl font-black text-secondary uppercase mb-4">
                Registration Confirmed
              </h3>
              <p className="text-white font-bold text-xl uppercase">
                Check your inbox for access details.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer / Hard Stop */}
      <footer className="h-24 bg-secondary text-brand px-10 flex justify-between items-center border-t-4 border-brand shrink-0">
        <h2 className="text-2xl font-black uppercase tracking-tighter">
          AI for Manufacturing and Supply Chain Institute
        </h2>
      </footer>
    </section>
  );
};
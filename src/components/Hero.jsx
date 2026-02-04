import React from 'react'

export const Hero = () => {
  return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
            <div className="absolute inset-0 z-0">
                <video id="hero-video" className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="img/loop.mov" type="video/mp4"/>
                </video>
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
                <h1 data-i18n="hero_title"
                    className="font-saphira text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Lo que el corazón prometió<br />
                    <span className="font-light italic text-4xl md:text-6xl block mt-2">que el tiempo no lo borre</span>
                </h1>
                <p data-i18n="hero_desc" className="text-lg md:text-xl font-light mb-10 text-gray-200 max-w-2xl mx-auto">
                    Fotografía y Cinematografía de alta gama para quienes entienden que el valor de una historia no está
                    en capturarla, sino en saber preservarla. Exclusividad, innovación y presencia absoluta
                </p>
                <a className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm rounded"
                    href="#contact" data-i18n="hero_btn">
                    Descubre la experiencia
                </a>
            </div>
        </section>
  )
}

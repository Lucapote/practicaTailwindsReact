export const About = () => {
  return (
            <section className="py-20 md:py-28 bg-surface-light relative" id="about">
            <div className="container mx-auto px-6 text-center">
                <div className="relative inline-block mb-12">
                    <h2 data-i18n="about_title"
                        className="font-saphira text-5xl md:text-6xl text-primary mb-2 relative z-10">No solo capturamos lo
                        que sucede,<br/> protegemos lo que significa</h2>
                </div>
                <p data-i18n="about_desc" className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-lg">
                    En <strong className="text-primary font-semibold">Eternal Vows</strong>, entendemos que una boda no es
                    solo un evento social,<strong className="text-primary font-semibold"> es una promesa.</strong> Nuestra
                    misión es <strong className="text-primary font-semibold">documentar lo invisible</strong>: el silencio
                    antes del 'sí', la reverencia del compromiso y la verdad en cada mirada. Estamos aquí para
                    asegurar que <strong className="text-primary font-semibold">las promesas de
                    hoy sean el tesoro de tus próximas generaciones.</strong>
                </p>
            </div>
        </section>
  )
}

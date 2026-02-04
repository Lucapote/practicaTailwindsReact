import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    const servicesData = [
        {
            title: "Cinematografía & Fotografía de Autor",
            i18nTitle: "services_subtitle_1",
            description: "Nos enfocamos en la autenticidad y la estética editorial. Un servicio diseñado para quienes buscan excelencia técnica y una narrativa humana, capturando la mística de la unión sin interrupciones.",
            i18nDesc: "services_desc_1",
            variant: "light",
            features: [
                { text: "Fotografía de estilo editorial", i18n: "services_li_1" },
                { text: "Película highlight cinematográfica 4K", i18n: "services_li_2" },
                { text: "Retoque artístico", i18n: "services_li_3" }
            ]
        },
        {
            title: "La Experiencia Legacy",
            i18nTitle: "services_title_2",
            description: "Es la única experiencia en el mercado que te permite volver a escuchar los votos y la atmósfera de tu boda desde las páginas de tu libro. El lujo que se puede tocar y escuchar a través de nuestro Legacy Book y tecnología Key Memory.",
            i18nDesc: "services_desc_2",
            variant: "primary",
            features: [
                { text: "Memorias que cobran voz.", i18n: "legacy_li_1" },
                { text: "Lujo editorial que puedes escuchar.", i18n: "legacy_li_2" },
                { text: "Tu historia en papel y sonido.", i18n: "legacy_li_3" }
            ]
        }
    ];

    return (
        <section className="py-24 bg-secondary" id="services">
            <div className="container mx-auto px-6">
                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <span
                        data-i18n="services_specialty"
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block"
                    >
                        Nuestra Especialidad
                    </span>
                    <h3
                        data-i18n="services_title_1"
                        className="font-saphira text-4xl md:text-5xl text-gray-800"
                    >
                        Selección Editorial
                    </h3>
                    <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
                </div>

                {/* Grid de tarjetas */}
                <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-lg overflow-hidden border border-secondary/30">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

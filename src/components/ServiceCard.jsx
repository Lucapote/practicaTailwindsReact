import React from 'react';

const ServiceCard = ({
    title,
    description,
    features,
    variant = 'light',
    i18nTitle,
    i18nDesc
}) => {
    const isPrimary = variant === 'primary';

    // Clases dinámicas basadas en la variante
    const containerClasses = isPrimary
        ? "relative bg-primary text-white p-12 md:p-16 overflow-hidden"
        : "bg-white p-12 md:p-16 relative group transition-colors duration-500 hover:bg-gray-50";

    const titleClasses = `font-saphira text-2xl md:text-3xl font-bold mb-6 ${
        isPrimary ? "text-secondary" : "text-primary"
    }`;

    const descClasses = `mb-8 leading-relaxed ${
        isPrimary ? "text-white" : "text-gray-600"
    }`;

    const iconClasses = `material-icons-outlined text-sm mr-3 ${
        isPrimary ? "text-secondary" : "text-primary"
    }`;

    const listItemTextClasses = isPrimary ? "text-white" : "text-gray-600";

    return (
        <div className={containerClasses}>
            <div className="relative z-10">
                <h4 data-i18n={i18nTitle} className={titleClasses}>
                    {title}
                </h4>
                <p data-i18n={i18nDesc} className={descClasses}>
                    {description}
                </p>
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                            <i className='fa-regular fa-circle-check ml-1'></i>
                            <span data-i18n={feature.i18n} className={listItemTextClasses}>
                                {feature.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceCard;

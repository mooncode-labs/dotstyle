// ImageComponent.js
import React, { useState } from 'react';

const ImageComponent = ({ src, alt, aspectRatio, lazyLoad, caption }) => {
    const [imageError, setImageError] = useState(false);

    const styles = `relative rounded overflow-hidden ${aspectRatio ? `${aspectRatio}` : ''}`;

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className='max-w-lg'>
            {!imageError ? (
                <div className={styles}>
                    {lazyLoad ? (
                        <img
                            src={src}
                            data-src={src}
                            alt={alt}
                            className="inset-0 w-full h-full object-cover"
                            loading="lazy"
                            onError={handleImageError}
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                        />
                    )}
                </div>
            ) : (
                <div className={`${styles} bg-gray-100 dark:bg-neutral-800 h-full w-full flex items-center justify-center`}>
                    {/* Your placeholder content goes here */}
                    <div className='font-semibold text-neutral-500 flex flex-col items-center justify-center'>Image not found
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </div>

                </div>
            )}
            <div className='text-neutral-700 text-sm font-medium dark:text-neutral-200'>{caption}</div>
        </div>
    );
};

export default ImageComponent;

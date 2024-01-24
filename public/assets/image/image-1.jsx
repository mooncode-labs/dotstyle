'use client'
import React, { useState } from 'react';

const ImageComponent = ({ src, alt, aspectRatio, lazyLoad, caption }) => {
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(true); // Track loading state
    const aspect = (aspectRatio) ? aspectRatio : 'aspect-auto' // Default to aspect-auto if no aspect ratio is provided

    const handleImageError = () => {
        setImageError(true);
        setLoading(false); // Update loading state on error
    };

    const handleImageLoad = () => {
        setLoading(false); // Update loading state on load
    };

    return (
        <div className='h-full w-full flex flex-col justify-center' role="img" aria-label={alt}>
            {!imageError ? (
                <div className={`relative rounded overflow-hidden ${aspect}`} role="presentation">
                    {lazyLoad ? (
                        <img
                            src={src}
                            alt={alt}
                            className="inset-0 w-full h-full object-cover"
                            loading="lazy"
                            onError={handleImageError}
                            onLoad={handleImageLoad} // Handle image load
                            aria-busy={loading}
                        />
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            className="inset-0 w-full h-full object-cover"
                            onError={handleImageError}
                            onLoad={handleImageLoad} // Handle image load
                            aria-busy={loading}
                        />
                    )}
                </div>
            ) : (
                <div className={`rounded overflow-hidden bg-gray-100 dark:bg-neutral-800 ${aspect} max-h-[95%] flex items-center justify-center`} role="presentation">
                    <div className='font-semibold text-neutral-500 flex flex-col items-center justify-center'>
                        Image not found
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </div>
                </div>
            )}
            {loading && (
                <div className="flex justify-center items-center" role="status">
                    <div>Loading...</div>
                </div>
            )}
            <div className='text-neutral-700 text-sm font-medium dark:text-neutral-200'>{caption}</div>
        </div>
    );
};

export default ImageComponent;
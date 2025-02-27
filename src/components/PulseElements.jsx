import { useEffect, useState } from "react";

const PulseElements = () => {
    const [visibleItems, setVisibleItems] = useState(0);

    useEffect(() => {
        const intervals = [];
        for (let i = 0; i < 5; i++) {
            intervals.push(setTimeout(() => setVisibleItems(prev => prev + 1), i * 500));
        }
        return () => intervals.forEach(clearTimeout);
    }, []);

    return (
        <div className="grid animate-pulse opacity-25 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center md:gap-8 gap-2 mt-4 lg:px-8 px-2">
            {[...Array(visibleItems)].map((_, index) => (
                <div
                    key={index}
                    className="w-full flex flex-col justify-between overflow-hidden rounded-2xl text-black shadow-2xl"
                >
                    <div>
                        <div className="border-b-1 animate-pulse bg-gray-400 border-black/10 w-full h-40 object-cover"></div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-2xl animate-pulse bg-gray-400 p-3 rounded-2xl text-ellipsis text-nowrap overflow-hidden mb-2">
                        </h2>
                        <p className="text-xs text-gray-500 animate-pulse p-3 bg-gray-400 rounded-2xl overflow-hidden text-ellipsis line-clamp-2">
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PulseElements;
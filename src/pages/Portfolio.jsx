import React, { useState, useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const Portfolio = () => {
  const [elements, setElements] = useState([]);
  const [type, setType] = useState(["all"]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch('/portfolio.json')
      .then((res) => res.json())
      .then((data) => {
        setElements(data);

        // Get unique types from data
        const uniqueTypes = ['all', ...new Set(data.map(item => item.type))];
        setType(uniqueTypes);
      })
      .catch((err) => {
        console.log("An error occurred", err);
      });
  }, []);

  // Filtered elements based on selected type
  const filteredElements = filter === "all" ? elements : elements.filter(el => el.type === filter);

  return (
    <div className='-z-1'>
      <div className='w-auto h-full p-5'>
        <div className="orbitron text-[28px] font-semibold text-[var(--white-1)]">Portfolio</div>
        <div className="w-[40px] bg-[var(--orange-yellow-crayola)] h-[5px] rounded-[10px] my-5"></div>
        
        <div className="flex flex-col gap-5">
          {/* Filter Buttons */}
          <div className="flex gap-2 flex-wrap">
            {type.map((e, index) => (
              <button
                key={index}
                className={`w-fit px-3 py-1 rounded-3xl hover:brightness-125 ${
                  filter === e
                    ? "bg-amber-300 text-[var(--eerie-black-)]"
                    : "bg-[var(--jet)] text-[var(--orange-yellow-crayola)]"
                }`}
                onClick={() => setFilter(e)}
              >
                {e}
              </button>
            ))}
          </div>

          {/* Portfolio Cards */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 w-fit">
            {filteredElements.map((element, index) => (
              <m.div
                key={index}
                className="bg-[var(--eerie-black-1)] rounded-xl border-1 border-[var(--orange-yellow-crayola)] w-fit overflow-hidden z-1"
              >
                <a href={element.url} target="_blank" rel="noopener noreferrer" className="relative">
                  <m.div
                    className="lg:h-[150px] md:w-[200px] w-[150px] absolute bg-transparent flex justify-center items-center text-2xl"
                    initial={{ translateY: -100, backdropFilter: "none", color: "transparent" }}
                    animate={{ translateY: 0, backdropFilter: "none", color: "transparent" }}
                    whileHover={{ translateY: 0, backdropFilter: "blur(10px)", color: "black" }}
                    exit={{ translateY: 0, opacity: 0, color: "transparent" }}
                    transition={{ duration: 0.1 }}
                  >
                    {element.name} <ExternalLink />
                  </m.div>
                  <img
                    src={element.img}
                    alt={element.name}
                    className="lg:h-[150px] md:w-[200px] w-[150px] object-cover rounded-[10px]"
                  />
                </a>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

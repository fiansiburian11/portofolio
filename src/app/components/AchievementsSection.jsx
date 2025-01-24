"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos"

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const achievementsList = [
  {
    index: 1,
    metric: "Projects",
    value: 50,
    postfix: "+",
  },
  {
    index: 2,
    metric: "Users",
    value: 1000,
  },
  {
    index: 3,
    metric: "Awards",
    value: 7,
  },
  {
    index: 4,
    metric: "Years",
    value: 1,
  },
];

const AchievementsSection = () => {

  //insialisasi library aos animation
  useEffect(()=>{
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <div data-aos="fade-up" className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 shadow-md shadow-[#C17FF5] rounded-xl gap-4">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between hover:shadow-md hover:shadow-[#C17FF5]">
        {achievementsList.map((achievement) => (
          <div key={achievement.index} className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <h2 className="text-white text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={() => ({
                  mass: 1,
                  friction: 50,
                  tension: 120,
                })}
              />

              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;

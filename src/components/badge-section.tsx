"use client";

import React from "react";
import SectionHeader from "./section-header";
import { badgesData } from "@/lib/data";

import { motion } from "@/lib/motion";
import Image from "next/image";
import { Card } from "./ui/card";

const fadeAnimationsVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.15 * index,
        },
    }),
};

function Badges() {
    return (
        <section
            id="badges"
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center flex flex-col items-center sm:mb-40 p-2"
        >
            <SectionHeader>My Badges</SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {badgesData &&
                    badgesData.length > 0 &&
                    badgesData.map((badge, index) => (
                        <motion.a
                            key={`badge-${index}`}
                            href={badge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                            variants={fadeAnimationsVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                            aria-label={`View badge: ${badge.title}`}
                        >
                            <Card className=" flex flex-col p-6 gap-4 h-full items-center justify-start bg-black/20 border-none hover:bg-white/5 dark:bg-white/5 dark:hover:bg-white/10 text-white/80">
                                <div className=" bg-white rounded-lg flex items-center justify-center w-full p-2">
                                    <Image
                                        src={badge.imageUrl}
                                        alt={badge.title}
                                        className="w-40 aspect-square rounded-lg bg-white p-2"
                                        width={"100"}
                                        height={"100"}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-center gap-2">
                                    <h3 className="text-lg text-white font-semibold text-left">
                                        {badge.title}
                                    </h3>
                                    <p className="text-sm font-light text-left">
                                        {badge.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.a>
                    ))}
            </div>
        </section>
    );
}

export default Badges;

import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Codewithnomi = (): JSX.Element => {
  // Grid cell data for background pattern
  const createGridRow = (count: number, highlightIndices: number[] = []) => {
    return Array.from({ length: count }, (_, index) => ({
      highlighted: highlightIndices.includes(index),
    }));
  };

  const gridRows = [
    createGridRow(16),
    createGridRow(16),
    createGridRow(16),
    createGridRow(16, [10, 11]),
    createGridRow(16, [6, 7, 14, 15]),
    createGridRow(16, [2, 3, 4, 5, 6, 7, 8, 14, 15]),
    createGridRow(16, [0, 1, 4, 5, 6, 7, 8, 9, 13, 14, 15]),
    createGridRow(16, [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]),
    createGridRow(16, [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    createGridRow(16, [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    createGridRow(16, [2, 3, 6, 7, 8, 9]),
  ];

  // Testimonial card data
  const testimonialCards = [
    {
      name: "Poetry Pea is helping all writers write better poetry & prose",
      supporters: "4.5k supporters",
    },
    {
      name: "Beach Talk Radio is a Dinky Little Podcast",
      supporters: "2.5k supporters",
    },
    {
      name: "India Rose Crawford keeps Knitting and creating videos!",
      supporters: "9.5k supporters",
    },
    {
      name: "Chilling Chinese is making awesome study materials",
      supporters: "9.5k members",
    },
    {
      name: "Neal Agarwal is making weird things on the web",
      supporters: "9.5k supporters",
    },
  ];

  // Navigation items
  const navItems = ["Product", "Pricing", "Company", "Blog", "Faq's"];

  return (
    <div className="w-full max-w-[1440px] h-[1024px] bg-[#1d1c21] rounded-[50px] overflow-hidden mx-auto relative">
      {/* Background grid pattern */}
      <div className="absolute top-[172px] left-[336px] z-0">
        {gridRows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex items-center">
            {row.map((cell, cellIndex) => (
              <div
                key={`cell-${rowIndex}-${cellIndex}`}
                className={`w-12 h-12 border border-solid border-[#313030] ${cell.highlighted ? "bg-[#ffffff0d]" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Background gradient overlay */}
      <div className="absolute w-full h-[598px] top-[133px] left-0 bg-[linear-gradient(180deg,rgba(29,28,33,1)_0%,rgba(29,28,33,0)_50%,rgba(29,28,33,1)_100%)] z-10" />

      {/* Background blurs */}
      <div className="absolute w-full h-[868px] top-0 left-0 rotate-180 z-0">
        <div className="relative h-[868px]">
          <div className="h-[69px] top-[330px] left-[-77px] bg-[#dbfc7f] rounded-[642.13px/34.5px] absolute w-[1284px] rotate-[-31.48deg] blur-[100px]" />
          <div className="h-[139px] top-[368px] left-[60px] bg-[#a5ebc7] rounded-[642.13px/69.64px] absolute w-[1284px] rotate-[-31.48deg] blur-[100px]" />
          <div className="h-[139px] top-[403px] left-[102px] bg-[#a5ebc7] rounded-[642.13px/69.64px] absolute w-[1284px] rotate-[-31.48deg] blur-[100px]" />
        </div>
      </div>

      <div className="absolute w-full h-[868px] top-1 left-0 z-0">
        <div className="relative h-[868px]">
          <div className="absolute w-[1284px] h-[69px] top-[468px] left-[-77px] bg-[#dbfc7f] rounded-[642.13px/34.5px] rotate-[-31.48deg] blur-[100px]" />
          <div className="absolute w-[1284px] h-[139px] top-[360px] left-[60px] bg-[#a5ebc7] rounded-[642.13px/69.64px] rotate-[-31.48deg] blur-[100px]" />
          <div className="absolute w-[1284px] h-[139px] top-[325px] left-[102px] bg-[#a5ebc7] rounded-[642.13px/69.64px] rotate-[-31.48deg] blur-[100px]" />
        </div>
      </div>

      {/* Navigation bar */}
      <header className="flex items-center justify-between w-full max-w-[1280px] mx-auto pt-8 px-4 relative z-20">
        {/* Logo */}
        <div className="flex items-center gap-1 p-2.5">
          <div className="w-8 h-[31px] relative">
            <img
              className="absolute w-6 h-6 top-1 left-1"
              alt="DevCore logo"
              src="/fa-brands-gg-circle.svg"
            />
          </div>
          <div className="font-bold text-white text-xl tracking-[3.00px]">
            DevCore
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-10 py-4 rounded-[100px] border border-solid border-[#0d0c15] backdrop-blur-[20px]">
          <ul className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <Button
                  variant="link"
                  className="text-white font-normal text-base"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button */}
        <Button className="h-[52px] bg-[#dbfc7f] text-black font-semibold rounded-[100px] border border-solid border-[#fafc7f]">
          Contact Us
        </Button>
      </header>

      {/* Feature icons */}
      <div className="absolute top-[196px] left-[643px] z-20">
        <div className="relative h-[67px]">
          <div className="flex w-[53px] h-[53px] items-center gap-[9.84px] p-[11.81px] absolute top-[7px] left-[7px] bg-[#85e7ea] rounded-[100px] overflow-hidden rotate-[-17deg] shadow-[0px_3.95px_15.82px_#85e7ea,inset_0px_0px_11.86px_3.95px_#ffffff]">
            <div className="relative w-[29.76px] h-[29.76px]">
              <img
                className="absolute w-7 h-[29px] top-px left-px rotate-[17deg]"
                alt="Design icon"
                src="/group.png"
              />
            </div>
          </div>

          <div className="flex w-[53px] h-[53px] gap-[9.84px] p-[11.81px] left-[50px] bg-[#bcf0af] shadow-[0px_3.95px_15.82px_#bcf0af,inset_0px_0px_11.86px_3.95px_#ffffff] items-center absolute top-[7px] rounded-[100px] overflow-hidden rotate-[-17deg]">
            <img
              className="relative w-[37.16px] h-[37.16px] mt-[-3.70px] mb-[-3.70px] ml-[-3.70px] mr-[-3.70px] rotate-[17deg]"
              alt="Build icon"
              src="/qlementine-icons-build-16.svg"
            />
          </div>

          <div className="inline-flex gap-[9.96px] p-[11.95px] left-[94px] bg-[#e3f897] shadow-[0px_4px_16px_#e3f897,inset_0px_0px_12px_4px_#ffffff] items-center absolute top-[7px] rounded-[100px] overflow-hidden rotate-[-17deg]">
            <img
              className="relative w-[37.59px] h-[37.59px] mt-[-3.74px] mb-[-3.74px] ml-[-3.74px] mr-[-3.74px] rotate-[17deg]"
              alt="Deploy icon"
              src="/famicons-rocket-outline.svg"
            />
          </div>
        </div>
      </div>

      {/* Hero section */}
      <main className="flex flex-col items-center justify-center w-full h-full relative z-20">
        <div className="flex flex-col items-center gap-[22px] max-w-[1126px] mt-20">
          <h1 className="text-8xl font-bold tracking-[-3.84px] leading-[80px] text-center bg-[linear-gradient(127deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,1)_23%,rgba(255,255,255,1)_51%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent font-['Geist',Helvetica]">
            Design, Build &amp;&nbsp;&nbsp;Deploy
          </h1>
          <p className="max-w-[753px] text-xl text-white text-center tracking-[0.40px] leading-[34px] opacity-60 font-['Geist',Helvetica]">
            From crafting stunning designs to building robust software and
            deploying it seamlessly, we&apos;re here to help your business
            shine.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-[18px] mt-10">
          <Button className="w-[210px] h-[52px] bg-[#dbfc7f] text-black font-semibold rounded-[100px] border border-solid shadow-[0px_0px_0px_4px_#fafd7f1a,0px_4px_30px_#fafd7f99]">
            Contact Us
          </Button>
          <Button
            variant="outline"
            className="w-[214px] h-14 text-white font-semibold rounded-[100px] border-none shadow-[0px_0px_0px_4px_#ffffff05,0px_4px_20px_#ffffff1a] backdrop-blur-[5px] font-['Albert_Sans',Helvetica]"
          >
            Explore Our Services
          </Button>
        </div>
      </main>

      {/* Testimonial cards */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-10 z-20">
        {testimonialCards.map((card, index) => (
          <Card
            key={index}
            className="w-[228px] bg-[#252429] rounded-[30px] border border-solid border-[#3e3d42]"
          >
            <CardContent className="flex flex-col items-center gap-2 p-5">
              <div className="w-[52px] h-[52px] rounded-full bg-[url(..//avatar-4.png)] bg-cover bg-center" />
              <p className="font-medium text-white text-[15px] text-center leading-5 font-['Inter',Helvetica]">
                {card.name}
              </p>
              <div className="flex items-center justify-center gap-[5px]">
                <img className="w-4 h-4" alt="Favourite" src="/favourite.svg" />
                <Badge
                  variant="outline"
                  className="bg-transparent border-none text-white text-sm font-normal font-['Inter',Helvetica]"
                >
                  {card.supporters}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gradient overlay for testimonial cards */}
      <div className="absolute w-full h-[306px] bottom-0 left-0 bg-[linear-gradient(90deg,rgba(29,28,33,1)_7%,rgba(29,28,33,0.1)_20%,rgba(29,28,33,0)_50%,rgba(29,28,33,0.1)_82%,rgba(29,28,33,1)_95%)] z-10" />
    </div>
  );
};

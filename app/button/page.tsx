"use client"

import { ButtonSuccess, ButtonWarning, ButtonDanger, ButtonPrimary, ButtonInfo, ButtonPrank } from "../../components/button";

const TestButton = () => {
   return(
    <main className="container mx-auto transition-all duration-700 ease-in">
        <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/DarkPolygon.mp4"
        autoPlay
        loop
        muted
        style={{ opacity: 0.5 }}
      />
      
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen relative z-100">
        {/* Flex container for title and dropdown */}
        <div className="flex items-center justify-between mb-8"></div>

        {/* Centered Button Container */}
        <div className="flex justify-center gap-4 m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
           <ButtonPrimary type="button" onClick={() => alert("Primary button clicked!")}>
               Primary Button
           </ButtonPrimary>
           <ButtonInfo type="button" onClick={() => alert("Info button clicked!")}>
               Info Button
           </ButtonInfo>
           <ButtonPrank type="button" onClick={() => alert("Prank button clicked!")}>
               Prank Button
           </ButtonPrank>
       </div>
       </div>
   </main>
   )
}

export default TestButton;

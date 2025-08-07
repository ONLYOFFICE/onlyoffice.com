import { HowItWorks } from "./sections/DesktopEditors"
import { Faq } from "./sections/Faq"
import { Features } from "./sections/Features"
import { GettingStarted } from "./sections/GettingStarted/GettingStarted"
import { Hero } from "./sections/Hero"
import { PrivateBlock } from "./sections/PrivateBlock"
import { Protect } from "./sections/Protect"

const PrivateRoomsTemplate = () => {
    return(
        <>
        <Hero />
        <Features />
        <HowItWorks />
        <PrivateBlock />
        <GettingStarted />
        <Protect />
        <Faq />
        </>
    )
}

export { PrivateRoomsTemplate }
import { ContactBlock } from "./sections/ContactBlock"
import { Features } from "./sections/Features"
import { FeaturesBottom } from "./sections/FeaturesBottom"
import { Formats } from "./sections/Formats"
import { Hero } from "./sections/Hero"

const DocumentBuilderTemplate = () => {
    return(
        <>
        <Hero />
        <Features />
        <Formats />
        <FeaturesBottom />
        <ContactBlock />
        </>
    )
}

export { DocumentBuilderTemplate }
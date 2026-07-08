import BigImage from "../containers/pmu/Artist/BigImage";
import MindBehindTheory from "../containers/pmu/Artist/MindBehindTheory";
import OriginOfTheory from "../containers/pmu/Artist/OriginOfTheory";
import TrueArtistry from "../containers/pmu/Artist/TrueArtistry";
import ContactSection from "../containers/pmu/ContactSection";

export default function page() {
    return (
        <div className="space-y-20">
        <section>
           <MindBehindTheory/>
        </section>
        <section>
            <TrueArtistry/>
        </section>
        <section>
            <OriginOfTheory/>
        </section>
        <section>
            <BigImage/>
        </section>
        <section>
            <ContactSection/>
        </section>
        </div>
    );
}
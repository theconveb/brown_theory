import Image from "next/image";

export default function BigImage() {
    return (
        <>
        <Image src="/images/tattoo.jpg" alt="Big Image" width={1440} height={700} className="h-[700px] object-cover" />
        </>
    );
}
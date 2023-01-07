import Image from "next/image"

export default function Wallpaper({ srcString, heightAttr = "h-[40vh]" }) {
    return <Image
        src={srcString}
        width={1600}
        height={800}
        className={`${heightAttr} w-full object-cover block`}
        alt="wallpaper"
    />
}
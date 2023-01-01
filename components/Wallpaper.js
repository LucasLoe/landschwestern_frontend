import Image from "next/image"

export default function Wallpaper({ srcString }) {
    return <Image
        src={srcString}
        width={1600}
        height={800}
        className="h-[40vh] w-full object-cover block"
        alt="wallpaper"
    />
}
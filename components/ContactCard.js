import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactCard({ title, text, imageSrc, handleSubmit, onPropsChange, formData }) {
    return (
        <div id="contact-card" className="w-full rounded-xl bg-[color:var(--ls-yellow)] max-w-[600px] px-4 lg:px-0 pt-4 lg:pt-0 lg:max-w-none my-4 flex flex-col lg:flex-row shadow-xl">
            <Image
                src={imageSrc}
                width={700}
                height={700}
                className="rounded-xl lg:mx-4 lg:my-8 w-full lg:w-1/3 object-cover"
                alt="something"
            />
            <div className='"h-full w-full my-auto mx-auto lg:mx-4 lg:my-8'>
                <h3 className="text-center lg:text-left text-xl mb-4 mt-4 lg:mt-0 text-[color:var(--ls-blue)] font-bold box-border">{title}</h3>
                <div className="text-center lg:text-left">
                    <PortableText value={text} />
                </div>
            </div>
            <div className="h-full w-full my-auto mx-auto lg:mx-4 py-4">
                <ContactForm formData={formData} onPropsChange={onPropsChange} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}
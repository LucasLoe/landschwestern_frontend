export default function ContactForm(props) {
    return (
        <div className="max-w-lg mx-auto">
            <div id="form-container" className="w-full h-full rounded-xl px-4 lg:px-10 py-5 bg-[color:var(--ls-white)] shadow-inner">
                <h3 className="font-bold text-[color:var(--ls-blue)] text-center text-lg"> Kontaktaufnahme zur Beratung: </h3>
                <form className="flex flex-col justify-center">
                    <input value={props.formData.name} onChange={(e) => props.onPropsChange(e)} className="w-full my-3 py-0 px-[5%] outline-0 bg-transparent border-0 border-b-2 border-[color:var(--ls-blue)] text-md" required type="text" id="name" name="name" placeholder="Name" />
                    <input value={props.formData.phone} onChange={(e) => props.onPropsChange(e)} className="w-full my-3 py-0 px-[5%] outline-0 bg-transparent border-0 border-b-2 border-[color:var(--ls-blue)] text-md" required type="text" id="phone" name="phone" placeholder="Telefon" />
                    <input value={props.formData.mail} onChange={(e) => props.onPropsChange(e)} className="w-full my-3 py-0 px-[5%] outline-0 bg-transparent border-0 border-b-2 border-[color:var(--ls-blue)] text-md" type="text" id="mail" name="mail" placeholder="E-Mail" />
                    <input value={props.formData.additional} onChange={(e) => props.onPropsChange(e)} className="w-full my-3 py-0 px-[5%] outline-0 bg-transparent border-0 border-b-2 border-[color:var(--ls-blue)] text-md" type="text" id="additional" name="additional" placeholder="Rückrufzeit" />
                    <input onClick={(e) => props.handleSubmit(e)} className="inline-block appearance-none bg-[color:var(--ls-white)] border-[3px] border-[color:var(--ls-blue)] rounded-xl w-[150px] lg:w-[200px] min-h-[60px] my-4 mx-auto px-2 py-1 text-center font-bold text-[color:var(--ls-blue)] hover:bg-[color:var(--ls-blue)] hover:text-[color:var(--ls-white)] hover:transition hover:ease-in-out hover:scale-[1.07] cursor-pointer" type="submit" value="Absenden!" />
                </form>
            </div>
        </div>
    )
}

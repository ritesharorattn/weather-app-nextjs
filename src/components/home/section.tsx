/**
 * @description Just a wrapper which can be used as wrapper
 */
const SECTION = ({ children }: { children: React.ReactNode })=>{
    return (
        <section className="p-5 ">
            <div className="grid grid-cols-12">
                {children}
            </div>
        </section>
    )
}

export default SECTION;
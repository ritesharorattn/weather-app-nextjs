/**
 * @description This will prepare icon object which can be used on homepage
 * @param {Object} props 
 */
const ICONS = (props: {icon:number}) => {
    if(props.icon){
        return (
            <div className="col-span-5 col-start-4">
                <img src={`./weather-icons/${props.icon}.png`} />
            </div>
        )
    }
}
export default ICONS;
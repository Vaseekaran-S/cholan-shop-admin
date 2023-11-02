
const styles = [
    'bg-white px-1 rounded font-medium hover:bg-blue-600 hover:text-white',
    'p-2 bg-black text-white rounded hover:bg-green-700',
] 

export function Button(props: any){
    return(
        <button {...props} className={styles[props?.styles-1]}>{props?.placeholder}</button>
    )
}
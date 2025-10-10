import cc from '../assets/cc.png'

export default function Header (){
    return(
        <div className="header">
           <img className='logo' src={cc} alt="" />
            <h1>CodeCooks</h1>
        </div>
    )
}
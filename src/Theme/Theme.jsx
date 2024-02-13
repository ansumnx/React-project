import React, { useState } from 'react'
import './Theme.css';
import Button from '../Buttoncom/Button';

const Theme = () => {

    let currenttheme = {
        Background: "white",
        color: "black",
        btntext: "Dark",
        btntxtcolor: 'white',
    };
    let [state, setstate] = useState(currenttheme)
    let [btn, setbtn] = useState(currenttheme);

    let changetheme = () => {
        let newstate = state.Background === "black" ?
            { ...currenttheme } : {
                ...currenttheme,
                Background: "black",
                color: "white",
                btntext: "light",
                btntxtcolor: 'white',
                
            }
            setstate(newstate);
             setbtn("")
        }
        
        let redtheme = () => {
            let latesttheme = state.Background === "white"?
            { ...currenttheme ,
                Background:"red",
                color:"white",
                textcolor:"black",
                
                
            } :
            {
                ...currenttheme,
                Background: "white",
                color:"black",
        }
        setstate(latesttheme);
        setbtn(latesttheme);
        
    }
    let css = {
        
        backgroundColor:state.Background, 
        color: state.color,
    }




    return (
        <>
            <header>
                <div className='nav'>
                    <h3>Theme changer</h3>
                </div>
                <ul className='lists'>
                    <li>Home</li>
                    <li>About</li>
                    <li>connect</li>
                </ul>
                
            </header>
            <div className='content' style={css}>
                <main style={{backgroundColor:btn.Background , color:btn.color}}>

                    <h2><span onClick={redtheme} style={{color:state.textcolor}}>Hello</span>This project about background change</h2>
                    <p>Lorem ipsum dolor sit amet quas neque, illum hic odio et dolores, quibusdam saepe, illo cupiditate quod. Dignissimos, explicabo libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam provident doloribus voluptates deserunt ullam iusto asperiores aspernatur? Id, accusamus nemo inventore nulla esse quos commodi quasi accusantium, itaque explicabo dolores placeat necessitatibus optio nostrum minima possimus ducimus doloremque suscipit dignissimos. Quasi nihil, assumenda ratione est labore non quisquam incidunt, voluptatibus nostrum at corrupti eligendi eius eveniet porro. Error praesentium sapiente nam qui! Accusantium omnis, tenetur dolores saepe eligendi dolorum soluta architecto impedit dicta ratione amet, illo modi adipisci nemo error ecusantium earum modi voluptatem cupiditate. Sequi nobis alias qui ex, deserunt sunt culpa libero repudiandae doloremque numquam omnis excepturi voluptate, nam laborum eum inventore, accusamus dicta perferendis. Assumenda distinctio excepturi libero magni. Consectetur similique quae totam debitis harum! .</p>
                    <div className='redtheme'>
                        <h4>our newest theme</h4>
                        <Button btntxt="red" btnclr={state.btntxtcolor} onclick={redtheme} />
                        <Button btntxt={state.btntext} btnclr={state.btntxtcolor}
                    onclick={changetheme} />
                    </div>
                </main>
            </div>
        </>



    )
}


export default Theme
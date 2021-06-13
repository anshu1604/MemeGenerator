import React from 'react'

function Header(){
    return(
        <header>
            <div style={{float:'left',padding:5}}>
                <img style={{width:100, height:75}}
                    src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
                    alt='Problem?'
                />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <h1 id='hh' style={{display:'inline',color:'whitesmoke',fontSize:'5vw'}}>Meme Generator</h1>
            </div>
        </header>
    )
}

export default Header;
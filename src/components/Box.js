import React, {useState} from 'react'
import X from './X';
import O from './O';
import PropTypes from 'prop-types'

const Box = ({player}) => {
    const [display, setDisplay] = useState('empty');
   
    const handleClick = () => {
        if (player === 'X'){
            setDisplay('X')
        }else if (player === "O"){
            setDisplay('O')
        }

    };
   

    return (
        <div onClick = {() => handleClick()} style={style.box} >
            {display ==='X'? <X /> : display ==='O'? <O />: <div>Empty</div>}
            
        </div>
    )
}

const style={
    box: {
        width : '200px',
        height: '200px',
        border: '1px solid black'
    }
}

Box.propTypes = {
    player: PropTypes.string.isRequired,
    handleClickBox: PropTypes.func.isRequired,
};

export default Box;


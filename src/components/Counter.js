import React, { useState } from 'react'
import { increment, decrement, reset, incrementByAmount } from '../store/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    // console.log(count)

    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => { dispatch(increment()) }}>+</button>
                <button onClick={() => { dispatch(decrement()) }}>-</button>
            </div>
            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <div>
                <button onClick={() => { dispatch(incrementByAmount(addValue)) }}>批量增減</button>
                <button onClick={resetAll}>reset</button>
            </div>
        </section>
    )
}

export default Counter
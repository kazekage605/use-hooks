import React, {useCallback, useEffect, useState} from "react";
import {useInterval} from '../src/use-interval';
import { Button } from '@storybook/react/demo';

export default {title: "定时器"}

function Counter({time,success}) {
    const [count,setCount] = useState(time);
    const [delay, setDelay] = useState(null);

    const start = () => {
        setDelay(1000)
    };

    useInterval(() => {
        setCount(count -1);
        //  count明明是0 为什么是1呢，setCount异步？
        if(count <= 1) {
            success(count);
            setCount(time);
            setDelay(null);
        }
    }, count ? delay : null);


    return (
        <div>
            <Button onClick={start}>开始计时</Button>
            <span>剩余时间：{count}</span>
        </div>
    )
}

export function Countdown() {
    const successCallback = (data) => {
        console.log("完成计时" + data);
    };
    return (
        <Counter time={5} success={successCallback}/>
    )
}
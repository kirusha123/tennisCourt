import React, { useState }from 'react'
import { Court } from './Court'
import './CourtList.css'
export function CourtList(props){
    const [courts] = useState(()=>{
        let courts = []
        let cid = 0;
        for (let i = 0; i < props.c_num; i+=1){
            courts.push({hours:props.init_hours, min:props.init_min, duration:props.duration, end_time:props.end_time, date:props.date, cid:cid})
            cid+=1;
        }
        return courts; 
    })
    const ListCourts = courts.map((el)=>{
        return(
            <Court init_hours={el.hours} init_min={el.min} duration={el.duration} end_time={el.end_time} date={el.duration} cid={el.cid}/>
        )
    })
    return(
            //<Court init_hours="17" init_min="00" duration="60" end_time="22:00" date="23.08.2021" cid="1"/>
        <div className="horizontal-box">
            {ListCourts}
        </div>
    )
}
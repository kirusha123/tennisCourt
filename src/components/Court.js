import React, {useState} from 'react'
import './Court.css'

export function Court(props) {
    const [cid] = useState(props.cid)
    const [init_hours] = useState(props.init_hours);
    const [init_min] = useState(props.init_min);
    const [duration] = useState(Number(props.duration));
    const [end_time] = useState(props.end_time);
    const [date] = useState(props.date);
    const [TimeTable] = useState(get_TimeTable());
    const ListTimeTable = TimeTable.map((el)=>{
        return(
            <div key={el.id} className="active">
                <span>
                    {el.hours.toString()}:{el.min}
                    <br/>
                </span>
                <span>{el.status}</span>
            </div>
        )
    })
   
    function normalize_time(min, hours){
        if (min>=60){
            return {min:min-60,hours:normalize_hours(hours+1)};
        }
        return {min:min, hours:hours};
    }

    function time_to_str(time){
        let min_str = minutes_to_string(time.min);
        let hours_str = hours_to_str(time.hours);
        return {min:min_str, hours:hours_str};
    }

    function normalize_hours(hours){
        if (hours>=24){
            return hours-24;
        }
        return hours;
    }

    function minutes_to_string(min){
        let min_str =""
        if (min < 10){
            min_str = "0"+min;
        }else{
            min_str = min.toString();
        }
        return min_str;
    }

    function hours_to_str(hours){
        
        let hours_str = "";

        if (hours < 10){
            hours_str = "0"+hours;
        }else{
            hours_str = hours;
        }

        return hours_str;
    }

    function get_TimeTable(){
            let arr = [];
            let id = 0;
            let time = normalize_time(Number(init_min), Number(init_hours));
            let time_str = time_to_str(time)
            //arr = [...arr,{min:min, hours:hours, status:"available"}];
            arr.push({min:time_str.min, hours:time_str.hours, status:"available",id:id})
            id+=1;
            while((time_str.hours+":"+time_str.min) !== end_time){
                time = normalize_time(time.min+duration, time.hours)
                time_str = time_to_str(time)
                arr.push({min:time_str.min, hours:time_str.hours, status:"available",id:id})
                id+=1; 
            }
            return arr;
    }


    return(
        <div className="vertical-box">
            {ListTimeTable}
        </div>
    )
}
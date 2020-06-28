import React, { useEffect,useState } from 'react';
import  { Checkbox, Row }  from 'antd';
const PicShow = ({pictures,values,onChange}) => {
    const [isChecked, setChecked] = useState(false);
    let everyChange = (picid)=>{
        if(values.includes(picid)){
            values.splice(values.indexOf(picid),1)
        }else{
            values.push(picid)
        }
        console.log(values)
        onChange(values.slice())
    }
    let allChose = ()=>{
        if(isChecked){
            setChecked(false)
            onChange([])
        }else{
            setChecked(true)
            let picid = []
            picid = pictures.map((item)=>{return item.id})
            onChange(picid)
        }
    }
    //监控是否全选
    useEffect(()=>{
        if(values.length === pictures.length){
            setChecked(true)
        }else{
            setChecked(false)
        }
    },pictures)
    return (
        <div>
            <Row>
                <label>
                    <Checkbox
                    onChange={()=>{
                        allChose()
                    }}
                    />
                    选择{values.length}个图片
                </label>
            </Row>
            <Row>
            {
                pictures.map((item,idx)=>{
                    return (
                        <div>
                            <Checkbox
                                checked={values.includes(item.id)}
                                onChange={()=>everyChange(item.id)}
                            />
                            <img src={item.url} alt=""/>

                        </div>
                    )
                })
            }
            </Row>
        </div>
    );
};

export default PicShow;
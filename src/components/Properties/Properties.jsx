import React, { useEffect, useMemo } from 'react'
import useFetch from '../../hooks/useFetch'
import "./Properties.css"

const Properties = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const propertiesData = [
        { type: "hotel", count: 0, imgUrl: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" },
        { type: "appartment", count: 0, imgUrl: "https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" },
        { type: "resort", count: 0, imgUrl: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" },
        { type: "villa", count: 0, imgUrl: "https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" },
        { type: "cabin", count: 0, imgUrl: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" },
    ]

    const { loading, error, data } = useFetch("/hotels/countByType")

    useEffect(() => {
        console.log({ loading, error, data })
    }, [loading, error, data])

    let fetchedData = useMemo(() => (data.length > 0 ?
        propertiesData.map(item => ({ ...item, ...data.find(obj => obj.type === item.type) })) : []
    ), [data, propertiesData])

    return (
        <div className='properties limitWidth'>
            {loading ?
                "Loading..." :
                fetchedData.map(item => (
                    <div className="pItem" key={item.type}>
                        <img src={item.imgUrl} alt={item.type} />
                        <div className="pTitle">
                            <h3>{item.type}</h3>
                            <p>{item.count} {item.name}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Properties